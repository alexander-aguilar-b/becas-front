import { Component, OnInit } from '@angular/core';
import { AutenticacionService} from '../services/autenticacion.service'
import { Router } from '@angular/router'
import {CookieService} from "angular2-cookie/core";


@Component({
  selector: 'app-login-becas',
  templateUrl: './login-becas.component.html',
  styles: []
})
export class LoginBecasComponent implements OnInit {

  constructor(private autenticacionService : AutenticacionService, private router : Router,private cookie :CookieService) {
  }

  login(formValues){
    //if(this.profileForm.valid)
    console.log(formValues);
    this.autenticacionService.iniciarSesion(formValues.login, formValues.password);

    let perfil = this.cookie.get('perfil');

    if (perfil = null) {
      console.log('Hubo un error en las credenciales.');
    }
    else{
      this.router.navigate(['']);
    }
  }

  ngOnInit() {

  }

  cancel()
  {


  }

}

// export interface IUsuario {
//   id: number,
//   login: string,
//   password: string
// }
