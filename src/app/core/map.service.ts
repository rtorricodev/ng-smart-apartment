import * as mapboxgl from 'mapbox-gl';

import { Marker, MarkerConfig } from '@shared/interfaces/marker.interface';

import { Injectable } from '@angular/core';
import { LngLatLike } from 'mapbox-gl';
import { MapConfig } from '@shared/interfaces/map-config.interface';
import { MarkerProps } from '@shared/interfaces/marker.interface';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  mapbox = mapboxgl as typeof mapboxgl;
  markerList: Marker[] = [];
  map: mapboxgl.Map = {} as mapboxgl.Map;

  private _defaultFocusZoom: number = 17;

  private _defaultMarkerConfig: MarkerConfig = { color: "#E74C3B", draggable: false };
  private _focusedMarkerConfig: MarkerConfig = { color: "#2663EB", draggable: false };
  private _mapConfig: MapConfig = {} as MapConfig;

  constructor() {
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  addMarkers(markerInfoList: MarkerProps[]): void {
    markerInfoList.forEach((marker: MarkerProps) => {
      this.addMarker(marker.geolocation, marker.id);
    });
  }

  updateAllMarkers(markerInfoList: MarkerProps[]): void {
    this._removeAllMarkers();
    this.addMarkers(markerInfoList);
  }

  addMarker(geolocation: LngLatLike, id: string = "", markerConfig?: MarkerConfig): void {
    const markerConf: MarkerConfig = markerConfig || this._defaultMarkerConfig;
    const markerObj: mapboxgl.Marker = new mapboxgl.Marker(markerConf).setLngLat(geolocation).addTo(this.map);
    const marker: Marker = { id, markerConf, markerObj };
    this.markerList.push(marker);
  }
  
  buildMap(mapConfig: MapConfig): void {
    this._mapConfig = mapConfig;
    this.map = new mapboxgl.Map({
      center: this._mapConfig.center,
      container: this._mapConfig.container,
      style: this._mapConfig.style,
      zoom: this._mapConfig.zoom,
    });
  }

  focusMarker(markerPorps: MarkerProps): void {
    this._flyTo(markerPorps.geolocation, this._defaultFocusZoom);
    const marker: Marker = this._findMarker(markerPorps.id);
    this._removeMarker(markerPorps.id, marker.markerObj);
    this.addMarker(markerPorps.geolocation, markerPorps.id, this._focusedMarkerConfig);
  }

  unfocusMarker(markerPorps: MarkerProps): void {
    this._flyTo(this._mapConfig.center, this._mapConfig.zoom);
    const marker: Marker = this._findMarker(markerPorps.id);
    this._removeMarker(markerPorps.id, marker.markerObj);
    this.addMarker(markerPorps.geolocation, markerPorps.id, this._defaultMarkerConfig);
  }

  private _flyTo(geolocation: LngLatLike, zoom: number = 5): void {
    this.map.flyTo({ 
      center: geolocation, 
      essential: true,
      zoom,
    });
  }

  private _findMarker(id: string): Marker {
    return this.markerList.find((marker: Marker) => marker.id === id) || {} as Marker;
  }

  private _removeAllMarkers(): void {
    this.markerList.forEach((marker: Marker) => marker.markerObj.remove());
    this.markerList = [];
  }
  
  private _removeMarker(id: string, markerObj: mapboxgl.Marker): void {
    markerObj.remove();
    const index: number = this.markerList.findIndex((marker: Marker) => marker.id === id);
    if (index > -1) { 
      this.markerList.splice(index, 1); 
    }
  }
}
