export interface Apartment {
    city: string;
    favorite: boolean;
    geoposition: Geoposition,
    name: string;
    photo: string;
    propertyId: string;
    state: string;
    floorPlans: Floor[];
    streetAddress: string;
    url: string;
    phone: string;
    photos: string[];
    specials: string;
    unitAmenities: string[];
    propertyAmenities: string[];
    highValueAmenities: string[];
}

interface Geoposition {
    latitude: number;
    longitude: number;
}

interface Floor {
    bed: string;
    bath: string;
    price: number;
    priceMax: number;
}