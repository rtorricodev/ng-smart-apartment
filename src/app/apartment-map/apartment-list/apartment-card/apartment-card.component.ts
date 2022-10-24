import { Component, Input, OnInit } from '@angular/core';

import { Apartment } from './../apartment.interface';
import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
})


export class ApartmentCardComponent {

  @Input() apartment: Apartment | DocumentData = {} as Apartment; 

  constructor() { }


}
