/**
 * Created by edgaguil on 28/07/2017.
 */
import {IRol} from "./rol.model";

export interface IUsuario
{
  id : number,
  login : string,
  password : string,
  confirmarPassword : string,
  correoElectronico : string
}

export class Usuario implements IUsuario
{
  id: number;
  login: string;
  password: string;
  confirmarPassword: string;
  correoElectronico: string;

}

export interface IConsultaUsuario {
  id: number;
  username: string;
  correoElectronico: string;
  nombre: string;
  infoUsuario: {
    apellidos?: string;
    direccion?: string;
    nit?: string;
    descripcion?: string;
    tipoEntidad?: number;
    pais?: number;
    rol?: IRol;
  }

}

