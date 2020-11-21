import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
