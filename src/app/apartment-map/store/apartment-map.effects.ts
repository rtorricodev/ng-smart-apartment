import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { loadApartments, loadApartmentsFailed, loadApartmentsSucess } from './apartment-map.actions';

import { FirestoreService } from '@core/firestore.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class ApartmentEffects {
 
  laodApartments$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadApartments),
      switchMap(() => this.firestoreService.getCollectionData('apartment').pipe(
        map((apartments) => loadApartmentsSucess({ apartments })),
        catchError(() => of(loadApartmentsFailed())),
      ))
    )
  )

  constructor(
    private actions$: Actions,
    private firestoreService: FirestoreService,
  ) {}
}