import { Component, OnInit } from '@angular/core';
import { Observable, filter, find, map, of, switchMap, take, tap } from 'rxjs';

import { APARTMENT_MAP_CONFIG } from '../apartment-map-config.const';
import { Apartment } from './apartment.interface';
import { DocumentData } from '@angular/fire/firestore';
import { FirestoreService } from './../../core/firestore.service';
import { LngLatLike } from 'mapbox-gl';
import { MapConfig } from '@shared/map/map-config.interface';

@Component({
  selector: 'app-aprtment-map-list',
  template: `
    <div class=" flex">
        <div *ngIf="!isApartmentSelected" class="w-2/6">
            <app-apartment-list-panel (apartmentSelectedEvent)="handleSelection($event)" [apartments]="(apartments$ | async)"></app-apartment-list-panel>
        </div>
        <div *ngIf="isApartmentSelected" class="w-2/6">
          <app-apartment-detail-panel (backEvent)="handleBack()" [selectedApartment]="(selectedApartment$ | async)" ></app-apartment-detail-panel>
        </div>
        <div class="w-4/6 h-screen">
            <app-map [mapConfig]="mapConfig" [markersPoitions$]=" this.markersPoitions$" ></app-map>
        </div>
    </div>
  `,
})

export class ApartmentListComponent implements OnInit {
  apartments$: Observable<DocumentData[]>;
  markersPoitions$: Observable<LngLatLike[]> = of([]);
  mapConfig: MapConfig = APARTMENT_MAP_CONFIG;
  selectedApartment$: Observable<DocumentData | undefined> = of();
  
  isApartmentSelected: boolean = false;

  constructor(private fireStoreService: FirestoreService) {
    this.apartments$ = this.fireStoreService.getCollectionData('apartment');
  }

  handleSelection(propertyId: string): void {
    this.isApartmentSelected = true;
    this.selectedApartment$ = this.apartments$.pipe(
      map((apartments: DocumentData[]) => apartments.find((apartment) => apartment['propertyId'] === propertyId)),
    );
  }

  handleBack(): void {
    this.isApartmentSelected = false;
  }

  ngOnInit(): void {
    this.markersPoitions$ = this.apartments$.pipe(
      map((apartments) =>
        apartments.map((apartment) => [
          apartment['geoposition'].latitude,
          apartment['geoposition'].longitude,
        ])
      ),
    )
  }
}
