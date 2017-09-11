/**
 * Created by edgaguil on 3/09/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router'
import {Observable} from "rxjs/Observable";
import {RequestOptions} from "@angular/http";
import {SolicitanteService} from "../../services/solicitante.service";
import {ServicioPais} from "../../services/pais.servicio";
import {ServicioTipoEntidad} from "../../services/tipo.entidad.servicio";
import {ISolicitante} from "../../models/solicitante.model";
import {ServicioTipoDocumento} from "../../services/tipo.documento.servicio";
import {ServicioGenero} from "../../services/genero.servicio";
import {ServicioTipoPoblacion} from "../../services/tipo.poblacion.servicio";
import {IExperienciaLaboral} from "../../models/experiencia.laboral.model";
import {IRegistroSolicitante} from "../../models/registro.solicitante.model";


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

  tipoDocumentos;
  generos;
  tiposPoblacion;
  paises;
  departamentos;
  listadoExperienciaLaboral: IExperienciaLaboral[] = [];

  constructor(private router: Router, private servicioSolicitante: SolicitanteService, private servicioPais: ServicioPais
    , private servicioTipoDocumento: ServicioTipoDocumento, private servicioGenero: ServicioGenero
    , private servicioTipoPoblacion: ServicioTipoPoblacion) {
  }

  ngOnInit() {
    this.tipoDocumentos = this.servicioTipoDocumento.obtenerTipoDocumentos();
    this.generos = this.servicioGenero.obtenerGeneros();
    this.tiposPoblacion = this.servicioTipoPoblacion.obtenerTipoPoblacion();
    this.paises = this.servicioPais.obtenerPaises();
  }

  crearSolicitante(formValues) {
    console.log("Datos Formulario");
    console.log(formValues);

    let datosSolicitante: IRegistroSolicitante;
    datosSolicitante = {
      id: 0,
      correoElectronico: formValues.correoelectronico,
      username: formValues.login,
      contrasena: formValues.contrasenia,
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
        this.router.navigate(['/oferente/confirmacion-creacion-oferente'])
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

  solicitante = {
    login: "",
    usuario: {}
  };

  valorSeleccionadoTipoDocumento = 0;
  valorSeleccionadoGenero = 0;
  valorSeleccionadoTipoPoblacion = 0;
  valorSeleccionadoPaisNacimiento = 0;
  valorSeleccionadoDepartamentoNacimiento = 0;
  valorSeleccionadoCiudadNacimiento = 0;

  valorSeleccionadoPaisResidencia = 0;
  valorSeleccionadoDepartamentoResidencia = 0;
  valorSeleccionadoCiudadResidencia = 0;


}


