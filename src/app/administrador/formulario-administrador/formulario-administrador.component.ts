import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServicioAdministrador} from "../../services/administrador.servicio";
import {ServicioTipoDocumento} from "../../services/tipo.documento.servicio";

@Component({
  selector: 'app-formulario-administrador',
  templateUrl: './formulario-administrador.component.html',
  styles: []
})
export class FormularioAdministradorComponent implements OnInit {

  tiposDocumento;

  constructor(private router: Router, private servicioAdministrador: ServicioAdministrador, private servicioTipoDocumento: ServicioTipoDocumento) {
  }

  ngOnInit() {
    this.tiposDocumento = this.servicioTipoDocumento.obtenerTipoDocumentos();
  }

  crearAdministrador(formValues) {
    console.log(formValues);
    this.servicioAdministrador.crearAdministrador(formValues)
      .subscribe(event => {
        this.router.navigate(['/oferente/confirmacion-creacion-oferente'])
      })
  }
  valorSeleccionadoTipoDocumento = 0;


}
