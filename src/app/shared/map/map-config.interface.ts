import { LngLatLike } from "mapbox-gl";

export interface MapConfig {
    center: LngLatLike;
    container: string; 
    style: string;
    zoom: number
}