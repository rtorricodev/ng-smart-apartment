import { Component, OnInit } from '@angular/core';

import { APARTMENT_MAP_CONFIG } from '../apartment-map-config.const';
import { ApartmentCard } from './apartment-card/apartment-card.interface';
import { MapConfig } from '@shared/map/map-config.interface';

@Component({
  selector: 'app-aprtment-map-list',
  templateUrl: './apartment-map-list.component.html',
  styleUrls: ['./apartment-map-list.component.css']
})
export class ApartmentMapListComponent implements OnInit {

  mapConfig: MapConfig = APARTMENT_MAP_CONFIG;

  aparmentCardList: ApartmentCard[] = [
    {
      title: 'The National Residences',
      street: '1201 Elm Street, Dallas',
      imageUrl: 'https://d3d5tet3r0xd5y.cloudfront.net/photos/96015/micros/TSR.jpg',
      detail: '4 High ammenties'
    },
    {
      title: 'The National Residences',
      street: '1201 Elm Street, Dallas',
      imageUrl: 'https://d3d5tet3r0xd5y.cloudfront.net/photos/96015/micros/TSR.jpg',
      detail: '4 High ammenties'
    },
    {
      title: 'The National Residences',
      street: '1201 Elm Street, Dallas',
      imageUrl: 'https://d3d5tet3r0xd5y.cloudfront.net/photos/96015/micros/TSR.jpg',
      detail: '4 High ammenties'
    },
    {
      title: 'The National Residences',
      street: '1201 Elm Street, Dallas',
      imageUrl: 'https://d3d5tet3r0xd5y.cloudfront.net/photos/96015/micros/TSR.jpg',
      detail: '4 High ammenties'
    },
    {
      title: 'The National Residences',
      street: '1201 Elm Street, Dallas',
      imageUrl: 'https://d3d5tet3r0xd5y.cloudfront.net/photos/96015/micros/TSR.jpg',
      detail: '4 High ammenties'
    },
    
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
