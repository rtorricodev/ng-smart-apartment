import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subject, of, takeUntil, tap } from 'rxjs';

import { LngLatLike } from 'mapbox-gl';
import { MapConfig } from './map-config.interface';
import { MapService } from '@core/map.service';

@Component({
  selector: 'app-map',
  template: `<div [id]="mapConfig.container" class="w-full h-full"></div>`

})
export class MapComponent implements AfterViewInit, OnDestroy {

  @Input() mapConfig: MapConfig = {} as MapConfig;
  @Input() markersPoitions$: Observable<LngLatLike[]> = of([]);

  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(private mapService: MapService) { }

  ngAfterViewInit(): void {
    this.mapService.buildMap(this.mapConfig);

    this.markersPoitions$.pipe(
      tap((markerPostions) => {
        this.mapService.addMarkers(markerPostions);       
      }),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


}

