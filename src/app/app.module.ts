import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
``;
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxUsefulSwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
