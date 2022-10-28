export interface Apartment {
    [x: string]: any;
    city: string;
    favorite: boolean;
    geoposition: Geoposition,
    name: string;
    photo: string;
    propertyId: string;
    state: string;
    floorsPlan: Floor[];
    streetAddress: string;
}

interface Geoposition {
    latitude: number;
    longitude: number;
}

interface Floor {
    bedrooms: string;
    price: string;
}