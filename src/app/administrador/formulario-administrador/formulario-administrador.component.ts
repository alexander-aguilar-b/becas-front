
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ServicioAdministrador } from "../../services/administrador.servicio";
import { ServicioTipoDocumento } from "../../services/tipo.documento.servicio";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AutenticacionService } from "../../services/autenticacion.service";
import { IAdministrador } from '../../models/administrador.model';

@Component({
  selector: 'app-formulario-administrador',
  templateUrl: './formulario-administrador.component.html',
  styles: []
})
export class FormularioAdministradorComponent implements OnInit {

  tiposDocumento;

  administradorForm: FormGroup
  contrasena: FormControl
  confirmarcontrasena: FormControl

  informacionUsuarioForm: FormGroup
  //userName : FormControl
  //username: FormControl
  administrador: IAdministrador;

  constructor(public formBuilder: FormBuilder, private router: Router, private servicioAdministrador: ServicioAdministrador
    , private servicioTipoDocumento: ServicioTipoDocumento, private autenticacionService: AutenticacionService) {

    this.administradorForm = formBuilder.group({
      'contrasena': new FormControl('', Validators.required),
      'confirmarcontrasena': new FormControl('', Validators.required)
    }, {
        validator: this.confirmarContrasenia.bind(this)
      });
  }

  ngOnInit() {
    this.autenticacionService.validarAutorizacion('administrador/formulario-administrador');
    this.tiposDocumento = this.servicioTipoDocumento.obtenerTipoDocumentos();
    this.contrasena = new FormControl('', [Validators.required]);
    this.confirmarcontrasena = new FormControl('', [Validators.required]);
    //this.username = new FormControl('',Validators.required)
  }

  valorSeleccionadoTipoDocumento = 0;

  crearAdministrador(formValues: IAdministrador) {
    this.administrador = formValues;
    this.administrador.contrasena = this.administradorForm.controls.contrasena.value;

    this.servicioAdministrador.crearAdministrador(this.administrador)
      .subscribe(event => {
        this.router.navigate(['/oferente/confirmacion-creacion-oferente'])
      })
  }

  //#region Validaciones
  /*
  validarUserName() {
    return this.username.valid ||
      this.username.untouched
  }
  */
  validarContrasenia() {
    return this.administradorForm.controls.contrasena.valid ||
      this.administradorForm.controls.contrasena.untouched
  }
  validarConfirmacionContrasenia() {
    return (this.administradorForm.controls.confirmarcontrasena.valid)
      || this.administradorForm.controls.confirmarcontrasena.untouched;
  }
  validarMismaContrasenia() {
    return (this.administradorForm.valid && this.administradorForm.controls.confirmarcontrasena.valid)
      || this.administradorForm.controls.confirmarcontrasena.untouched;
  }
  private confirmarContrasenia(group: FormGroup): { [key: string]: any } {
    let contrasenia = group.controls.contrasena.value
    let confirmarcontrasenia = group.controls.confirmarcontrasena.value
    return contrasenia === confirmarcontrasenia
      ? null
      : { 'confirmarContrasenia': 'La contraseña no coincide' }
  }
  //#endregion  Validaciones
}