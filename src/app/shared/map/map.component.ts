import { AfterViewInit, Component, Input } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

import { LngLatLike } from 'mapbox-gl';
import { MapConfig } from './map-config.interface';
import { MapService } from '@core/map.service';

@Component({
  selector: 'app-map',
  template: `<div [id]="mapConfig.container" class="w-full h-full"></div>`

})
export class MapComponent implements AfterViewInit {

  @Input() mapConfig: MapConfig = {} as MapConfig;
  @Input() markersPoitions$: Observable<LngLatLike[]> = of([]);
  
  constructor(private mapService: MapService) { }

  ngAfterViewInit(): void {
    this.mapService.buildMap(this.mapConfig);

    this.markersPoitions$.pipe(
      tap((markerPostions) => {
        this.mapService.addMarkers(markerPostions);       
      })
    ).subscribe()
  }


}

