import {Component, OnInit, ViewChild} from '@angular/core';
import {ServicioUsuario} from "../../services/servicio.usuario";
import {IConsultaUsuario} from "../../models/usuario.model";
import {NgForm} from "@angular/forms";
import {IErrorServicio} from "../../models/error.servicio.model";
import {CodigosErrorServicio} from "../../constantes/codigos.error.servicio";

@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styles: []
})
export class ConsultarUsuarioComponent implements OnInit {

  usuarioEncontrado: IConsultaUsuario;
  nombreUsuario: string;
  informacionUsuarioEncontrada: boolean;
  rolUsuario  = {
    ADMIN :  'ADMIN',
    SOLICITANTE : 'SOLICITANTE',
    OFERENTE : 'OFERENTE'
  }
  usuarioNoEncontrado: boolean;

  @ViewChild('formConsultarUsuario') public userFrm: NgForm;
  constructor(private servicioUsuario: ServicioUsuario) {

  }

  ngOnInit() {
    console.log('init');
    this.nombreUsuario = '';
    this.informacionUsuarioEncontrada = false;
    this.usuarioEncontrado = null;
    this.usuarioNoEncontrado = false;
  }

  consultarUsuario(nombreUsuario) {
    console.log('consultar');

    this.servicioUsuario.obtenerUsuario(nombreUsuario).subscribe(usuarioEncontrado => {
      this.usuarioEncontrado = usuarioEncontrado;
      console.log('En el metodo cliente');
      console.log(usuarioEncontrado);
      this.informacionUsuarioEncontrada = this.usuarioEncontrado.id > 0;
      this.usuarioNoEncontrado = false;
    },
      error => {
        let errorServicio: IErrorServicio =<IErrorServicio><any>error.json();
        if(errorServicio.code == CodigosErrorServicio.USUARIO_NO_EXISTE){
          this.usuarioNoEncontrado = true;
          this.informacionUsuarioEncontrada = false;
        }
      });
  }
  eliminarUsuario() {
    if (confirm('Esta seguro de que desea eliminar el usuario?')) {
      console.log(this.usuarioEncontrado);
      this.servicioUsuario.eliminarUsuario(this.usuarioEncontrado.id).subscribe(respuesta => {
        if (respuesta) {
          alert('El usuario ha sido eliminado del sistema');
          this.limpiarBusqueda();
        }
      });

    }
  }

  cancelarEliminarUsuario() {
    this.limpiarBusqueda();
    this.usuarioEncontrado = null;
  }

  limpiarBusqueda() {
    this.nombreUsuario = '';
    this.informacionUsuarioEncontrada = false;
    this.userFrm.reset();
  }
}
