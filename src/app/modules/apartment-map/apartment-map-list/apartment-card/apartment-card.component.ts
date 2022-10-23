import { Component, Input, OnInit } from '@angular/core';

import { ApartmentCard } from './apartment-card.interface';

@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.css']
})


export class ApartmentCardComponent implements OnInit {

  @Input() apartmentCard: ApartmentCard | undefined; 

  constructor() { }

  ngOnInit(): void {
  }

}
