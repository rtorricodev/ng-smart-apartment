import { LngLatLike } from "mapbox-gl";
import { Marker } from './marker.interface';

export interface MapConfig {
    center: LngLatLike;
    container: string; 
    style: string;
    zoom: number
    defaultMakerConfig?: Marker;
}

