import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {IInformacionNivelIdioma} from "../../models/informacion.nivel.idioma.model";
import {IIdioma} from "../../models/idioma.model";
import {INivelIdioma} from "../../models/nivel.idioma.model";
import {ServicioIdioma} from "../../services/idioma.servicio";
import {ServicioNivelIdioma} from "../../services/nivel.idioma.service";
import {ServicioDatosAplicacionOferta} from "../../services/servicio.datos.aplicacion";
import {IEtapaCambioEstado} from "../../models/etapa.model";
/**
 * Created by edgaguil on 25/10/2017.
 */

declare var $: any;

@Component({
  selector: 'cambiar-estado-etapa-modal',
  templateUrl: './cambiar-estado.component.html',
  styles: ['.modal-body { height : 250px; overflow-y: scroll;  width : 400px; }']
})

export class CambiarEstadoEtapaComponent implements OnInit {
  //@Input() estadoActual: string[];
  estadoEstapaSeleccionado: number;
  etapaCambioEstado: IEtapaCambioEstado;
  datosCargados: boolean;

  //@Output() informacionIdiomaAgregada: EventEmitter<IInformacionNivelIdioma> = new EventEmitter<IInformacionNivelIdioma>();
  @Output() estadoModificado: EventEmitter<number> = new EventEmitter<number>();

  constructor(private servicioDatosAplicacionOferta: ServicioDatosAplicacionOferta) {
    this.etapaCambioEstado = this.servicioDatosAplicacionOferta.datosCambioEstadoEtapa;
    console.log(this.etapaCambioEstado);
  }

  modificarEstadoEtapa() {

    this.estadoModificado.emit(this.estadoEstapaSeleccionado);
    $('#modificarEtadoEtapa').modal('toggle');
  }

  ngOnInit() {
    console.log('CMP');
    this.datosCargados = false;
    //this.etapaCambioEstado = this.servicioDatosAplicacionOferta.datosCambioEstadoEtapa;
    console.log('this.etapaCambioEstado');
    console.log(this.etapaCambioEstado);
    this.estadoEstapaSeleccionado = 0;
    this.datosCargados = true;
  }
}

