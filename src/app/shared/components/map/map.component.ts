import { AfterViewInit, Component, Input } from '@angular/core';

import { MapConfig } from '../../interfaces/map-config.interface';
import { MapService } from '@core/map.service';

@Component({
  selector: 'app-map',
  template: `<div [id]="mapConfig.container" class="w-full h-full"></div>`,
})
export class MapComponent implements AfterViewInit {
  @Input() mapConfig: MapConfig = {} as MapConfig;

  constructor(private mapService: MapService) {}

  ngAfterViewInit(): void {
    this.mapService.buildMap(this.mapConfig);
  }
}
