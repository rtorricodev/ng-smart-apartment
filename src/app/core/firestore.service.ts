import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

import { Apartment } from '@shared/interfaces/apartment.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getCollectionData(collectionName: string): Observable<Apartment[]> {
    return collectionData(collection(this.firestore, collectionName)).pipe(
      map((apartment: DocumentData[]) => apartment as Apartment[] )
    );
  }
  
}
