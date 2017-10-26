/**
 * Created by edgaguil on 25/10/2017.
 */
import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {IInformacionAcademicaSuperior} from "../../models/informacion.academica.superior.model";
/**
 * Created by edgaguil on 25/10/2017.
 */

declare var $: any;

@Component({
  selector: 'informacion-academica-superior-modal',
  templateUrl: './informacion-academica-superior.component.html',
  styles: ['.modal-body { height : 250px; overflow-y: scroll;  width : 400px; }']
})

export class InformacionAcademicaSuperiorComponent implements OnInit {

  informacionAcademicaSuperior: IInformacionAcademicaSuperior;

  @Output() informacionAcademicaSuperiorAgregada: EventEmitter<IInformacionAcademicaSuperior> = new EventEmitter<IInformacionAcademicaSuperior>();


  agregarInformacionAcademicaSuperior(): void {
    console.log(this.informacionAcademicaSuperior);

    this.informacionAcademicaSuperiorAgregada.emit({
      id_institucion_academica_superior: this.informacionAcademicaSuperior.id_institucion_academica_superior,
      ano_inicio: this.informacionAcademicaSuperior.ano_inicio,
      ano_fin: this.informacionAcademicaSuperior.ano_fin,
      fecha_grado: this.informacionAcademicaSuperior.fecha_grado,
      nombre_programa: this.informacionAcademicaSuperior.nombre_programa,
      semestres_programa: this.informacionAcademicaSuperior.semestres_programa,
      semestres_cursados: this.informacionAcademicaSuperior.semestres_cursados,
      titulo_obtenido: this.informacionAcademicaSuperior.titulo_obtenido,
      cantidad_creditos: this.informacionAcademicaSuperior.cantidad_creditos,
      registro_calificado: this.informacionAcademicaSuperior.registro_calificado,
      tipo_programa: this.informacionAcademicaSuperior.tipo_programa
    });

    this.informacionAcademicaSuperior.id_institucion_academica_superior = null;
    this.informacionAcademicaSuperior.ano_inicio = null;
    this.informacionAcademicaSuperior.ano_fin = null;
    this.informacionAcademicaSuperior.fecha_grado = null;
    this.informacionAcademicaSuperior.nombre_programa = null;
    this.informacionAcademicaSuperior.semestres_programa = null;
    this.informacionAcademicaSuperior.semestres_cursados = null;
    this.informacionAcademicaSuperior.titulo_obtenido = null;
    this.informacionAcademicaSuperior.cantidad_creditos = null;
    this.informacionAcademicaSuperior.registro_calificado = null;
    this.informacionAcademicaSuperior.tipo_programa = null;

    $('#informacionAcademicaSuperior').modal('toggle');

  }

  ngOnInit() {
    this.informacionAcademicaSuperior = {
      id_institucion_academica_superior: null,
      ano_inicio: null,
      ano_fin: null,
      fecha_grado: new Date(),
      nombre_programa: null,
      semestres_programa: null,
      semestres_cursados: null,
      titulo_obtenido: null,
      cantidad_creditos: null,
      registro_calificado: null,
      tipo_programa: null
    };
  }
}


