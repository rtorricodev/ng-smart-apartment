import { Observable, map, tap } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DocumentData } from '@angular/fire/firestore';
import { FeatureState } from './apartment-map.reducer';
import { Injectable } from '@angular/core';
import { MarkerProps } from '@shared/interfaces/marker.interface';
import { loadApartments } from './apartment-map.actions';
import { selectApartments } from './apartment-map.selector';

@Injectable({ providedIn: 'root' })
export class ApartmentMapStoreService {
    
  get apartments$(): Observable<DocumentData[]> {
    return this.store.pipe(select(selectApartments));
  }

  get markers$(): Observable<MarkerProps[]> {
    return this.apartments$.pipe(
      map((apartments) =>
        apartments.map(
          (apartment) =>
            ({
              id: apartment['propertyId'],
              geolocation: [
                apartment['geoposition'].latitude,
                apartment['geoposition'].longitude,
              ],
            } as MarkerProps)
        )
      )
    );
  }

  constructor(private store: Store<FeatureState>) {}

  doLoadAppartments(): void {
    this.store.dispatch(loadApartments());
  }

  getApartment(propertyId: string): Observable<DocumentData | undefined> {
    return this.apartments$.pipe(
      map((apartments: DocumentData[]) => {
        return (
          apartments.find(
            (apartment) => apartment['propertyId'] === propertyId
          ) || undefined
        );
      })
    );
  }

  getApartmentMarkeProps(propertyId: string): Observable<MarkerProps> {
    return this.apartments$.pipe(
      map((apartments: DocumentData[]) => {
        const selectedApartment =
          apartments.find(
            (apartment) => apartment['propertyId'] === propertyId
          ) || {};
        return {
          id: selectedApartment['propertyId'],
          geolocation: [
            selectedApartment['geoposition'].latitude,
            selectedApartment['geoposition'].longitude,
          ],
        } as MarkerProps;
      })
    );
  }

  getApartmentMarkerPropsFiteredByPrice(
    maxPrice: number
  ): Observable<MarkerProps[]> {
    return this.apartments$.pipe(
      map((apartments) =>
        apartments.filter(
          (apartment) => apartment['floorPlans'][0].price <= maxPrice
        )
      ),
      map((filteredApartments) => {
        return filteredApartments.map((filterdApartment: DocumentData) => ({
          id: filterdApartment['propertyId'],
          geolocation: [
            filterdApartment['geoposition'].latitude,
            filterdApartment['geoposition'].longitude,
          ],
        }));
      })
    );
  }
}
