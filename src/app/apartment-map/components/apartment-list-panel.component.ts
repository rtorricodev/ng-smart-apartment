import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Apartment } from '@shared/interfaces/apartment.interface';
import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-apartment-list-panel',
  template: `
    <div class="w-2/6 h-36 fixed">
      <div class=" w-full h-1/3 bg-blue-600 flex justify-center items-center">
        <p class="text-white">Smart Assesment</p>
      </div>
      <div
        class=" w-full h-2/3 bg-blue-500 flex justify-between items-center px-5"
      >
        <div>
          <p class="text-white"><b> Rent:</b> $ 805 - $ {{ maxPrice }}</p>
          <mat-slider
            thumbLabel
            thumbLabel="true"
            tickInterval="1000"
            step="100"
            min="805"
            max="17000"
            (change)="onFilterChanged()"
            [(ngModel)]="maxPrice"
          >
          </mat-slider>
        </div>
        <div
          class="w-10 h-10 bg-white rounded-full cursor-pointer flex justify-center items-center"
        >
          <i class="material-icons text-gray-500">favorite</i>
        </div>
      </div>
    </div>

    <div
      class=" w-full h-screen bg-slate-100 overflow-scroll flex flex-wrap justify-center "
    >
      <div class="mt-36 w-11/12">
        <ng-container *ngIf="apartments">
          <ng-container *ngIf="apartments.length !== 0; else loading">
            <div
              *ngFor="
                let apartment of apartments | filter: maxPrice;
                let i = index
              "
            >
              <app-apartment-card
                (clickEvent)="onClick($event)"
                [apartment]="apartment"
              ></app-apartment-card>
            </div>
          </ng-container>
        </ng-container>
        <ng-template #loading>
          <div class=" w-full flex justify-center mt-12">
            <mat-spinner></mat-spinner>
          </div>
        </ng-template>
      </div>
    </div>
  `,
})
export class ApartmentListPanelComponent {
  @Input() apartments: Apartment[] | null | undefined = [];
  @Output() apartmentSelectedEvent: EventEmitter<string> = new EventEmitter();
  @Output() filterChangedEvent: EventEmitter<number> = new EventEmitter();

  maxPrice: number = 17000;

  constructor() {}

  onClick(propertyId: string): void {
    this.apartmentSelectedEvent.emit(propertyId);
  }

  onFilterChanged(): void {
    this.filterChangedEvent.emit(this.maxPrice);
  }
}
