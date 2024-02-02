import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PreloadAllModules } from '@angular/router';
import { CustomPreloadStrategyService } from './services/custom-preload-strategy.service';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./Components/inicio/inicio.module').then((m) => m.InicioModule), data: {preload:true, preloadDelay:4000}
    },
    {
        path: 'contacto',
        loadChildren: () => import('./Components/contacto/contacto.module').then((m) => m.ContactoModule),
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
          preloadingStrategy: CustomPreloadStrategyService //PreloadAllModules
        }
        )],
      exports: [RouterModule]
})
export class AppRoutingModule { }