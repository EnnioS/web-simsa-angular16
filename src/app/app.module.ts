import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-owl-carousel-o';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioModule } from './Components/inicio/inicio.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { HomeBannerComponent } from './Components/carousel/home-banner/home-banner.component';
import { FooterComponent } from './Components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeBannerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    InicioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
