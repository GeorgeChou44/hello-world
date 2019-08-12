import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulletinComponent } from './bulletin/bulletin.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'iPhone',
    component: BulletinComponent
  },
  {
    path: 'TV',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
