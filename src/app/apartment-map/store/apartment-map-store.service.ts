import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Apartment } from '@shared/interfaces/apartment.interface';
import { FeatureState } from './apartment-map.reducer';
import { Injectable } from '@angular/core';
import { MarkerProps } from '@shared/interfaces/marker.interface';
import { loadApartments } from './apartment-map.actions';
import { selectApartments } from './apartment-map.selector';

@Injectable({ providedIn: 'root' })
export class ApartmentMapStoreService {
    
  get apartments$(): Observable<Apartment[]> {
    return this.store.pipe(select(selectApartments));
  }

  get markers$(): Observable<MarkerProps[]> {
    return this.apartments$.pipe(
      map((apartments) =>
        apartments.map(
          (apartment) =>
            ({
              id: apartment.propertyId,
              geolocation: [
                apartment.geoposition.latitude,
                apartment.geoposition.longitude,
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

  getApartment(propertyId: string): Observable<Apartment | undefined> {
    return this.apartments$.pipe(
      map((apartments: Apartment[]) => {
        return (
          apartments.find(
            (apartment) => apartment.propertyId === propertyId
          ) || undefined
        );
      })
    );
  }

  getApartmentMarkeProps(propertyId: string): Observable<MarkerProps> {
    return this.apartments$.pipe(
      map((apartments: Apartment[]) => {
        const selectedApartment =
          apartments.find(
            (apartment) => apartment.propertyId === propertyId
          ) || {} as Apartment;
        return {
          id: selectedApartment.propertyId,
          geolocation: [
            selectedApartment.geoposition.latitude,
            selectedApartment.geoposition.longitude,
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
          (apartment) => apartment.floorPlans[0].price <= Number(maxPrice)
        )
      ),
      map((filteredApartments) => {
        return filteredApartments.map((filterdApartment: Apartment) => ({
          id: filterdApartment.propertyId,
          geolocation: [
            filterdApartment.geoposition.latitude,
            filterdApartment.geoposition.longitude,
          ],
        }));
      })
    );
  }
}
