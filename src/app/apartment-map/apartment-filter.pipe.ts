import { Pipe, PipeTransform } from '@angular/core';

import { Apartment } from './apartment.interface';
import { DocumentData } from '@angular/fire/firestore';

@Pipe({
    name: 'filter'
})

export class ApartmentFilterPipe implements PipeTransform {
    transform(apartmentList: DocumentData[], maxPrice: number): DocumentData[] {
        const filteredApartmentList: DocumentData[] = [];
        apartmentList.forEach((apartment) => {
                if( parseInt(apartment['floorPlans'][0].price) <= maxPrice ) {
                    filteredApartmentList.push(apartment);
                }
            }
        )
        return filteredApartmentList;
    }
}