/**
 * Created by edgaguil on 20/10/2017.
 */
import {Component, OnInit} from "@angular/core";
import {IEtapa} from "../../models/etapa.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioEtapasOferta} from "../../services/etapas.oferta.servicio";

@Component({
  selector: 'app-etapas-oferta-solicitante',
  templateUrl: './etapas-oferta-solicitante.component.html',
  styles: []
})

export class EtapasOfertaSolicitanteComponet implements OnInit {

  etapasOferta : IEtapa[];
  idOferta : string;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter : ActivatedRoute, private router : Router, private servicioEtapasOferta : ServicioEtapasOferta){
  }


  ngOnInit(){
    //let idOferta : string;
    this.idOferta = this.activatedRouter.snapshot.paramMap.get('idOferta');
    console.log(this.idOferta);
    this.etapasOferta = this.servicioEtapasOferta.obtenerEtapasOferta(this.idOferta);
    console.log(this.etapasOferta);
  }
}

