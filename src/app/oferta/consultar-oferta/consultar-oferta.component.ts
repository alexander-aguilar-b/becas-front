/**
 * Created by edgaguil on 17/10/2017.
 */

import {Component, OnInit} from "@angular/core";
import {ServicioOferente} from "../../services/oferente.servicio";
import {ServicioOferta} from "../../services/oferta.servicio";
import {IOferta} from "../../models/oferta.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-consultar-oferta',
  templateUrl: './consultar-oferta.component.html',
  styles: []
})


export class ConsultarOferta implements OnInit {
  /** Declaraciones */
  valorSeleccionadoCriterioBusqueda : number;
  ofertas : IOferta[];


  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private router : Router, private servicioOferta : ServicioOferta){
  }

  /***Metodo de Inicialización del componente */
  ngOnInit(){
    this.valorSeleccionadoCriterioBusqueda = 0;
  }

  /** Consulta de las ofertas*/
  consultarOfertas(filtroBusqueda){
    console.log(filtroBusqueda);
    this.ofertas = this.servicioOferta.consultarOfertas(filtroBusqueda.codigoConvocatoria);
    console.log(this.ofertas);

  }

  /** Consulta el detalle de la oferta */
  consultarDetalleOferta(idOferta){
    //TODO: validar el role y direccionar adecuadamente

    //Redireccion a solicitante
    //this.router.navigate(['/oferta/detalle-oferta-solicitante', idOferta ])

    //Redireccion a oferente
    this.router.navigate(['/oferta/detalle-oferta-oferente', idOferta ])

  }
}
