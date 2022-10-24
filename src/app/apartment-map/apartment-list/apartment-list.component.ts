import { Component, OnInit } from '@angular/core';
import { Observable, map, of, switchMap, take, tap } from 'rxjs';

import { APARTMENT_MAP_CONFIG } from '../apartment-map-config.const';
import { DocumentData } from '@angular/fire/firestore';
import { FirestoreService } from './../../core/firestore.service';
import { LngLatLike } from 'mapbox-gl';
import { MapConfig } from '@shared/map/map-config.interface';

@Component({
  selector: 'app-aprtment-map-list',
  templateUrl: './apartment-list.component.html',
})
export class ApartmentListComponent implements OnInit {
  mapConfig: MapConfig = APARTMENT_MAP_CONFIG;
  apartments$: Observable<DocumentData[]>;
  markersPoitions$: Observable<LngLatLike[]> = of([]);

  constructor(private fireStoreService: FirestoreService) {
    this.apartments$ = this.fireStoreService.getCollectionData('apartment');
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
