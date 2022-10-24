import { LngLatLike } from "mapbox-gl";
import { MarkerConfig } from './marker-config.interface';

export interface MapConfig {
    center: LngLatLike;
    container: string; 
    style: string;
    zoom: number
    defaultMakerConfig?: MarkerConfig;
}

