import { Component, OnInit } from '@angular/core';
import { Observable, map, of, take, tap } from 'rxjs';

import { APARTMENT_MAP_CONFIG } from '../apartment-map-config.const';
import { DocumentData } from '@angular/fire/firestore';
import { FirestoreService } from '@core/firestore.service';
import { MapConfig } from '@shared/interfaces/map-config.interface';
import { MapService } from '@core/map.service';
import { MarkerProps } from '@shared/interfaces/marker.interface';

@Component({
  selector: 'app-aprtment-map-list',
  template: `
    <div class=" flex">
      <div *ngIf="!isApartmentSelected" class="w-2/6">
        <app-apartment-list-panel
          (apartmentSelectedEvent)="handleSelection($event)"
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
        <app-map [mapConfig]="mapConfig" [markers$]="this.markers$"></app-map>
      </div>
    </div>
  `,
})
export class ApartmentListComponent implements OnInit {
  apartments$: Observable<DocumentData[]>;
  markers$: Observable<MarkerProps[]> = of([]);
  selectedApartment$: Observable<DocumentData | undefined> = of();

  isApartmentSelected: boolean = false;
  mapConfig: MapConfig = APARTMENT_MAP_CONFIG;

  constructor(
    private fireStoreService: FirestoreService,
    private mapService: MapService
  ) {
    this.apartments$ = this.fireStoreService.getCollectionData('apartment');
  }

  handleSelection(propertyId: string): void {
    this.isApartmentSelected = true;
    this.selectedApartment$ = this.apartments$.pipe(
      map((apartments: DocumentData[]) =>
        apartments.find((apartment) => apartment['propertyId'] === propertyId)
      ),
      tap((selectedApartment) => {
        if (selectedApartment) {
          this.mapService.focusMarker({ 
            id: selectedApartment['propertyId'],
            geolocation: [
              selectedApartment['geoposition'].latitude,
              selectedApartment['geoposition'].longitude,
            ]
          });
        }
      })
    );
  }

  handleBack(): void {
    this.isApartmentSelected = false;
    this.selectedApartment$.pipe(
      tap((selectedApartment) => {
        if (selectedApartment) {
          this.mapService.unfocusMarker({ 
            id: selectedApartment['propertyId'],
            geolocation: [
              selectedApartment['geoposition'].latitude,
              selectedApartment['geoposition'].longitude,
            ]
          });
        }
      }),
      take(1)
    ).subscribe();
  }

  ngOnInit(): void {
    this.markers$ = this.apartments$.pipe(
      map((apartments) =>
        apartments.map((apartment) => ({
          id: apartment['propertyId'],
          geolocation: [
            apartment['geoposition'].latitude,
            apartment['geoposition'].longitude,
          ],
        }))
      )
    );
  }
}
