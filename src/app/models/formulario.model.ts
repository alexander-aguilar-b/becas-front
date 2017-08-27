import {IItem, Item} from "./item.model";
/**
 * Created by user on 19/08/2017.
 */
export class Formulario
{
  nombre: string;
  descripcion: string;
  items: Item[];

  constructor(){}
}

export interface IFormultario
{
  nombre: string;
  descripcion: string;
  items: IItem[];
}
