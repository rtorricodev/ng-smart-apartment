import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprtmentMapListComponent } from './aprtment-map-list.component';

describe('AprtmentMapListComponent', () => {
  let component: AprtmentMapListComponent;
  let fixture: ComponentFixture<AprtmentMapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprtmentMapListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprtmentMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
