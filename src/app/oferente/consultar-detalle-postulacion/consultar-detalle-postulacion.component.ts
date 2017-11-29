import {Component, Input, OnInit} from '@angular/core';
import {IConsultaUsuario} from "../../models/usuario.model";
import {ServicioDatosAplicacionOferta} from "../../services/servicio.datos.aplicacion";
import {IConsultaAplicacionOferta} from "../../models/aplicacion.oferta.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioAplicacionOferta} from "../../services/servicio.aplicacion.oferta";
import {ServicioSolicitudPostulacion} from "../../services/servicio.solicitud.postulacion";
import {IEtapaCambioEstado} from "../../models/etapa.model";

declare var $: any;

@Component({
  selector: 'app-consultar-detalle-postulacion',
  templateUrl: './consultar-detalle-postulacion.component.html',
  styles: []
})
export class ConsultarDetallePostulacionComponent implements OnInit {

  aplicacionOferta: IConsultaAplicacionOferta;
  idAplicacion: number;
  idOferta: number;

  constructor(private servicioDatosAplicacionOferta: ServicioDatosAplicacionOferta,
              private servicioAplicacionOferta: ServicioAplicacionOferta,
              private router: Router,
              private activatedRouter: ActivatedRoute,
              private servicioSolicitudPostulacion: ServicioSolicitudPostulacion) {
  }
  ngOnInit() {
    console.log('Dentro del Componete');
    console.log('Datos Aplicacion');
    //console.log(this.servicioDatosAplicacionOferta.datosAplicacionOferta);
    //this.aplicacionOferta = this.servicioDatosAplicacionOferta.datosAplicacionOferta;

    this.idAplicacion = Number(this.activatedRouter.snapshot.paramMap.get('idAplicacionOferta'));
    this.idOferta = Number(this.activatedRouter.snapshot.paramMap.get('idOferta'));
    this.servicioAplicacionOferta.obtenerAplicacion(this.idAplicacion).subscribe(respuesta => {
      this.aplicacionOferta = respuesta;
      console.log('this.aplicacionOferta');
      console.log(this.aplicacionOferta);
    });

    $('#modificarEtadoEtapa').on('shown.bs.modal', function(){
      alert('opening');
    } );
  }

  cambiarEstadoEtapa(idAplicacionOferta, idEtapa, estadoEtapa) {
    this.servicioDatosAplicacionOferta.datosCambioEstadoEtapa = {
      idEtapa : idEtapa,
      idAplicacion: idAplicacionOferta,
      estadoAnterior: estadoEtapa,
      estadoActual : ''
    };
    console.log(this.servicioDatosAplicacionOferta.datosCambioEstadoEtapa);
    console.log('Antes modal');
    $('#estadoActualEtapaModal').text(estadoEtapa);
    $('#estadoEstapaSeleccionado').val(-1);
    $('#modificarEtadoEtapa').modal('toggle');
  }

  consultarDetalleFormularioAplicacion(idFormulario: number, idAplicacionOferta: number, idOferta: number) {
    this.router.navigate(['/oferente/consultar-formulario-diligenciado', idFormulario, idAplicacionOferta, idOferta]);
  }

  modifcarEstadoEtapa(nuveoEstadoEtapa){
    let estadoEtapaAntesCambio: IEtapaCambioEstado = this.servicioDatosAplicacionOferta.datosCambioEstadoEtapa;
    console.log('El nuevo estado es');
    console.log(nuveoEstadoEtapa);
    console.log(estadoEtapaAntesCambio);
     this.servicioSolicitudPostulacion.cambiarEtadoEtapaAplicacion(nuveoEstadoEtapa, estadoEtapaAntesCambio.idAplicacion, estadoEtapaAntesCambio.idEtapa).subscribe(respuesta => {
       alert('La información de la etapa se ha modificado');
       this.router.navigate(['/oferente/consultar-detalle-postulacion/', this.idOferta, this.idAplicacion]);
    });
  }
}
