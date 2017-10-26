import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {IInformacionAcademicaBasica} from "../../models/informacion.academica.basica.model";
/**
 * Created by edgaguil on 25/10/2017.
 */

declare var $: any;

@Component({
  selector: 'informacion-academica-basica-modal',
  templateUrl: './informacion-academica-basica.component.html',
  styles: ['.modal-body { height : 250px; overflow-y: scroll;  width : 400px; }']
})

export class InformacionAcademicaBasicaComponent implements OnInit {

  informacionAcademicaBasica: IInformacionAcademicaBasica;

  @Output() informacionAcademicaBasicaAgregada: EventEmitter<IInformacionAcademicaBasica> = new EventEmitter<IInformacionAcademicaBasica>();


  agregarInformacionAcademicaBasica(): void {
    console.log(this.informacionAcademicaBasica);

    this.informacionAcademicaBasicaAgregada.emit({
      ano_inicio: this.informacionAcademicaBasica.ano_inicio,
      ano_fin: this.informacionAcademicaBasica.ano_fin,
      fecha_grado: this.informacionAcademicaBasica.fecha_grado,
      ultimo_grado_escolar: this.informacionAcademicaBasica.ultimo_grado_escolar,
      pruebas_saber: this.informacionAcademicaBasica.pruebas_saber,
      calificacion_pruebas_saber: this.informacionAcademicaBasica.calificacion_pruebas_saber,
      id_institucion_academica_basica: 1
    });

    this.informacionAcademicaBasica.ano_inicio  = null;
    this.informacionAcademicaBasica.ano_fin = null;
    this.informacionAcademicaBasica.fecha_grado = new Date();
    this.informacionAcademicaBasica.ultimo_grado_escolar = null;
    this.informacionAcademicaBasica.calificacion_pruebas_saber = null;

    $('#informacionAcademicaBasica').modal('toggle');

    //this.$(`#${this.modalId}`).modal({});

  }

  ngOnInit() {
    this.informacionAcademicaBasica = {
      ano_inicio  : null,
      ano_fin : null,
      fecha_grado : new Date(),
      ultimo_grado_escolar : null,
      pruebas_saber : false,
      calificacion_pruebas_saber : null,
      id_institucion_academica_basica : 1
    };

  }
}


