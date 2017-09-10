import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../services/autenticacion.service'
import { Router } from '@angular/router'
import { CookieService } from "angular2-cookie/core";
import { Injectable, EventEmitter } from "@angular/core";
import { GlobalEventsManager } from "../GlobalEventsManager ";
import { IUsuarioS, UsuarioS } from '../models/usuarios.model'
import { Subject, Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-login-becas',
  templateUrl: './login-becas.component.html',
  styles: []
})

@Injectable()
export class LoginBecasComponent implements OnInit {

  usuario: IUsuarioS
  mensajeError: string

  constructor(private autenticacionService: AutenticacionService, private router: Router
    , private globalEventsManager: GlobalEventsManager) {
    this.usuario = new UsuarioS();
  }

  login(formValues) {
    this.autenticacionService.iniciarSesion(formValues.login, formValues.password).subscribe(usuario => {
      this.usuario = usuario;
    });

    this.autenticacionService.crearCookie('perfil', this.usuario.rol);
    let perfil = this.autenticacionService.obtenerCookie('perfil');
    console.log(this.usuario.rol);
    if (this.usuario.rol != null) {
      this.globalEventsManager.showNavBar.emit();
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
  }
}
