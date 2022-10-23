import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentMapListComponent } from './apartment-map-list.component';

describe('ApartmentMapListComponent', () => {
  let component: ApartmentMapListComponent;
  let fixture: ComponentFixture<ApartmentMapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentMapListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
