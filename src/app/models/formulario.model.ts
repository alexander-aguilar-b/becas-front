import {IItem, Item} from "./item.model";
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

export interface IFormultario
{
  id: number;
  nombre: string;
  descripcion: string;
  items: IItem[];
}
