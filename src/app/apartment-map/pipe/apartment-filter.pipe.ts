import { Pipe, PipeTransform } from '@angular/core';

import { Apartment } from '@shared/interfaces/apartment.interface';

@Pipe({
    name: 'filter'
})

export class ApartmentFilterPipe implements PipeTransform {
    transform(apartmentList: Apartment[], maxPrice: number): Apartment[] {
        const filteredApartmentList: Apartment[] = [];
        apartmentList.forEach((apartment) => {
                if( apartment.floorPlans[0].price <= maxPrice ) {
                    filteredApartmentList.push(apartment);
                }
            }
        )
        return filteredApartmentList;
    }
}