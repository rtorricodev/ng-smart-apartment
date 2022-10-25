import { ApartmentCardComponent } from './components/apartment-card.component';
import { ApartmentDetailPanelComponent } from './components/apartment-detail-panel.component';
import { ApartmentListComponent } from './components/apartment-list.component';
import { ApartmentListPanelComponent } from './components/apartment-list-panel.component';
import { ApartmentMapRoutingModule } from './apartment-map-routing.module';
import { CommonModule } from '@angular/common';
import { MapService } from '@core/map.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
    ApartmentMapRoutingModule,
    CommonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  providers: [
    MapService
  ]
})
export class ApartmentMapModule { }
