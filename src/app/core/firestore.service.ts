import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getCollectionData(collectionName: string): Observable<DocumentData[]> {
    return collectionData(collection(this.firestore, collectionName));
  }
}
