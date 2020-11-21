import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//rutas hijas
import { AuthRoutingModule } from './auth/auth.routing';

//pages
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  // 'login' AuthRoutingModule
  {
    path: 'home',
    component: PagesComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
