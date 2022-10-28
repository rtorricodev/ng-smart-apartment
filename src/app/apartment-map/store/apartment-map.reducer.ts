import { createReducer, on } from '@ngrx/store';
import { loadApartmentsFailed, loadApartmentsSucess } from './apartment-map.actions';

import { DocumentData } from '@angular/fire/firestore';

export interface FeatureState {
    apartments: DocumentData[];
    errorLoading: boolean;
}
  
  
export const initialSate: FeatureState = {
    apartments: [],
    errorLoading: false,
}

export const reducer = createReducer(
    initialSate,

    on(loadApartmentsSucess, (state, { apartments }): FeatureState => {
            return { 
                ...state, 
                apartments
            }
        }
    ),

    on(loadApartmentsFailed, (state): FeatureState => {
        return { 
            ...state, 
            errorLoading: true,
        }
    },

),
)

