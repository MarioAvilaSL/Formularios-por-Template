import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FormularioMascotaComponent } from './formulario-mascota-component/formulario-mascota-component.component';// <---- Importar FormsModule

@NgModule({
  declarations: [
    AppComponent,
    FormularioMascotaComponent,
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
