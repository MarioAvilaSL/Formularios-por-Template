import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioMascotaComponent } from './formulario-mascota-component/formulario-mascota-component.component';

const routes: Routes = [
  {
    path: 'formulario', component:FormularioMascotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
