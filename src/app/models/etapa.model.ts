
import {Formulario, IFormultario} from "./formulario.model";
/**
 * Created by user on 19/08/2017.
 */

export class Etapa
{
  nombre : string;
  fecha_inicio : Date;
  fecha_fin : Date;
  cantidad_a_seleccionar : number;
  descripcion : string;
  formulario : Formulario;

  constructor(){}
}

export interface IEtapa
{
  nombre : string;
  fecha_inicio : Date;
  fecha_fin : Date;
  cantidad_a_seleccionar : number;
  descripcion : string;
  formulario : IFormultario;
}