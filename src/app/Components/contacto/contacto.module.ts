import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { ContactoRoutingModule } from './contacto-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertModule } from '../alert/alert.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule,
  ]
})
export class ContactoModule { }
