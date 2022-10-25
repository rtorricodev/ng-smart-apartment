import { RouterModule, Routes } from '@angular/router';

import { ApartmentListComponent } from './components/apartment-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "",
    component: ApartmentListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentMapRoutingModule { }
