import {Component, Input, OnInit} from '@angular/core';
import {IConsultaUsuario} from "../../models/usuario.model";

@Component({
  selector: 'app-datos-admin',
  templateUrl: './datos-admin.component.html',
  styles: []
})
export class DatosAdministradorComponent implements OnInit {

  @Input() usuario: IConsultaUsuario;
  constructor() {
  }
  ngOnInit() {
    console.log('Dentro del Componete');
    console.log(this.usuario);
  }
}
