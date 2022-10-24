import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { MapConfig } from './interfaces/map-config.interface';
import { MapService } from '@shared/map/map.service';
import { MarkerConfig } from './interfaces/marker-config.interface';

@Component({
  selector: 'app-map',
  template: `<div [id]="mapConfig.container" class="w-full h-full"></div>`,
})
export class MapComponent implements AfterViewInit {

  @Input() mapConfig: MapConfig = {} as MapConfig;
  
  constructor(private mapService: MapService) { }

  ngAfterViewInit(): void {
    this.mapService.initializeMap(this.mapConfig, [[30,20],[31,21]]);
  }



}

