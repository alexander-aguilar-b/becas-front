import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoSolicitanteComponent } from './listado-solicitante/listado-solicitante.component';
import { DetalleSolicitanteComponent } from './detalle-solicitante/detalle-solicitante.component';
import { FormularioSolicitanteComponent } from './formulario-solicitante/formulario-solicitante.component';
import { LoginBecasComponent } from './login-becas/login-becas.component';
import { ListadoSolicitanteService } from './listado-solicitante/listado-solicitante.service';
import  { SolicitanteService } from './services/solicitante.service';
import { AutenticacionService} from './services/autenticacion.service';


@NgModule({
  declarations: [
    AppComponent,
    ListadoSolicitanteComponent,
    DetalleSolicitanteComponent,
    FormularioSolicitanteComponent,
    LoginBecasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ListadoSolicitanteService,
    SolicitanteService,
    AutenticacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
