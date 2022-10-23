import { Component, Input, OnInit } from '@angular/core';

import { MapConfig } from './map-config.interface';
import { MapService } from '@core/map.service';

@Component({
  selector: 'app-map',
  template: `<div id="map" class="w-full h-full"></div>`,
})
export class MapComponent implements OnInit {
  @Input() mapConfig: MapConfig = {
    center: [0, 0],
    zoom: 0,
    style: "",
    container: "",
  };

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.buildMap(this.mapConfig);
  }

}

