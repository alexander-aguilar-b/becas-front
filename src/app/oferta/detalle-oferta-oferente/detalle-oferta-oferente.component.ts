/**
 * Created by edgaguil on 21/10/2017.
 */
import {Component} from "@angular/core";
import {IOferta} from "../../models/oferta.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioOferta} from "../../services/oferta.servicio";

@Component({
  selector: 'app-detalle-oferta-oferente',
  templateUrl: './detalle-oferta-oferente.component.html',
  styles: []
})

export class DetalleOfertaOferenteComponent{

  detalleOferta : IOferta;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter : ActivatedRoute, private router : Router, private servicioOferta : ServicioOferta){
  }

  /***Metodo de Inicialización del componente */
  ngOnInit(){
    let idOferta : string;
    idOferta = this.activatedRouter.snapshot.paramMap.get('id');
    this.detalleOferta = this.servicioOferta.consultarOferta(idOferta);
  }

  eliminarOferta(){

  }

  consultarEtapasOferta(idOferta){
    this.router.navigate(['/oferta/etapas-oferta-oferente', idOferta]);
  }
}
