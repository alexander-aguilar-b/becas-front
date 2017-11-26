import {Component, Input, OnInit} from '@angular/core';
import {IConsultaUsuario} from "../../models/usuario.model";

@Component({
  selector: 'app-datos-solicitante',
  templateUrl: './datos-solicitante.component.html',
  styles: []
})
export class DatosSolicitanteComponent implements OnInit {

  @Input() usuario: IConsultaUsuario;
  constructor() {
  }
  ngOnInit() {
    console.log('Dentro del Componete');
    console.log(this.usuario);
  }
}
