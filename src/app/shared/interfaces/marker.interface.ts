import { LngLatLike } from "mapbox-gl";

export interface MarkerProps { 
    id: string; 
    geolocation: LngLatLike;
}

export interface Marker {
    id: string;
    markerConf: MarkerConfig;
    markerObj: mapboxgl.Marker;
}

export interface MarkerConfig {
    color: string;
    draggable: boolean;
}
