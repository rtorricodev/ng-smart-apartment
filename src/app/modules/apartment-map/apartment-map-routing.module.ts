import { RouterModule, Routes } from '@angular/router';

import { AprtmentMapListComponent } from './aprtment-map-list/aprtment-map-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "",
    component: AprtmentMapListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentMapRoutingModule { }
