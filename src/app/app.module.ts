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


declare let jQuery : Object;
import {ServicioAdministrador} from "./services/administrador.servicio";
import { CreacionOfertaComponent } from './oferente/creacion-oferta/creacion-oferta.component';
import {ServicioTipoOferta} from "./services/tipo.oferta.servicio";
import {ServicioOferta} from "./services/oferta.servicio";
import { FormularioAdministradorComponent } from './administrador/formulario-administrador/formulario-administrador.component';
import {ServicioMenu} from "./services/menu.servicio";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { GlobalEventsManager } from "./GlobalEventsManager ";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
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
    { provide : JQ_TOKEN, useValue : jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
