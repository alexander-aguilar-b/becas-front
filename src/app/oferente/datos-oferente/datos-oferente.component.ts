import {Component, Input, OnInit} from '@angular/core';
import {IConsultaUsuario} from "../../models/usuario.model";

@Component({
  selector: 'app-datos-oferente',
  templateUrl: './datos-oferente.component.html',
  styles: []
})
export class DatosOferenteComponent implements OnInit {

  @Input() usuario: IConsultaUsuario;
  constructor() {
  }
  ngOnInit() {
    console.log('Dentro del Componete');
    console.log(this.usuario);
  }
}
