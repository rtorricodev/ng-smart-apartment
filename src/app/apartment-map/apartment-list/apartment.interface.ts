export interface Apartment {
    city: string;
    favorite: boolean;
    geoposition: {
        latitude: number;
        longitude: number;
    },
    name: string;
    photo: string;
    propertyId: string;
    state: string;
    streetAddress: string;

}