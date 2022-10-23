import * as mapboxgl from 'mapbox-gl';

import { Injectable } from '@angular/core';
import { MapConfig } from '../shared/map/map-config.interface';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map | undefined;

  constructor() {
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  buildMap(mapConfig: MapConfig): void {
    this.map = new mapboxgl.Map({ 
      center: mapConfig.center,
      container: mapConfig.container,
      style: mapConfig.style,
      zoom: mapConfig.zoom
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}

