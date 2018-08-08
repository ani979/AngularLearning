import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCompComponent } from './view-comp/view-comp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewCompComponent],
  exports : [
    ViewCompComponent
  ]
})
export class ViewModule { }
