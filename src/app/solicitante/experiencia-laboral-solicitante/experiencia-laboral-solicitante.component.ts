/**
 * Created by edgaguil on 8/09/2017.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IExperienciaLaboral} from "../../models/experiencia.laboral.model";

@Component({
  selector: 'experiencia-laboral-modal',
  templateUrl: './experiencia-laboral-solicitante.component.html',
  styles: ['.modal-body { height : 250px; overflow-y: scroll;  width : 400px; }']
})

export class ExperienciaLaboralSolicitanteComponent implements OnInit {

  experienciaLaboral : IExperienciaLaboral;

  @Output() experienciaLaboralAgregada : EventEmitter<IExperienciaLaboral> = new EventEmitter<IExperienciaLaboral>();

  agregarExperiencia() : void {
    console.log(this.experienciaLaboral);
    this.experienciaLaboralAgregada.emit(this.experienciaLaboral)

  }

  ngOnInit() {
    this.experienciaLaboral = {
      nombre_empresa : '',
      cargo : '',
      fecha_fin : new Date(),
      fecha_inicio : new Date()
    };

  }
}

