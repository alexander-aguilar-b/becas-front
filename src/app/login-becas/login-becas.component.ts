import { Component, OnInit } from '@angular/core';
import { AutenticacionService} from '../services/autenticacion.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-login-becas',
  templateUrl: './login-becas.component.html',
  styles: []
})
export class LoginBecasComponent implements OnInit {

  constructor(private autenticacionService : AutenticacionService, private router : Router) {
  }

  login(formValues){
    this.autenticacionService.iniciarSesion(formValues.login, formValues.password);
    this.router.navigate(['listado-solicitante'])
  }

  ngOnInit() {
  }

  cancel()
  {


  }

}

export interface IUsuario {
  id: number,
  login: string,
  password: string
}
