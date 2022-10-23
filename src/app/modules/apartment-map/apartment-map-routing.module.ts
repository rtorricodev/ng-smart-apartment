import { RouterModule, Routes } from '@angular/router';

import { ApartmentMapListComponent } from './apartment-map-list/apartment-map-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "",
    component: ApartmentMapListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentMapRoutingModule { }
