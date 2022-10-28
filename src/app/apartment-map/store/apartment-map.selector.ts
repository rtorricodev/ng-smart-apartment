import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FeatureState } from './apartment-map.reducer';
import { featureKey } from './featureKey.constant';

export const selectApartmentFeature =
  createFeatureSelector<FeatureState>(featureKey);

export const selectApartments = createSelector(
  selectApartmentFeature,
  (state: FeatureState) => state.apartments
);

