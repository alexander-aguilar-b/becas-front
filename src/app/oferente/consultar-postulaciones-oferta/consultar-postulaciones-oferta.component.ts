import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioAplicacionOferta} from "../../services/servicio.aplicacion.oferta";
import {ServicioDatosAplicacionOferta} from "../../services/servicio.datos.aplicacion";
import set = Reflect.set;
import {IConsultaAplicacionOferta} from "../../models/aplicacion.oferta.model";

@Component({
  selector: 'app-consultar-postulaciones-oferta',
  templateUrl: './consultar-postulaciones-oferta.component.html',
  styles: []
})
export class ConsultarPostulacionesOfertaComponent implements OnInit {

  idOferta: number;
  postulacionesOferta: IConsultaAplicacionOferta[];

  constructor(private activatedRouter: ActivatedRoute, private servicioAplicacionOferta: ServicioAplicacionOferta,
              private servicioDatosAplicacionOferta: ServicioDatosAplicacionOferta,
              private  router: Router) {
  }
  ngOnInit() {
    console.log('Dentro del Componete');
    this.idOferta = Number(this.activatedRouter.snapshot.paramMap.get('idOferta'));
    this.servicioAplicacionOferta.obtenerAplicaciones(this.idOferta).subscribe(postulacionesOferta => {
      this.postulacionesOferta = postulacionesOferta;
      console.log(postulacionesOferta);
    });
  }
  // get data(): IConsultaAplicacionOferta{
  //   return this.servicioDatosAplicacionOferta.datosAplicacionOferta;
  // }
  // set data(value: IConsultaAplicacionOferta){
  //   this.servicioDatosAplicacionOferta.datosAplicacionOferta = value;
  // }

  consultarDetalleAplicacion(idAplicacionOferta: number) {
    //this.servicioDatosAplicacionOferta.datosAplicacionOferta = postulacionOferta;
    console.log(idAplicacionOferta);
    this.router.navigate(['/oferente/consultar-detalle-postulacion', idAplicacionOferta]);
  }
}
