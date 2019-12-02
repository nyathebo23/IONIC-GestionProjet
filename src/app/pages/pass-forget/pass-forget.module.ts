import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassForgetPageRoutingModule } from './pass-forget-routing.module';

import { PassForgetPage } from './pass-forget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassForgetPageRoutingModule
  ],
  declarations: [PassForgetPage]
})
export class PassForgetPageModule {}
