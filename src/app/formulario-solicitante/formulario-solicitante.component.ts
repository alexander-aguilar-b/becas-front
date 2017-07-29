import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-solicitante',
  templateUrl: './formulario-solicitante.component.html',
  styles: []
})
export class FormularioSolicitanteComponent implements OnInit {

  constructor() { }

  solicitante = {
    login : "",
    usuario : {

    }
  };


  selectedValue = 0;

  tipoDocumentos = [
    {
      id : 0,
      descripcion : "-- Seleccione --"
    },
    {
    id : 1,
    descripcion : "Cedula de Ciudadania"
    },
    {
      id : 2,
      descripcion : "Cedula de Extranjeria"
    },
    ];

  ngOnInit() {
  }

}
