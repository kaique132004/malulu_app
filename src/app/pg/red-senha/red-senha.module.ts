import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedSenhaPageRoutingModule } from './red-senha-routing.module';

import { RedSenhaPage } from './red-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedSenhaPageRoutingModule
  ],
  declarations: [RedSenhaPage]
})
export class RedSenhaPageModule {}
