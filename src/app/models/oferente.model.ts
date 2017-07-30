import {IUsuario} from "./usuario.model";
import {ITipoEntidad} from "./tipo.entidad.model";
import {IEstadoSitema} from "./estado.sistema.model";
import {Injectable} from "@angular/core";


/**
 * Created by edgaguil on 29/07/2017.
 */
export interface IOferente
{
  id : number,
  usuario : IUsuario
  nit : string,
  descripcion: string,
  fechaCreacion : Date,
  tipoEntidad : ITipoEntidad,
  estadoSistema : IEstadoSitema,
  nombre : string
}
