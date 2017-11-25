import {Component, OnInit, ViewChild} from '@angular/core';
import {ServicioUsuario} from "../../services/servicio.usuario";
import {IConsultaUsuario} from "../../models/usuario.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styles: []
})
export class ConsultarUsuarioComponent implements OnInit {

  usuarioEncontrado: IConsultaUsuario;
  nombreUsuario: string;
  informacionUsuarioEncontrada: boolean;
  @ViewChild('formConsultarUsuario') public userFrm: NgForm;
  constructor(private servicioUsuario: ServicioUsuario) {

  }

  ngOnInit() {
    console.log('init');
    this.nombreUsuario = '';
    this.informacionUsuarioEncontrada = false;
  }
  consultarUsuario1(nombreUsuario) {
    console.log('consultar');
    this.usuarioEncontrado = this.servicioUsuario.obtenerUsuario(nombreUsuario);
    console.log(this.usuarioEncontrado);
    this.informacionUsuarioEncontrada = this.usuarioEncontrado.id > 0;
  }

  /*
  consultarUsuario(filtroBusqueda) {
    console.log('consultar');
    this.usuarioEncontrado = this.servicioUsuario.obtenerUsuario(filtroBusqueda.nombreUsuario);
    console.log(this.usuarioEncontrado);
    this.informacionUsuarioEncontrada = this.usuarioEncontrado.id > 0;
 }
 */
  eliminarUsuario() {
    if (confirm('Esta seguro de que desea eliminar el usuario?')) {
      console.log(this.usuarioEncontrado);
      if (this.servicioUsuario.eliminarUsuario(this.usuarioEncontrado.id)) {
        alert('El usuario ha sido eliminado del sistema');
        this.limpiarBusqueda();
      }
    }
  }

  cancelarEliminarUsuario() {
    this.limpiarBusqueda();
  }

  limpiarBusqueda() {
    this.nombreUsuario = '';
    this.informacionUsuarioEncontrada = false;
    this.userFrm.reset();
  }
}