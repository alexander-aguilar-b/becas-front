import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ServicioAdministrador} from "../../services/administrador.servicio";
import {ServicioTipoDocumento} from "../../services/tipo.documento.servicio";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ServicioMenu} from "../../services/menu.servicio";
import {IMenu} from "../../models/menu.model";
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-formulario-administrador',
  templateUrl: './formulario-administrador.component.html',
  styles: ['em {color: #E05C65;}' +
  '.error input {background-color: #E3C3C5;}']
})
export class FormularioAdministradorComponent implements OnInit {

  administradorForm: FormGroup
  tiposDocumento;
  contrasena: FormControl
  confirmarcontrasena: FormControl
  menuAutorizado: IMenu[];

  constructor(public formBuilder: FormBuilder, private router: Router, private servicioAdministrador: ServicioAdministrador
    , private servicioTipoDocumento: ServicioTipoDocumento, private servicioMenu: ServicioMenu
    , private autenticacionService: AutenticacionService) {
    //
    this.administradorForm = formBuilder.group({
      'contrasena': new FormControl('', Validators.required),
      'confirmarcontrasena': new FormControl(null)
    }, {
      validator: this.confirmarContrasenia.bind(this)
    });
  }

  ngOnInit() {

    // Valida autorización
    let perfil = this.autenticacionService.obtenerCookie('perfil');
    console.log(perfil);
    this.menuAutorizado = this.servicioMenu.obtenerMenu(perfil);
    if (!this.menuAutorizado.some(s => s.ruta === 'administrador/formulario-administrador')) {
      this.router.navigate(['login-becas']);
    }
    // Fin validación

    this.tiposDocumento = this.servicioTipoDocumento.obtenerTipoDocumentos();
    this.contrasena = new FormControl('', [Validators.required]);
    this.confirmarcontrasena = new FormControl('', [Validators.required]);
  }

  confirmarContrasenia(group: FormGroup) {
    let contrasenia = group.controls.contrasena.value
    let confirmarcontrasenia = group.controls.confirmarcontrasena.value
    return contrasenia === confirmarcontrasenia
      ? null
      : {'confirmarContrasenia': 'Las contrasenas deben ser iguales'}
  }

  validarContrasenia() {
    return this.administradorForm.controls.contrasena.valid ||
      this.administradorForm.controls.contrasena.untouched
  }

  validarConfirmacionContrasenia() {
    return (this.administradorForm.valid && this.administradorForm.controls.confirmarcontrasena.valid)
      || this.administradorForm.controls.confirmarcontrasena.untouched;
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
