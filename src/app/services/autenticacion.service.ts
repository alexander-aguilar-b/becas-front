/**
 * Created by edgaguil on 28/07/2017.
 */
import { Injectable } from '@angular/core'
import { IUsuario } from '../models/usuario.model'


@Injectable()
export class AutenticacionService
{
  usuarioActual: IUsuario
  iniciarSesion(login: string, password: string)
  {

  }

  estaAutenticado()
  {

    return !!this.usuarioActual;
  }
}
