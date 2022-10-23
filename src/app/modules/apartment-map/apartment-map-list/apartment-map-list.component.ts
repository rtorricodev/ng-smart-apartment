import { Component, OnInit } from '@angular/core';

import { APARTMENT_MAP_CONFIG } from '../apartment-map-config.const';
import { MapConfig } from '@shared/map/map-config.interface';

@Component({
  selector: 'app-aprtment-map-list',
  templateUrl: './apartment-map-list.component.html',
  styleUrls: ['./apartment-map-list.component.css']
})
export class ApartmentMapListComponent implements OnInit {

  mapConfig: MapConfig = APARTMENT_MAP_CONFIG;

  constructor() { }

  ngOnInit(): void {
  }

}
