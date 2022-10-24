import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-apartment-list-panel',
  template: `
    <div class="w-2/6 h-36 fixed">
        <div class=" w-full h-1/3 bg-blue-600 flex justify-center items-center">
            <p class="text-white">Smart Assesment</p>
        </div>
        <div class=" w-full h-2/3 bg-blue-500 flex justify-between items-center px-5">
            <p class="text-white">Filters</p>
            <div class="w-10 h-10 bg-white rounded-full cursor-pointer flex justify-center items-center">
                <i class="material-icons text-gray-500">favorite</i>
            </div>
        </div>
    </div>

    <div class=" w-full h-screen bg-slate-100 overflow-scroll flex flex-wrap justify-center ">
        <div class="mt-36 w-11/12">
            <div *ngFor="let apartment of apartments, let i = index" >
                <app-apartment-card (clickEvent)="handleClick($event)" [apartment]="apartment"></app-apartment-card>
            </div>
        </div>
    </div>
  `
})

export class ApartmentListPanelComponent {

    @Input() apartments: DocumentData[] | null = [];
    @Output() apartmentSelectedEvent: EventEmitter<string> = new EventEmitter();

    constructor() { }

    handleClick(propertyId: string): void {
        this.apartmentSelectedEvent.emit(propertyId);
    }
}
