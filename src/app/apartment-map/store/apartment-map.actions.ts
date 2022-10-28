import { createAction, props } from '@ngrx/store';

import { Apartment } from '@shared/interfaces/apartment.interface';
import { featureKey } from './featureKey.constant';

export const loadApartments = createAction(`[${featureKey}] Load Apartments.`);

export const loadApartmentsSucess = createAction(
  `[${featureKey}] Load Apartments Sucess.`,
  props<{ apartments: Apartment[] }>()
);

export const loadApartmentsFailed = createAction(
  `[${featureKey}] Load Apartments Faillure.`
);
