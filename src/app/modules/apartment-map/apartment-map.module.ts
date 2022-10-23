import { ApartmentMapRoutingModule } from './apartment-map-routing.module';
import { AprtmentMapListComponent } from './aprtment-map-list/aprtment-map-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AprtmentMapListComponent
  ],
  imports: [
    CommonModule,
    ApartmentMapRoutingModule
  ]
})
export class ApartmentMapModule { }
