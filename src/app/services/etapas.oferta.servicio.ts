import {Injectable} from "@angular/core";
import {ServicioBase} from "./base.servicio";
import {IEtapa} from "../models/etapa.model";
import {IFormultario} from "../models/formulario.model";
/**
 * Created by edgaguil on 20/10/2017.
 */


@Injectable()
export class ServicioEtapasOferta extends ServicioBase {

  //obtenerEtapasOferta(idOferta) : IEtapa[] {
  obtenerEtapasOferta(idOferta): any[] {

    const etapasOferta = [];
    let etapa1: IEtapa;
    let etapa2: IEtapa;
    let etapa3: IEtapa;

    etapa1 = {
      id: 1,
      nombre: 'Etapa1 ',
      descripcion: 'Descripción Etapa 1',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: null
    };

    etapa2 = {
      id: 2,
      nombre: 'Etapa2 ',
      descripcion: 'Descripción Etapa 2',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: null
    };

    etapa3 = {
      id: 3,
      nombre: 'Etapa4 ',
      descripcion: 'Descripción Etapa 4',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: null
    };

    etapasOferta.push(etapa1);
    etapasOferta.push(etapa2);
    etapasOferta.push(etapa3);

    return etapasOferta;
  }

  obtenerEtapaOferta(idEtapaOferta) {
    let etapa5: IEtapa;
    let formulario : IFormultario;

    formulario = {
      id : 1,
      nombre : 'Formulario de Prueba 1',
      descripcion : 'Descripción Formulario',
      items : []
    };

    etapa5 = {
      id: 1,
      nombre: 'Etapa1 ',
      descripcion: 'Descripción Etapa 1',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: null
    };

    return etapa5;
  }

}
