/**
 * Created by edgaguil on 18/10/2017.
 */

import {Component, OnInit} from "@angular/core";
import {ServicioOferta} from "../../services/oferta.servicio";
import {IOferta} from "../../models/oferta.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detalle-oferta-solicitante',
  templateUrl: './detalle-oferta-solicitante.component.html',
  styles: []
})

export class DetalleOfertaSolicitanteComponent implements OnInit {

  detalleOferta : IOferta;


  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter : ActivatedRoute, private router : Router, private servicioOferta : ServicioOferta){
  }

  /***Metodo de Inicialización del componente */
  ngOnInit(){
    let idOferta : string;
    idOferta = this.activatedRouter.snapshot.paramMap.get('id');
    this.detalleOferta = this.servicioOferta.consultarOferta(idOferta);
    console.log(this.detalleOferta);
    //console.log("idOferta :" + this.activatedRouter.snapshot.paramMap.get('id'));
  }

  aplicarOferta(){

  }

  consultarEtapasOferta(idOferta){
    this.router.navigate(['/oferta/etapas-oferta-solicitante', idOferta]);
  }

}
