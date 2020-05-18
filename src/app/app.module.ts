import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageFourComponent } from './pages/page-four/page-four.component';
import { PageFiveComponent } from './pages/page-five/page-five.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
