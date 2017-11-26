import {IItem, IItemFormulario, Item} from "./item.model";
/**
 * Created by user on 19/08/2017.
 */
export class Formulario
{
  id: number;
  nombre: string;
  descripcion: string;
  items: Item[];

  constructor(){}
}

export interface IFormultario {
  id?: number;
  id_etapa?: number;
  id_convocatoria?: number;
  nombre: string;
  descripcion: string;
  items: IItemFormulario[];
}

export interface IFormularioConsulta{
  id: number;
  idEtapa : number;
  nombre: string;
  descripcion: string;
}

/*
export interface IFormularioCreacion{
  id_etapa? : number;
  nombre : string;
  descripcion : string;
}
*/
