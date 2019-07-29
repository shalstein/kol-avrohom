import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhoneNumbersPage } from './phone-numbers.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneNumbersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhoneNumbersPage]
})
export class PhoneNumbersPageModule {}
