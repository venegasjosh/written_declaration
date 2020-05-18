import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PagesComponent} from './pages/pages.component';
import {PageOneComponent} from './pages/page-one/page-one.component';
import {PageTwoComponent} from './pages/page-two/page-two.component';
import {PageThreeComponent} from './pages/page-three/page-three.component';
import {PageFourComponent} from './pages/page-four/page-four.component';
import {PageFiveComponent} from './pages/page-five/page-five.component';


const routes: Routes = [
  {path: "pages", component: PagesComponent, children: [
    {path: "page_one", component: PageOneComponent},
    {path: "page_two", component: PageTwoComponent},
    {path: "page_three", component: PageThreeComponent},
    {path: "page_four", component: PageFourComponent},
    {path: "page_five", component: PageFiveComponent},



  
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
