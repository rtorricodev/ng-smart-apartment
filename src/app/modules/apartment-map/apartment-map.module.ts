import { ApartmentMapListComponent } from './apartment-map-list/apartment-map-list.component';
import { ApartmentMapRoutingModule } from './apartment-map-routing.module';
import { CommonModule } from '@angular/common';
import { MapService } from '@core/map.service';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    ApartmentMapListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApartmentMapRoutingModule
  ]
})
export class ApartmentMapModule { }
