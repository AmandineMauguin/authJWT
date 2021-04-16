import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifImagePageRoutingModule } from './modif-image-routing.module';

import { ModifImagePage } from './modif-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifImagePageRoutingModule
  ],
  declarations: [ModifImagePage]
})
export class ModifImagePageModule {}
