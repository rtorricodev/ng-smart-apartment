import { createAction, props } from '@ngrx/store';

import { DocumentData } from '@angular/fire/firestore';
import { featureKey } from './featureKey.constant';

export const loadApartments = createAction(`[${featureKey}] Load Apartments.`);

export const loadApartmentsSucess = createAction(
  `[${featureKey}] Load Apartments Sucess.`,
  props<{ apartments: DocumentData[] }>()
);

export const loadApartmentsFailed = createAction(
  `[${featureKey}] Load Apartments Faillure.`
);
