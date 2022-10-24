import { ApartmentCardComponent } from './apartment-list/apartment-card/apartment-card.component';
import { ApartmentDetailPanelComponent } from './apartment-list/apartment-detail-panel/apartment-detail-panel.component';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentListPanelComponent } from './apartment-list/aprtment-list-panel/apartment-list-panel.component';
import { ApartmentMapRoutingModule } from './apartment-map-routing.module';
import { CommonModule } from '@angular/common';
import { MapService } from '@core/map.service';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ApartmentListComponent,
    ApartmentCardComponent,
    ApartmentListPanelComponent,
    ApartmentDetailPanelComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    ApartmentMapRoutingModule
  ],
  providers: [
    MapService
  ]
})
export class ApartmentMapModule { }
