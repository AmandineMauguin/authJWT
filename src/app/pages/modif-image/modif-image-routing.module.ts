import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifImagePage } from './modif-image.page';

const routes: Routes = [
  {
    path: '',
    component: ModifImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifImagePageRoutingModule {}
