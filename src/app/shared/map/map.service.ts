import * as mapboxgl from 'mapbox-gl';

import { Injectable } from '@angular/core';
import { LngLatLike } from 'mapbox-gl';
import { MapConfig } from './interfaces/map-config.interface';
import { MarkerConfig } from './interfaces/marker-config.interface';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  mapbox = mapboxgl as typeof mapboxgl;
  map: mapboxgl.Map = {} as mapboxgl.Map;

  private _defaultMarker = { color: '#2663EB', draggable: false };
  private _mapConfig: MapConfig = {} as MapConfig;

  constructor() {
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  addMarkers(geolocationList: LngLatLike[] ): void {
    geolocationList.forEach((geolocation: LngLatLike) => {
      this.addMarker(geolocation);
    });
  }

  addMarker(geolocation: LngLatLike, markerConfig?: MarkerConfig): void {
    const marker: MarkerConfig =
      markerConfig || this._mapConfig.defaultMakerConfig || this._defaultMarker;
    new mapboxgl.Marker(marker).setLngLat(geolocation).addTo(this.map);
  }

  initializeMap(mapConfig: MapConfig, markers?: LngLatLike[]) {
    this._mapConfig = mapConfig;
    this._buildMap();
    if(markers) {
      this.addMarkers(markers);
    } 
  }

  private _buildMap(): void {
    this.map = new mapboxgl.Map({
      center: this._mapConfig.center,
      container: this._mapConfig.container,
      style: this._mapConfig.style,
      zoom: this._mapConfig.zoom,
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
