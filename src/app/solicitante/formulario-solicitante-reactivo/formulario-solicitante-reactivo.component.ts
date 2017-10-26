/**
 * Created by edgaguil on 3/09/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router'
import {SolicitanteService} from "../../services/solicitante.service";
import {ServicioPais} from "../../services/pais.servicio";
import {ServicioTipoDocumento} from "../../services/tipo.documento.servicio";
import {ServicioGenero} from "../../services/genero.servicio";
import {ServicioTipoPoblacion} from "../../services/tipo.poblacion.servicio";
import {IExperienciaLaboral} from "../../models/experiencia.laboral.model";
import {IRegistroSolicitante} from "../../models/registro.solicitante.model";
import {IGenero} from "../../models/genero.model";
import {IPais} from "../../models/pais.model";
import {ITipoDocumento} from "../../models/tipo.documento.model";
import {IInformacionAcademicaBasica} from "../../models/informacion.academica.basica.model";
import {IInformacionAcademicaSuperior} from "../../models/informacion.academica.superior.model";
import {IInformacionNivelIdioma} from "../../models/informacion.nivel.idioma.model";


@Component({
  selector: 'app-formulario-solicitante-reactivo',
  templateUrl: './formulario-solicitante-reactivo.component.html',
  styles: [`
    em {
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }

    .error input {
      background-color: #E3C3C5;
    }

    .error ::-webkit-input-placeholder {
      color: #999;
    }

    .error ::-moz-placeholder {
      color: #999;
    }

    .error :-moz-placeholder {
      color: #999;
    }
  `]
})

export class FormularioSolicitanteReactivoComponent implements OnInit {

  tipoDocumentos : ITipoDocumento[];
  generos : IGenero[];
  tiposPoblacion;
  paises : IPais[];
  listadoExperienciaLaboral: IExperienciaLaboral[] = [];
  listadoInformacionAcademicaBasica : IInformacionAcademicaBasica[] = [];
  listadoInformacionAcademicaSuperior : IInformacionAcademicaSuperior[] = [];
  listadoInformacionNivelIdioma : IInformacionNivelIdioma[] = [];

  valorSeleccionadoTipoDocumento;
  valorSeleccionadoGenero;
  valorSeleccionadoTipoPoblacion;
  valorSeleccionadoPaisNacimiento;
  valorSeleccionadoPaisResidencia;

  administradorForm: FormGroup;
  contrasena: FormControl;
  confirmarcontrasena: FormControl;

  constructor(public formBuilder: FormBuilder, private router: Router, private servicioSolicitante: SolicitanteService, private servicioPais: ServicioPais
    , private servicioTipoDocumento: ServicioTipoDocumento, private servicioGenero: ServicioGenero
    , private servicioTipoPoblacion: ServicioTipoPoblacion) {

    this.administradorForm = formBuilder.group({
      'contrasena': new FormControl('', Validators.required),
      'confirmarcontrasena': new FormControl('', Validators.required)
    }, {
      validator: this.confirmarContrasenia.bind(this)
    });
  }

  ngOnInit() {
    //this.tipoDocumentos = this.servicioTipoDocumento.obtenerTipoDocumentos();
    //this.generos = this.servicioGenero.obtenerGeneros();
    this.tiposPoblacion = this.servicioTipoPoblacion.obtenerTipoPoblacion();
    //this.paises = this.servicioPais.obtenerPaises();
    this.servicioPais.obtenerPaises().subscribe(paises => this.paises = paises);
    this.servicioTipoDocumento.obtenerTipoDocumentos().subscribe(tipoDocumentos => this.tipoDocumentos = tipoDocumentos);
    this.servicioGenero.obtenerGeneros().subscribe(generos => this.generos = generos);

    this.valorSeleccionadoTipoDocumento = 0;
    this.valorSeleccionadoGenero = 0;
    this.valorSeleccionadoTipoPoblacion = 0;
    this.valorSeleccionadoPaisNacimiento = 0;
    this.valorSeleccionadoPaisResidencia = 0;

    this.contrasena = new FormControl('', [Validators.required]);
    this.confirmarcontrasena = new FormControl('', [Validators.required]);
  }


  crearSolicitante(formValues) {
    console.log("Datos Formulario");
    console.log(formValues);

    let datosSolicitante: IRegistroSolicitante;
    datosSolicitante = {
      id: 0,
      correoElectronico: formValues.correoelectronico,
      username: formValues.login,
      contrasena: this.administradorForm.controls.contrasena.value,
      nombre: formValues.nombres,
      numero_documento: formValues.numeroDocumento,
      apellidos: formValues.apellidos,
      direccion: formValues.direccion,
      telefono: formValues.telefono,
      estrato: formValues.estrato,
      id_tipo_documento: formValues.tipoDocumento,
      sexo: formValues.genero,
      id_tipo_poblacion: formValues.tipoPoblacion,
      pais_nacimiento: formValues.paisNacimiento,
      pais_residencia: formValues.paisResidencia,
      departamento_nacimiento: 1,
      departamento_residencia: 1,
      municipio_nacimiento: 1,
      municipio_residencia: 1,
      workExperienceList: this.listadoExperienciaLaboral
    }


    console.log("Datos Servicio");
    console.log(datosSolicitante);

    this.servicioSolicitante.crearSolicitante(datosSolicitante)
    //.finally(() => this.router.navigate(['/oferente/confirmacion-creacion-oferente'])).subscribe();
      .subscribe(event => {
        this.router.navigate(['/solicitante/confirmacion-creacion-solicitante'])
      })
  }

  agregarExperienciaLaboral(experienciaLaboral: IExperienciaLaboral): void {

    console.log("los datos son");
    console.log(experienciaLaboral.nombre_empresa);
    console.log(experienciaLaboral.fecha_inicio);
    console.log(experienciaLaboral.fecha_fin);
    console.log(experienciaLaboral.cargo);
    this.listadoExperienciaLaboral.push(experienciaLaboral);
  }

  agregarInformacionAcademicaBasica(informacionAcademicaBasica : IInformacionAcademicaBasica){
     this.listadoInformacionAcademicaBasica.push(informacionAcademicaBasica);
  }

  agregarInformacionAcademicaSuperior(informacionAcademicaSuperior : IInformacionAcademicaSuperior){
    this.listadoInformacionAcademicaSuperior.push(informacionAcademicaSuperior);
  }

  agregarInformacionNivelIdioma(informacionNivelIdioma : IInformacionNivelIdioma){
    this.listadoInformacionNivelIdioma.push(informacionNivelIdioma);
  }

  solicitante = {
    login: "",
    usuario: {}
  };

  //#region Validaciones
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


