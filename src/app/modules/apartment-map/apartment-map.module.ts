import { ApartmentCardComponent } from './apartment-map-list/apartment-card/apartment-card.component';
import { ApartmentMapListComponent } from './apartment-map-list/apartment-map-list.component';
import { ApartmentMapRoutingModule } from './apartment-map-routing.module';
import { CommonModule } from '@angular/common';
import { MapService } from '@shared/map/map.service';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    ApartmentMapListComponent,
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
