import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MapComponent,
  ]
})
export class SharedModule { }
