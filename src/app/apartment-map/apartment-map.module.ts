import { ApartmentCardComponent } from './apartment-list/apartment-card/apartment-card.component';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentMapRoutingModule } from './apartment-map-routing.module';
import { CommonModule } from '@angular/common';
import { MapService } from '@core/map.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ApartmentListComponent,
    ApartmentCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApartmentMapRoutingModule
  ],
  providers: [
    MapService
  ]
})
export class ApartmentMapModule { }
