import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwiperModule } from 'swiper/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatButtonComponent } from './chat-button/chat-button.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { LogosComponent } from './logos/logos.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { HiringComponent } from './hiring/hiring.component';
import { StoriesComponent } from './stories/stories.component';
import { HireNowComponent } from './hire-now/hire-now.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FooterComponent } from './footer/footer.component';
``;
@NgModule({
  declarations: [AppComponent, NavbarComponent, ChatButtonComponent, HeroImageComponent, LogosComponent, SkillsetComponent, SpotlightComponent, HiringComponent, StoriesComponent, HireNowComponent, FaqsComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
