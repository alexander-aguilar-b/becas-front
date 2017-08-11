import { Component, OnInit } from '@angular/core';
import {IOferente} from "../models/oferente.model";
import {Router} from "@angular/router";
import {ServicioOferente} from "../services/oferente.servicio";

@Component({
  selector: 'app-formulario-oferente',
  templateUrl: './formulario-oferente.componente.html',
  styles: []
})
export class FormularioOferenteComponente implements OnInit {

  oferente : IOferente;

  //oferente : Oferente = new Oferente();


  constructor(private router : Router , private servicioOferente : ServicioOferente ) {
  }

  ngOnInit() {



  }

  crearOferente(){
    this.servicioOferente.crearOferente(this.oferente);
  }





  valorSeleecionadoPais = 0;
  valorSeleccionadoTipoEntidad = 0;

  idPaisColombia = 4;

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

  tipoEntidades = [
    {
      id : 0,
      nombre : "-- Seleccione --"
    },
    {
      id : 1,
      nombre : "Fundación"
    }
  ];



  //ngOnInit() {
    // this.oferente = {
    //   usuario : { id : 0,
    //     confirmarPassword : "",
    //     login : "",
    //     correoElectronico : "",
    //     password : ""
    //   },
    //   id : 0,
    //   nit :"",
    //   estadoSistema : {
    //     id : 0,
    //     descripcion : "",
    //   },
    //   fechaCreacion : new Date(),
    //   nombre : "",
    //   tipoEntidad : {
    //     id : 0,
    //     nombre : "",
    //     descripcion : ""
    //   },
    //   descripcion : ""
    // };


  //}

}
