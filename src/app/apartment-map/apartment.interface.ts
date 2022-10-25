export interface Apartment {
    city: string;
    favorite: boolean;
    geoposition: Geoposition,
    name: string;
    photo: string;
    propertyId: string;
    state: string;
    streetAddress: string;
}

interface Geoposition {
    latitude: number;
    longitude: number;
}