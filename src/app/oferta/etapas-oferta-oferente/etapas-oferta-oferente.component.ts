/**
 * Created by edgaguil on 21/10/2017.
 */

import {Component, Input} from "@angular/core";
import {IEtapa} from "../../models/etapa.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioEtapasOferta} from "../../services/etapas.oferta.servicio";


@Component({
  selector: 'app-etapas-oferta-oferente',
  templateUrl: './etapas-oferta-oferente.component.html',
  styles: []
})

export class EtapasOfertaOferenteComponent{

  etapasOferta : IEtapa[];
  idOferta : string;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter : ActivatedRoute, private router : Router, private servicioEtapasOferta : ServicioEtapasOferta){
  }

  ngOnInit(){

    this.idOferta = this.activatedRouter.snapshot.paramMap.get('idOferta');
    console.log(this.idOferta);
    this.etapasOferta = this.servicioEtapasOferta.obtenerEtapasOferta(this.idOferta);

  }

  eliminarEtapa(e, idEtapa)
  {
    e.preventDefault();
    console.log(e);
    if(confirm('Esta seguro de que desea eliminar la etapa?')){
      console.log("Eliminar etapa:" + idEtapa);
    }
  }
  editarEtapaOferta(e, idEtapa){
    e.preventDefault();
    console.log(idEtapa);
    this.router.navigate(['/oferta/editar-etapa-oferta',  this.idOferta, idEtapa]);
  }



}
