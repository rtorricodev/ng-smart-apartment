import { MapConfig } from '@shared/map/interfaces/map-config.interface';

export const APARTMENT_MAP_CONFIG: MapConfig = {
    center: [-80.23,40.4125],
    container: "apartment-map",
    style: "https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh",
    zoom: 5,
    defaultMakerConfig: {
        color: "#E74C3B",
        draggable: false
    }
};
