import { ApartmentMapListComponent } from './apartment-map-list/apartment-map-list.component';
import { ApartmentMapRoutingModule } from './apartment-map-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ApartmentCardComponent } from './apartment-map-list/apartment-card/apartment-card.component';

@NgModule({
  declarations: [
    ApartmentMapListComponent,
    ApartmentCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApartmentMapRoutingModule
  ]
})
export class ApartmentMapModule { }
