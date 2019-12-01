import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassforgetPageRoutingModule } from './passforget-routing.module';

import { PassforgetPage } from './passforget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassforgetPageRoutingModule
  ],
  declarations: [PassforgetPage]
})
export class PassforgetPageModule {}
