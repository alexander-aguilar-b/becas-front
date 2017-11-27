import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoSolicitanteComponent } from './solicitante/listado-solicitante/listado-solicitante.component';
import { DetalleSolicitanteComponent } from './solicitante/detalle-solicitante/detalle-solicitante.component';
import { FormularioSolicitanteComponent } from './solicitante/formulario-solicitante/formulario-solicitante.component';
import { LoginBecasComponent } from './login-becas/login-becas.component';
import { ListadoSolicitanteService } from './solicitante/listado-solicitante/listado-solicitante.service';
import  { SolicitanteService } from './services/solicitante.service';
import { AutenticacionService} from './services/autenticacion.service';
import  { ConfiguracionServicio } from './services/configuracion.servicio';
import { FormularioOferenteComponent } from './oferente/formulario-oferente/formulario-oferente.component';
import { ConfirmacionCreacionOferenteComponent } from './oferente/confirmacion-creacion-oferente/confirmacion-creacion-oferente.component';
import {ServicioOferente} from "./services/oferente.servicio";
import {ServicioPais} from "./services/pais.servicio";
import {ServicioTipoEntidad} from "./services/tipo.entidad.servicio";
import { BuscarOferenteComponent } from './oferente/buscar-oferente/buscar-oferente.component';
import { CrearFormularioComponent } from './formulario/crear-formulario/crear-formulario.component';
import {ServicioTipoDocumento} from "./services/tipo.documento.servicio";
import {ServicioGenero} from "./services/genero.servicio";
import {ServicioTipoPoblacion} from "./services/tipo.poblacion.servicio";
import { GestionarFormularioComponent } from './formulario/gestionar-formulario/gestionar-formulario.component';
import { JQ_TOKEN} from './comun/jquery.service';
import {SimpleModalComponent} from "./comun/simple-modal.component";
import {ModalTriggerDirective} from "./comun/modal.trigger.directive";
import {FormularioSolicitanteReactivoComponent} from "./solicitante/formulario-solicitante-reactivo/formulario-solicitante-reactivo.component";
import {ExperienciaLaboralSolicitanteComponent} from "./solicitante/experiencia-laboral-solicitante/experiencia-laboral-solicitante.component";
import {ServicioAdministrador} from "./services/administrador.servicio";
import { CreacionOfertaComponent } from './oferente/creacion-oferta/creacion-oferta.component';
import {ServicioTipoOferta} from "./services/tipo.oferta.servicio";
import {ServicioOferta} from "./services/oferta.servicio";
import { FormularioAdministradorComponent } from './administrador/formulario-administrador/formulario-administrador.component';
import {ServicioMenu} from "./services/menu.servicio";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {GlobalEventsManager} from "./GlobalEventsManager";
import {ServicioTipoItemFormulario} from "./services/tipo.item.service";
import {ConfirmacionCreacionSolicitanteComponent} from "./solicitante/confirmacion-creacion-solicitante/confirmacion-creacion-solicitante.component";
import {ConfirmacionCreacionAdministradorComponent} from "./administrador/confirmacion-creacion-administrador/confirmacion-creacion-administrador.component";
import {ConfirmacionCreacionOfertaComponent} from "./oferente/confirmacion-creacion-oferta/confirmacion-creacion-oferta.component";
import {ConsultarOferta} from "./oferta/consultar-oferta/consultar-oferta.component";
import {DetalleOfertaSolicitanteComponent} from "./oferta/detalle-oferta-solicitante/detalle-oferta-solicitante.component";
import {EtapasOfertaComponent} from "./oferta/etapas-oferta/etapas-oferta.component";
import {EtapasOfertaSolicitanteComponet} from "./oferta/etapas-oferta-solicitante/etapas-oferta-solicitante.component";
import {ServicioEtapasOferta} from "./services/etapas.oferta.servicio";
import {DetalleOfertaComponent} from "./oferta/detalle-oferta/detalle-oferta.component";
import {DetalleOfertaOferenteComponent} from "./oferta/detalle-oferta-oferente/detalle-oferta-oferente.component";
import {EtapasOfertaOferenteComponent} from "./oferta/etapas-oferta-oferente/etapas-oferta-oferente.component";
import {EditarEtapaOfertaComponent} from "./oferta/editar-etapa-oferta/editar-etapa-oferta.component";
import {FormularioEtapaComponent} from "./oferta/formulario-etapa/formulario-etapa.component";
import {ConsultarOfertaOferenteComponent} from "./oferta/consulta-oferta-oferente/consulta-oferta-oferente.component";
import {ConsultarOfertaSolicitanteComponent} from "./oferta/consulta-oferta-solicitante/consulta-oferta-solicitante.component";
import {AgregarEtapaOfertaComponent} from "./oferta/agregar-etapa-oferta/agregar-etapa-oferta.component";
import {ServicioFormularioEtapa} from "./services/formulario.etapa.servicio";
import {InformacionAcademicaBasicaComponent} from "./solicitante/informacion-academica-basica/informacion-academica-basica.component";
import {InformacionAcademicaSuperiorComponent} from "./solicitante/informacion-academica-superior/informacion-academica-superior.component";
import {ServicioIdioma} from "./services/idioma.servicio";
import {ServicioInstitucionEducacionBasica} from "./services/institucion.educacion.basica.servicio";
import {ServicioInstitucionEducacionSuperior} from "./services/institucion.educacion.superior.servicio";
import {ServicioNivelIdioma} from "./services/nivel.idioma.service";
import {InformacionIdiomaComponent} from "./solicitante/informacion-idioma/informacion-idioma.component";
import { BsDatepickerModule } from 'ngx-bootstrap';
import {ConsultarUsuarioComponent} from "./administrador/consultar-usuario/consultar-usuario.component";
import {ServicioUsuario} from "./services/servicio.usuario";
import {ConsultarSolicitudesOferentesComponent} from "./administrador/consultar-solicitudes-oferentes/consultar-solicitudes-oferentes.component";
import {DatosAdministradorComponent} from "./administrador/datos-administrador/datos-admin.component";
import {DatosSolicitanteComponent} from "./solicitante/datos-solicitante/datos-solicitante.component";
import {DatosOferenteComponent} from "./oferente/datos-oferente/datos-oferente.component";
import {ModificarEstadoSolicitudOferenteComponent} from "./administrador/modificar-estado-solicitud-oferente/modificar-estado-solicitud-oferente.component";
import {ServicioAplicacionOferta} from "./services/servicio.aplicacion.oferta";
import {ModalEtapaOfertaComponent} from "./oferta/modal-etapa-oferta/modal-etapa-oferta.component";
import {SiNoPipe} from "./custom-pipe/custom-pipe";
import {DetalleEtapaOfertaSolicitanteComponent} from "./oferta/detalle-etapa-solicitante/detalle-etapa-solicitante.component";
import {DatosFormularioComponent} from "./formulario/datos-formulario/datos-formulario.component";
import {FormularioEtapaSolicitanteComponent} from "./oferta/formulario-etapa-solicitante/formulario-etapa-solicitante.component";
import {ConsultarPostulacionesOfertaComponent} from "./oferente/consultar-postulaciones-oferta/consultar-postulaciones-oferta.component";
import {ConsultarDetallePostulacionComponent} from "./oferente/consultar-detalle-postulacion/consultar-detalle-postulacion.component";
import {ServicioDatosAplicacionOferta} from "./services/servicio.datos.aplicacion";
import {ConsultarFormularioDiligenciadoComponent} from "./oferente/consultar-formulario-diligenciado/consultar-formulario-diligenciado.component";

declare let jQuery: Object;

@NgModule({
  declarations: [
    AppComponent,
    ListadoSolicitanteComponent,
    DetalleSolicitanteComponent,
    FormularioSolicitanteComponent,
    LoginBecasComponent,
    FormularioOferenteComponent,
    ConfirmacionCreacionOferenteComponent,
    BuscarOferenteComponent,
    CrearFormularioComponent,
    GestionarFormularioComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    FormularioSolicitanteReactivoComponent,
    ExperienciaLaboralSolicitanteComponent,
    FormularioAdministradorComponent,
    CreacionOfertaComponent,
    ConfirmacionCreacionSolicitanteComponent,
    ConfirmacionCreacionAdministradorComponent,
    ConfirmacionCreacionOfertaComponent,
    ConsultarOferta,
    DetalleOfertaSolicitanteComponent,
    EtapasOfertaComponent,
    EtapasOfertaSolicitanteComponet,
    DetalleOfertaComponent,
    DetalleOfertaOferenteComponent,
    EtapasOfertaOferenteComponent,
    EditarEtapaOfertaComponent,
    FormularioEtapaComponent,
    ConsultarOfertaOferenteComponent,
    ConsultarOfertaSolicitanteComponent,
    AgregarEtapaOfertaComponent,
    InformacionAcademicaBasicaComponent,
    InformacionAcademicaSuperiorComponent,
    InformacionIdiomaComponent,
    ConsultarUsuarioComponent,
    ConsultarSolicitudesOferentesComponent,
    DatosAdministradorComponent,
    DatosSolicitanteComponent,
    DatosOferenteComponent,
    ModificarEstadoSolicitudOferenteComponent,
    ModalEtapaOfertaComponent,
    SiNoPipe,
    DetalleEtapaOfertaSolicitanteComponent,
    DatosFormularioComponent,
    FormularioEtapaSolicitanteComponent,
    ConsultarPostulacionesOfertaComponent,
    ConsultarDetallePostulacionComponent,
    ConsultarFormularioDiligenciadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [ListadoSolicitanteService,
    SolicitanteService,
    AutenticacionService,
    ConfiguracionServicio,
    ServicioOferente,
    ServicioPais,
    ServicioTipoEntidad,
    ServicioTipoDocumento,
    ServicioGenero,
    ServicioTipoPoblacion,
    ServicioAdministrador,
    ServicioTipoDocumento,
    ServicioTipoOferta,
    ServicioOferta,
    ServicioMenu,
    CookieService,
    GlobalEventsManager,
    ServicioTipoPoblacion,
    ServicioTipoItemFormulario,
    ServicioEtapasOferta,
    ServicioFormularioEtapa,
    ServicioIdioma,
    ServicioInstitucionEducacionBasica,
    ServicioInstitucionEducacionSuperior,
    ServicioNivelIdioma,
    ServicioUsuario,
    ServicioAplicacionOferta,
    ServicioDatosAplicacionOferta,
    { provide : JQ_TOKEN, useValue : jQuery}
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }

