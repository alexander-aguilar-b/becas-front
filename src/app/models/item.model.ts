import {Respuesta} from "./respuesta.model";
/**
 * Created by edgaguil on 10/08/2017.
 */
export class Item implements  IItem
{
  public id : number;
  public descripcion : string;
  public idTipoControl : number;
  public valor : string;
  public activo : boolean;
  public listaRespuestas? : Respuesta[];
  public requerido : boolean;
  public tamanoMaximo : number;
  constructor(){}
}

export interface IItem
{
  //id : number,
  descripcion : string,
  idTipoControl : number,
  valor : string,
  activo : boolean,
  listaRespuestas? : Respuesta[],
  requerido : boolean,
  tamanoMaximo : number
}


