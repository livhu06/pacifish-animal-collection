import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgesPageRoutingModule } from './badges-routing.module';

import { BadgesPage } from './badges.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BadgesPageRoutingModule
  ],
  declarations: []
})
export class BadgesPageModule {}
