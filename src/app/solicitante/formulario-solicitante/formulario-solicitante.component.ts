import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-formulario-solicitante',
  templateUrl: './formulario-solicitante.componente.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class FormularioSolicitanteComponente implements OnInit {

  formSolicitante : FormGroup;
  private numeroDocumento : FormControl;
  private nombres : FormControl;
  private apellidos : FormControl;



  constructor(private router : Router) {

  }

  idPaisColombia = 4;

  solicitante = {
    login : "",
    usuario : {

    }
  };


  valorSeleccionadoTipoDocumento = 0;
  valorSeleccionadoGenero = 0;
  valorSeleccionadoTipoPoblacion = 0;
  valorSeleccionadoPaisNacimiento = 0;
  valorSeleccionadoDepartamentoNacimiento = 0;
  valorSeleccionadoCiudadNacimiento = 0;

  valorSeleccionadoPaisResidencia = 0;
  valorSeleccionadoDepartamentoResidencia = 0;
  valorSeleccionadoCiudadResidencia = 0;

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
    {
      id : 3,
      descripcion : "Tarjeta de identidad"
    },

    ];


  generos = [
    {
      id : 0,
      descripcion : "-- Seleccione --"
    },
    {
      id : 1,
      descripcion : "Masculino"
    },
    {
      id : 2,
      descripcion : "Femenino"
    }
  ];

  tiposPoblacion = [
    {
      id : 0,
      descripcion : "-- Seleccione --"
    },
    {
      id : 1,
      descripcion : "Indigena"
    },
    {
      id : 2,
      descripcion : "Afro-Colombiana"
    },
  ];

  paises = [
    {
      id : 0,
      nombre : "-- Seleccione --"
    },
    {
      id : 1,
      nombre : 'Afganistán'

    },
    {
      id : 2,
      nombre : 'Albania'

    },
    {
      id : 3,
      nombre : 'Argentina'
    },
    {
      id : this.idPaisColombia,
      nombre : 'Colombia'
    },
    {
      id : 5,
      nombre : 'España'
    }
  ];



  departamentos = [
    {
      id : 0,
      descripcion : "-- Seleccione --"
    },
    {
      id: 1,
      idPais: this.idPaisColombia,
      descripcion : "Antioquia"
    },
    {
      id: 2,
      idPais: this.idPaisColombia,
      descripcion : "Bolivar"
    },
    {
      id: 3,
      idPais: this.idPaisColombia,
      descripcion : "Cauca"
    },
    {
      id: 4,
      idPais: this.idPaisColombia,
      descripcion : "Cundinamarca"
    },
  ];

  municipios = [
    {
      id : 0,
      descripcion : "-- Seleccione --"
    },
    {
      id : 1,
      idEstado : 1,
      descripcion : "Medellin"
    },
    {
      id : 2,
      idEstado : 2,
      descripcion : "Cartagena"
    },
    {
      id : 3,
      idEstado : 3,
      descripcion : "Popayán"
    },
    {
      id : 4,
      idEstado : 4,
      descripcion : "Bogota"
    }

  ];


  ngOnInit() {

    this.numeroDocumento = new FormControl('', Validators.required);
    this.nombres = new FormControl('', Validators.required);
    this.apellidos = new FormControl('', Validators.required);

    this.formSolicitante = new FormGroup({
      numeroDocumento : this.numeroDocumento,
      nombres : this.nombres,
      apellidos : this.apellidos
    })
  }

  registrarSolicitante(formValues)
  {
    console.log(formValues);

    // if(this.formSolicitante.valid)
    // {
    //   this.router.navigate(['listado-solicitante']);
    // }
  }

  validarNumeroDocumento()
  {
    return this.numeroDocumento.valid || this.numeroDocumento.untouched;
  }



}

