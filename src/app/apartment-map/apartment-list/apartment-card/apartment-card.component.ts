import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Apartment } from './../apartment.interface';
import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-apartment-card',
  template: `
  <div (click)="onClick()" class=" w-full h-32 bg-white my-3 rounded-md shadow-lg flex flex-wrap cursor-pointer">
    <div class=" w-4/6 h-full flex justify-center">
        <div class="w-10/12 mt-4">
            <p class="font-bold text-gray-700">{{ apartment.name }}</p>
            <p class="text-sm text-gray-700">{{ apartment.streetAddress }}</p>
        </div>
    </div>
    <div class=" w-2/6 h-full flex items-center justify-center ">
        <div>
            <img class="rounded-md w-10/12" [src]="apartment.photo" alt="">
        </div>
    </div> 
</div>`
})

export class ApartmentCardComponent {

  @Input() apartment: Apartment | DocumentData = {} as Apartment; 
  @Output() clickEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  onClick(): void {
    this.clickEvent.emit(this.apartment.propertyId);
  }
}
