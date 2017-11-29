/**
 * Created by edgaguil on 22/10/2017.
 */

import {Component, OnInit} from "@angular/core";
import {ServicioOferta} from "../../services/oferta.servicio";
import {IOfertaConsulta} from "../../models/oferta.model";
import {Router} from "@angular/router";
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-consulta-oferta-usuario',
  templateUrl: './consultar-oferta-usuario.component.html',
  styles: []
})

export class ConsultarOfertaUsuarioComponent implements OnInit {
  /** Declaraciones */
  valorSeleccionadoCriterioBusqueda : number;
  //ofertas : IOferta[];
  ofertas : IOfertaConsulta[];
  busquedaRelizada : boolean;



  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private router : Router, private servicioOferta : ServicioOferta, private autenticacionService : AutenticacionService){
  }

  /***Metodo de Inicialización del componente */
  ngOnInit(){
    //this.autenticacionService.validarAutorizacion('oferta/consulta-oferta');
    this.valorSeleccionadoCriterioBusqueda = 0;
    this.busquedaRelizada = false;
  }

  /** Consulta de las ofertas*/
  consultarOfertas(filtroBusqueda){
    console.log(filtroBusqueda);

    //this.ofertas = this.servicioOferta.consultarOfertas(filtroBusqueda.codigoConvocatoria);

    this.servicioOferta.consultarOfertasUsuario(filtroBusqueda.codigoConvocatoria).subscribe(ofertas => {
      this.ofertas = ofertas;
      this.busquedaRelizada = true;
      console.log(ofertas);
    });

    console.log(this.ofertas);

  }

  /** Consulta el detalle de la oferta */
  consultarDetalleOferta(idOferta){
    console.log('consultarDetalleOferta: ' + idOferta);
    this.router.navigate(['/oferta/detalle-oferta-solicitante', idOferta ]);
  }
}
