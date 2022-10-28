import { MapConfig } from '@shared/interfaces/map-config.interface';

export const APARTMENT_MAP_CONFIG: MapConfig = {
    center: [-96.790852, 32.94473],
    container: "apartment-map",
    style: "https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh",
    zoom: 9,
    defaultMakerConfig: {
        color: "#E74C3B",
        draggable: false
    }
};
