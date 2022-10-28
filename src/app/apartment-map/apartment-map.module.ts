import { ApartmentCardComponent } from './components/apartment-card.component';
import { ApartmentDetailPanelComponent } from './components/apartment-detail-panel.component';
import { ApartmentEffects } from './store/apartment-map.effects';
import { ApartmentFilterPipe } from './pipe/apartment-filter.pipe';
import { ApartmentListComponent } from './components/apartment-list.component';
import { ApartmentListPanelComponent } from './components/apartment-list-panel.component';
import { ApartmentMapRoutingModule } from './apartment-map-routing.module';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { MapService } from '@shared/services/map.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { featureKey } from './store/featureKey.constant';
import { reducer } from './store/apartment-map.reducer';

@NgModule({
  declarations: [
    ApartmentListComponent,
    ApartmentCardComponent,
    ApartmentListPanelComponent,
    ApartmentDetailPanelComponent,
    ApartmentFilterPipe,
  ],
  imports: [
    ApartmentMapRoutingModule,
    CommonModule,
    MatTabsModule,
    FormsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    SharedModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ApartmentEffects])
  ],
  providers: [
    MapService
  ]
})
export class ApartmentMapModule { }
