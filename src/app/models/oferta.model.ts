/**
 * Created by user on 19/08/2017.
 */
import {Etapa} from "./etapa.model";
import {ITipoOferta} from "./tipo.oferta.model";

export interface IOfertaConsulta {
  id: number;
  idOferente: number;
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
  descripcion: string;
  requisitos: string;
  condiciones: string;
  informacionAdicional: string;
  tipoOferta: ITipoOferta;
}

export class Oferta {
  id: number;
  id_oferente: number;
  nombre: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  descripcion: string;
  id_tipo_convocatoria: number;
  requisitos: string;
  condiciones: string;
  informacion_adicional: string;
  etapas: Etapa[];

  constructor() {
  }
}

export interface IOferta {
  id: number;
  id_oferente: number;
  nombre: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  descripcion: string;
  id_tipo_convocatoria: number;
  requisitos: string;
  condiciones: string;
  informacion_adicional: string;
  etapas: Etapa[];
}

