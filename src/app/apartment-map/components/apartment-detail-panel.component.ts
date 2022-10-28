import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Apartment } from '@shared/interfaces/apartment.interface';

@Component({
  selector: 'app-apartment-detail-panel',
  template: `
    <div class="fixed w-2/6 h-36">
        <div class=" w-full h-1/3 bg-blue-600 flex justify-center items-center">
            <p (click)="emitBackEvent()" class="text-white cursor-pointer ">Back to Results</p>
        </div>
        <div class=" w-full h-2/3 bg-blue-500 flex justify-between items-center px-5 top-16">
            <div>
                <p class="text-white">
                    {{selectedApartment? selectedApartment.name : ""}}
                    <span class="mx-2">
                        <a [href]="selectedApartment? selectedApartment.url : '' " target="_blank">
                            <i class="material-icons text-white">public</i>
                         </a>
                    </span>
                </p>
                <span class="text-white font-light">
                    {{selectedApartment? selectedApartment.streetAddress : ""}} -
                    {{selectedApartment? selectedApartment.phone : ""}}
                </span>
            </div>
            <div class="w-10 h-10 bg-white rounded-full cursor-pointer flex justify-center items-center">
                <i class="material-icons text-gray-500">favorite</i>
            </div>
        </div>
    </div>
    <div class="fixed w-2/6 h-28 mt-36 flex overflow-scroll justify-center">
        <ng-container *ngFor="let photo of (selectedApartment? selectedApartment.photos : [])">
            <img [src]="photo" alt="image of apartment" class="rounded-sm w-auto mx-1 my-2"/>
        </ng-container>
    </div>

    <mat-tab-group class="fixed w-2/6 h-4/6 top-64 ">
        <mat-tab label="Plans" class=" overflow-scroll">
            <div class="w-full flex justify-center flex-wrap ">
                <div class=" text-sm mx-5 my-3 text-gray-700">
                    {{selectedApartment? selectedApartment.specials : "" }}
                </div>
                <ng-container *ngFor="let floor of (selectedApartment? selectedApartment.floorPlans : [])">
                    <div class="w-11/12 h-16 bg-white rounded-md shadow-md m-3 flex justify-between items-center">
                        <p class="mx-3">{{floor.bed}} bed, {{floor.bath}} bath</p>
                        <p class="mx-3">No connections</p>
                        <p class="mx-3 text-blue-800 font-light text-lg">$ {{floor.price}} - $ {{floor.priceMax}}</p>
                    </div>
                </ng-container>
            </div>

        </mat-tab>
        <mat-tab label="Overview">
        <div class="my-3 ml-6 text-gray-700">HIGH-VALUE amenities</div>
            <div class="w-full h-[9rem] flex justify-center flex-wrap">
                <ng-container *ngFor="let amenities of (selectedApartment? selectedApartment.highValueAmenities : [])">
                    <div class="w-5/12 h-12 bg-white rounded-md shadow-md mx-3 my-2 flex items-center justify-center">
                        <p>{{amenities}}</p>
                    </div>
                </ng-container>
            </div> 
            <div class="my-3 ml-6 text-gray-700">COMMUNITY FEATURES</div>
            <div class="w-full h-[12rem] flex justify-center flex-wrap">
                <ng-container *ngFor="let amenities of (selectedApartment? selectedApartment.propertyAmenities : [])">
                    <div class="w-5/12 h-12 bg-white rounded-md shadow-md mx-3 my-2 flex items-center justify-center">
                        <p>{{amenities}}</p>
                    </div>
                </ng-container>
            </div> 
            <div class="my-3 ml-6 text-gray-700">UNIT OPTIONS</div>
            <div class="w-full h-[12rem] flex justify-center flex-wrap">
                <ng-container *ngFor="let unitAmenities of (selectedApartment? selectedApartment.unitAmenities : [])">
                    <div class="w-5/12 h-12 bg-white rounded-md shadow-md mx-3 my-2 flex items-center justify-center">
                        <p>{{unitAmenities}}</p>
                    </div>
                </ng-container>
            </div> 
        </mat-tab>
    </mat-tab-group>
    <div class=" w-full h-screen bg-slate-100 overflow-scroll flex flex-wrap justify-center">
    </div>
  `
})

export class ApartmentDetailPanelComponent {

    @Output() backEvent: EventEmitter<void> = new EventEmitter();  
    @Input() selectedApartment:  Apartment | undefined | null = {} as Apartment;

    constructor() { }

    emitBackEvent(): void {
        this.backEvent.emit();
    }
}
