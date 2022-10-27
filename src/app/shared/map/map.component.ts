import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subject, of, take, takeUntil, tap } from 'rxjs';

import { MapConfig } from '../interfaces/map-config.interface';
import { MapService } from '@core/map.service';
import { MarkerProps } from '../interfaces/marker.interface';

@Component({
  selector: 'app-map',
  template: `<div [id]="mapConfig.container" class="w-full h-full"></div>`

})
export class MapComponent implements AfterViewInit, OnDestroy {

  @Input() mapConfig: MapConfig = {} as MapConfig;
  @Input() markers$: Observable<MarkerProps[]> = of([]);

  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(private mapService: MapService) { }

  ngAfterViewInit(): void {
    this.mapService.buildMap(this.mapConfig);
    this.markers$.pipe(
      tap((markers: MarkerProps[]) => {
        this.mapService.addMarkers(markers);       
      }),
      take(1),
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}

