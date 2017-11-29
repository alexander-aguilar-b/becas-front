import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ServicioDatosAplicacionOferta} from "../../services/servicio.datos.aplicacion";
import {IEtapaCambioEstado} from "../../models/etapa.model";
/**
 * Created by edgaguil on 25/10/2017.
 */

declare var $: any;

@Component({
  selector: 'cambiar-estado-postulacion-modal',
  templateUrl: './cambiar-estado-postulacion.component.html',
  styles: ['.modal-body { height : 250px; overflow-y: scroll;  width : 400px; }']
})



export class CambiarEstadoPostulacionComponent implements OnInit {

  estadoPostulacionSeleccionado: number;
  postulacionCambioEstado: IEtapaCambioEstado;
  datosCargados: boolean;
  arregloEstadosPostulacion: string[] = ['APROBADA', 'EN_ESPERA', 'RECHAZADA', 'EN_REVISION'];

  @Output() estadoModificado: EventEmitter<string> = new EventEmitter<string>();

  constructor(private servicioDatosAplicacionOferta: ServicioDatosAplicacionOferta) {
    this.postulacionCambioEstado = this.servicioDatosAplicacionOferta.datosCambioEstadoPostulacion;
    console.log(this.postulacionCambioEstado);
  }

  modificarEstadoPostulacion() {
    let estadoNuevoSeleccionado: string;
    estadoNuevoSeleccionado = this.arregloEstadosPostulacion[this.estadoPostulacionSeleccionado];
    console.log(this.estadoPostulacionSeleccionado);
    this.estadoModificado.emit(estadoNuevoSeleccionado);
    $('#modificarEstadoPostulacion').modal('toggle');
  }

  ngOnInit() {
    this.datosCargados = false;
    this.postulacionCambioEstado = this.servicioDatosAplicacionOferta.datosCambioEstadoPostulacion;
    console.log(this.postulacionCambioEstado);
    this.estadoPostulacionSeleccionado = -1;
    this.datosCargados = true;
  }
}


