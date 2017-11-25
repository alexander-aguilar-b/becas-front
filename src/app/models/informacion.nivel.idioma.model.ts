import {IIdioma} from "./idioma.model";
import {INivelIdioma} from "./nivel.idioma.model";
/**
 * Created by edgaguil on 25/10/2017.
 */
export interface IInformacionNivelIdioma {
  id_idioma: number;
  id_nivel_idioma: number;
  idioma?: IIdioma;
  nivelIdioma?: INivelIdioma;
}

export interface IInformacionNivelIdiomaConsulta{
  id_idioma: {
    id: number;
    descripcion: string;
  };
  id_nivel_idioma: {
    id: number;
    descripcion: string;
  };
}
