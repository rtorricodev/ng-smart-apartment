import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, of, take, takeUntil, tap } from 'rxjs';

import { APARTMENT_MAP_CONFIG } from '../constants/apartment-map-config.const';
import { Apartment } from '@shared/interfaces/apartment.interface';
import { ApartmentMapStoreService } from '../store/apartment-map-store.service';
import { MapConfig } from '@shared/interfaces/map-config.interface';
import { MapService } from '@shared/services/map.service';
import { MarkerProps } from '@shared/interfaces/marker.interface';

@Component({
  selector: 'app-aprtment-map-list',
  template: `
    <div class=" flex">
      <div *ngIf="!isApartmentSelected" class="w-2/6">
        <app-apartment-list-panel
          (apartmentSelectedEvent)="handleSelection($event)"
          (filterChangedEvent)="handleFilterChange($event)"
          [apartments]="apartments$ | async"
        ></app-apartment-list-panel>
      </div>
      <div *ngIf="isApartmentSelected" class="w-2/6">
        <app-apartment-detail-panel
          (backEvent)="handleBack()"
          [selectedApartment]="selectedApartment$ | async"
        ></app-apartment-detail-panel>
      </div>
      <div class="w-4/6 h-screen">
        <app-map [mapConfig]="mapConfig"></app-map>
      </div>
    </div>
  `,
})
export class ApartmentListComponent implements OnInit, OnDestroy {
  apartments$: Observable<Apartment[]> = of();
  destroy$: Subject<boolean> = new Subject<boolean>();
  markers$: Observable<MarkerProps[]> = this.apartmentMapStoreService.markers$;
  selectedApartment$: Observable<Apartment | undefined> = of();

  defuatFilterMaxPrice: number = 17000;
  isApartmentSelected: boolean = false;
  selectedId: string = '';
  mapConfig: MapConfig = APARTMENT_MAP_CONFIG;

  constructor(
    private mapService: MapService,
    private apartmentMapStoreService: ApartmentMapStoreService
  ) {}

  handleFilterChange(maxPrice: number): void {
    this.apartmentMapStoreService.getApartmentMarkerPropsFiteredByPrice(maxPrice).pipe(
      tap((filteredMarkerProps: MarkerProps[]) =>  this.mapService.updateAllMarkers(filteredMarkerProps)),
      take(1),
    ).subscribe()
  }

  handleSelection(propertyId: string): void {
    this.isApartmentSelected = true;
    this.selectedId = propertyId;
    this.selectedApartment$ = this.apartmentMapStoreService.getApartment(propertyId);
    this.apartmentMapStoreService.getApartmentMarkeProps(propertyId).pipe(
      tap((markerProps: MarkerProps) => this.mapService.focusMarker(markerProps)),
      take(1),
    ).subscribe();
  }

  handleBack(): void {
    this.isApartmentSelected = false;
    this.apartmentMapStoreService.getApartmentMarkeProps(this.selectedId).pipe(
      tap((markerProps: MarkerProps) => this.mapService.unfocusMarker(markerProps)),
      take(1),
    ).subscribe();
    this.selectedId = '';
    this.handleFilterChange(this.defuatFilterMaxPrice);
  }

  ngOnInit(): void {
    this.apartmentMapStoreService.doLoadAppartments();
    this.apartments$ = this.apartmentMapStoreService.apartments$;
    this.markers$.pipe(
      tap(
        (markers: MarkerProps[]) => this.mapService.addMarkers(markers)),
      takeUntil(this.destroy$),
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
