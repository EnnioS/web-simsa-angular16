import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto.component';

const routes: Routes = [
  {
    path: '',
    component: ContactoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactoRoutingModule { }
