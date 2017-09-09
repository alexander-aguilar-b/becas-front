/**
 * Created by edgaguil on 28/07/2017.
 */
import { Injectable } from '@angular/core'
import { IUsuario } from '../models/usuario.model'
import {CookieService} from "angular2-cookie/core";


@Injectable()
export class AutenticacionService
{
  usuarioActual: IUsuario

  constructor(private cookie :CookieService) {
  }


  iniciarSesion(login: string, password: string)
  {
    //Servicio autenticación


    //Token
    let perfil = 'Oferente';
    this.cookie.put('perfil',perfil);

    console.log(this.obtenerCookie('perfil'));
  }

  obtenerCookie(clave : string) : string {
    return this.cookie.get(clave);
  }

  estaAutenticado()
  {

    return !!this.usuarioActual;
  }

  private _perfil: string;

  public setPerfil(value: string) {
    this._perfil = value;
  }
  public getPerfil(): string {
    return this._perfil;
  }

}
