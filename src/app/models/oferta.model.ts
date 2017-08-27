import {Etapa} from "./etapa.model";
/**
 * Created by user on 19/08/2017.
 */

export class Oferta
{
  id_oferente: number;
  nombre: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  id_tipo_convocatoria: number;
  requisitos: string;
  condiciones: string;
  informacion_adicional: string;
  etapas : Etapa[];

  constructor(){}
}

export interface IOferta
{
  id_oferente: number;
  nombre: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  id_tipo_convocatoria: number;
  requisitos: string;
  condiciones: string;
  informacion_adicional: string;
  etapas : Etapa[];
}
