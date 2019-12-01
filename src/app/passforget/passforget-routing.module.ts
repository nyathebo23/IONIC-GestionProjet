import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassforgetPage } from './passforget.page';

const routes: Routes = [
  {
    path: '',
    component: PassforgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassforgetPageRoutingModule {}
