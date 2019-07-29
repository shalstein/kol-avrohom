import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TractatePage } from './tractate.page';
import { PageOptionValuePipe } from './pageOptionValue/page-option-value.pipe';

const routes: Routes = [
  {
    path: '',
    component: TractatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TractatePage, PageOptionValuePipe]
})
export class TractatePageModule {}
