import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoSolicitanteComponent } from './listado-solicitante/listado-solicitante.component';
import { DetalleSolicitanteComponent } from './detalle-solicitante/detalle-solicitante.component';
import { FormularioSolicitanteComponente } from './formulario-solicitante/formulario-solicitante.componente';
import { LoginBecasComponent } from './login-becas/login-becas.component';
import { ListadoSolicitanteService } from './listado-solicitante/listado-solicitante.service';
import  { SolicitanteService } from './services/solicitante.service';
import { AutenticacionService} from './services/autenticacion.service';
import { FormularioOferenteComponente } from './formulario-oferente/formulario-oferente.componente';
import  { ConfiguracionServicio } from './services/configuracion.servicio';
import { FormularioOferenteComponent } from './oferente/formulario-oferente/formulario-oferente.component';
import { ConfirmacionCreacionOferenteComponent } from './oferente/confirmacion-creacion-oferente/confirmacion-creacion-oferente.component';
import {ServicioOferente} from "./services/oferente.servicio";
import {ServicioPais} from "./services/pais.servicio";
import {ServicioTipoEntidad} from "./services/tipo.entidad.servicio";
import { BuscarOferenteComponent } from './oferente/buscar-oferente/buscar-oferente.component';
import { CrearFormularioComponent } from './formulario/crear-formulario/crear-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoSolicitanteComponent,
    DetalleSolicitanteComponent,
    FormularioSolicitanteComponente,
    LoginBecasComponent,
    FormularioOferenteComponente,
    FormularioOferenteComponent,
    ConfirmacionCreacionOferenteComponent,
    BuscarOferenteComponent,
    CrearFormularioComponent
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
    ServicioTipoEntidad
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
