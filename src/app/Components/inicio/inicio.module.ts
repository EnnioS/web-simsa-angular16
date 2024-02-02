import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio.component';

import { InicioRoutingModule } from './inicio-routing.module';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeProjectsComponent } from '../carousel/home-projects/home-projects.component';

import { ConstruccionComponent } from './servicios/construccion/construccion.component';
import { ConsuloriaEIngenieriaComponent } from './servicios/consuloria-e-ingenieria/consuloria-e-ingenieria.component';
import { PinturaComponent } from './servicios/pintura/pintura.component';
import { MantenimientoYOtrosComponent } from './servicios/mantenimiento-y-otros/mantenimiento-y-otros.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    InicioComponent,
    HomeProjectsComponent,
    ConstruccionComponent,
    ConsuloriaEIngenieriaComponent,
    PinturaComponent,
    MantenimientoYOtrosComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule, InicioRoutingModule, CarouselModule,
  ]
})
export class InicioModule { }
