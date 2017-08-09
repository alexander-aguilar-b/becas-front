import { Component, OnInit } from '@angular/core';
import {IOferente, Oferente} from "../../models/oferente.model";
import {Router} from "@angular/router";
import {ServicioOferente} from "../../services/oferente.servicio";

@Component({
  selector: 'app-formulario-oferente',
  templateUrl: './formulario-oferente.component.html',
  styles: []
})
export class FormularioOferenteComponent implements OnInit {

  private oferente : Oferente;



  constructor(private router : Router , private servicioOferente : ServicioOferente ) {
  }

  ngOnInit() {
    //this.oferente = new Oferente();
    // console.log(this.oferente);
    //
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

  }

  crearOferente(formValues){
    console.log(formValues);
    //this.servicioOferente.crearOferente(this.oferente)
    //.finally(() => this.router.navigate(['/oferente/confirmacion-creacion-oferente'])).subscribe();
      //.subscribe(event => { this.router.navigate(['/oferente/confirmacion-creacion-oferente']) })
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

}
