import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServicioOferta} from "../../services/oferta.servicio";
import {ServicioTipoOferta} from "../../services/tipo.oferta.servicio";
import {Etapa} from "../../models/etapa.model";
import {Oferta} from "../../models/oferta.model";
import {Item} from "../../models/item.model";
import {Respuesta} from "../../models/respuesta.model";
import {Formulario} from "../../models/formulario.model";
import {DefincionEtapaFormulario} from "../../models/definicion.etapa.formulario.model";
import {AutenticacionService} from "../../services/autenticacion.service";
declare var $: any;

@Component({
  selector: 'app-creacion-oferta',
  templateUrl: './creacion-oferta.component.html',
  styles: []
})
export class CreacionOfertaComponent implements OnInit {

  oferta: Oferta;
  tiposOferta;
  defincionEtapaFormulario: DefincionEtapaFormulario;
  numeroItems: number;
  listaItems;

  constructor(private router: Router, private servicioOferta: ServicioOferta, private servicioTipoOferta: ServicioTipoOferta
  ,private autenticacionService: AutenticacionService) {
  }

  ngOnInit() {
    this.autenticacionService.validarAutorizacion('oferente/creacion-oferta');
    this.oferta = new Oferta();
    this.oferta.etapas = [];
    this.numeroItems = 0;
    this.listaItems = [];
    this.defincionEtapaFormulario = new DefincionEtapaFormulario();
    this.tiposOferta = this.servicioTipoOferta.obtenerTipoOferta();
  }

  cambioEtapa() {
    $('#tabs a[href="#agregar_etapa"]').tab('show');
  }
  cambioFormulario() {
    $('#tabs a[href="#agregar_formulario"]').tab('show');
  }

  agregarItem(oferta) {

    this.numeroItems = this.numeroItems + 1;

    let item: Item = new Item();
    let opciones: string = oferta.opciones ? oferta.opciones.trim() : '';
    let tipoDelimitador: string = oferta.tipoDelimitador;

    item.descripcion = oferta.nombreItem;
    item.idTipoControl = parseInt(oferta.tipoControl);
    item.requerido = oferta.requerido;
    item.tamanoMaximo = oferta.tamanoMaximo;

    if (opciones.length > 0) {
      let listaRespuestas: Respuesta[];
      listaRespuestas = [];
      let respuestas: string[];
      respuestas = opciones.split(tipoDelimitador);

      for (let respuesta of respuestas) {
        let itemRespuesta: Respuesta = new Respuesta();
        itemRespuesta.respuesta = respuesta;
        listaRespuestas.push(itemRespuesta);
      }
      item.listaRespuestas = listaRespuestas;
    }

    this.listaItems.push(item);

  }

  agregarEtapa(oferta) {

    let formulario: Formulario = new Formulario();
    formulario.nombre = oferta.formulario_nombre;
    formulario.descripcion = oferta.formulario_descripcion;
    formulario.items = this.listaItems;

    let etapa: Etapa = new Etapa();
    etapa.nombre = oferta.nombre_etapa;
    etapa.fecha_inicio = oferta.fecha_inicio_etapa;
    etapa.fecha_fin = oferta.fecha_fin_etapa;
    etapa.descripcion = oferta.descripcion_etapa;
    etapa.cantidad_a_seleccionar = oferta.cantidad_seleccionar;
    etapa.formulario = formulario;

    this.borrarEtapa();
    this.oferta.etapas.push(etapa);

    $('#tabs a[href="#finalizar"]').tab('show');
  }

  crearOferta(oferta) {

    this.oferta.id_oferente = oferta.id_oferente;
    this.oferta.nombre = oferta.nombre;
    this.oferta.fecha_inicio = oferta.fecha_inicio;
    this.oferta.fecha_fin = oferta.fecha_fin;
    this.oferta.descripcion = oferta.descripcion;
    this.oferta.id_tipo_convocatoria = oferta.id_tipo_convocatoria;
    this.oferta.requisitos = oferta.requisitos;
    this.oferta.condiciones = oferta.condiciones;
    this.oferta.informacion_adicional = oferta.informacion_adicional;

    console.log(JSON.stringify(this.oferta));
    this.router.navigate(['/oferente/confirmacion-creacion-oferente']);

    // console.log(this.oferta);
    // this.servicioOferta.crearOferta(formValues)
    //   .subscribe(event => {
    //     this.router.navigate(['/oferente/confirmacion-creacion-oferente'])
    //   })
  }

  borrarEtapa(): void {

    if (this.defincionEtapaFormulario != undefined) {

      this.listaItems = [];
      this.defincionEtapaFormulario.nombre_etapa = "";
      this.defincionEtapaFormulario.fecha_inicio_etapa = null;
      this.defincionEtapaFormulario.fecha_fin_etapa = null;
      this.defincionEtapaFormulario.descripcion_etapa = "";
      this.defincionEtapaFormulario.cantidad_seleccionar = null;
      this.defincionEtapaFormulario.formulario_nombre = "";
      this.defincionEtapaFormulario.formulario_descripcion = "";

      this.defincionEtapaFormulario.nombreItem = "";
      this.defincionEtapaFormulario.tipoControl = "";
      this.defincionEtapaFormulario.tipoDelimitador = "";
      this.defincionEtapaFormulario.opciones = "";
      this.defincionEtapaFormulario.requerido = false;
      this.defincionEtapaFormulario.tamanoMaximo = null;

    }
  }

  valorSeleccionadoTipoOferta = 0;

}



