import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GematriaPipe} from './gematria.pipe';

@NgModule({
  declarations: [GematriaPipe],
  imports: [
    CommonModule
  ],
  exports: [
    GematriaPipe
  ]
})
export class PipesModule { }
