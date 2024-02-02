import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { HomeComponent } from './home/home.component';
import { ConstruccionComponent } from './servicios/construccion/construccion.component';
import { ConsuloriaEIngenieriaComponent } from './servicios/consuloria-e-ingenieria/consuloria-e-ingenieria.component';
import { PinturaComponent } from './servicios/pintura/pintura.component';
import { MantenimientoYOtrosComponent } from './servicios/mantenimiento-y-otros/mantenimiento-y-otros.component';

const routes: Routes = [{
    path: '',
    component: InicioComponent,
    children:[
      {path:'',redirectTo:'inicio', pathMatch:'full'},
      {path:'inicio', component:HomeComponent},
      {path:'servicios/construccion', component:ConstruccionComponent},
      {path:'servicios/consultoria-e-ingenieria', component:ConsuloriaEIngenieriaComponent},
      {path:'servicios/pintura', component:PinturaComponent},
      {path:'servicios/mantenimienti-y-otros', component:MantenimientoYOtrosComponent},
      // {path:'**', redirectTo:'inicio', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class InicioRoutingModule { }
