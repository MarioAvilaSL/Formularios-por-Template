import { Component, OnInit } from "@angular/core";
import { Mascota } from "../mascota";

@Component({
  selector: "app-formulario-mascota",
  templateUrl: "./formulario-mascota-component.component.html",
  styleUrls: ["./formulario-mascota-component.component.css"]
})
export class FormularioMascotaComponent implements OnInit {
  mascotaModel = new Mascota("", "", "", "", "", "","");

  constructor() {}

  ngOnInit() {}

  formularioEnviado(){
    console.log("El formulario fue enviado y la mascota es: ", this.mascotaModel)
    alert("Enviado");



    // Reiniciar el modelo del formulario
    this.mascotaModel = {
      nombre: '',
      especie: '',
      raza: '',
      talla: '',
      edad: '',
      duenio: '',
      numero: ''
    };

  }
}