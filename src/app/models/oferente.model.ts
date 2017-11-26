import {IUsuario, Usuario} from "./usuario.model";
import {ITipoEntidad, TipoEntidad} from "./tipo.entidad.model";
import {EstadoSistema, IEstadoSistema, IEstadoSistemaConsulta} from "./estado.sistema.model";
import {Injectable} from "@angular/core";
import {IRol} from "./rol.model";
import {IPais} from "./pais.model";


/**
 * Created by edgaguil on 29/07/2017.
 */
export interface IOferente {
  id: number;
  correoElectronico: string;
  contrasena?: string;
  nombre: string;
  idEstadoSistema: IEstadoSistema;
  rol: IRol;
  infoUsuario: {
    nit: string,
    descripcion: string,
    fechaCreacion: Date,
    tipoEntidad: ITipoEntidad,
    pais: IPais
  };
  nit: string;
  descripcion: string;
  tipoEntidad: ITipoEntidad;
  estadoSistema: IEstadoSistema;
}

export interface IOferenteConsulta {
  id: number;
  username: string;
  correoElectronico: string;
  contrasena?: string;
  nombre: string;
  estadoSistema: IEstadoSistemaConsulta;
  rol: IRol;
  infoUsuario: {
    nit: string,
    descripcion?: string,
    fechaCreacion: Date,
    tipoEntidad: ITipoEntidad,
    pais: IPais
  };
}



// export class Oferente implements  IOferente
// {
//   id: number;
//   //usuario: Usuario;
//   correoElectronico : string;
//   contrasena : string;
//   nit: string;
//   descripcion: string;
//   //fechaCreacion: Date;
//   tipoEntidad: TipoEntidad;
//   estadoSistema: EstadoSistema;
//   nombre: string;
// }
