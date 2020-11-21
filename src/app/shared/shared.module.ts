import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { BreadcombComponent } from './breadcomb/breadcomb.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BreadcombComponent
  ],
  exports: [
    NavbarComponent,
    BreadcombComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
