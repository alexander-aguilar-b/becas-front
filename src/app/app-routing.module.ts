import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetalleSolicitanteComponent} from "./solicitante/detalle-solicitante/detalle-solicitante.component";
import {FormularioSolicitanteComponent} from "./solicitante/formulario-solicitante/formulario-solicitante.component";
import {ListadoSolicitanteComponent} from "./solicitante/listado-solicitante/listado-solicitante.component";
import {LoginBecasComponent} from "./login-becas/login-becas.component";
import {FormularioOferenteComponent} from "./oferente/formulario-oferente/formulario-oferente.component";
import {ConfirmacionCreacionOferenteComponent} from "./oferente/confirmacion-creacion-oferente/confirmacion-creacion-oferente.component";
import {BuscarOferenteComponent} from "./oferente/buscar-oferente/buscar-oferente.component";
import {CrearFormularioComponent} from "./formulario/crear-formulario/crear-formulario.component";
import {GestionarFormularioComponent} from "./formulario/gestionar-formulario/gestionar-formulario.component";
import {FormularioSolicitanteReactivoComponent} from "./solicitante/formulario-solicitante-reactivo/formulario-solicitante-reactivo.component";

const routes: Routes = [
  {
    path: '',
    component : LoginBecasComponent
  },
  {
    path: 'listado-solicitante',
    component : ListadoSolicitanteComponent
  },
  {
    path: 'formulario-solicitante',
    component : FormularioSolicitanteComponent
  },
  {
    path: 'login',
    component : LoginBecasComponent
  },

  {
    path: 'oferente/formulario-oferente',
    component : FormularioOferenteComponent
  },
  {
    path: 'oferente/confirmacion-creacion-oferente',
    component : ConfirmacionCreacionOferenteComponent
  },

  {
    path: 'oferente/buscar-oferente',
    component : BuscarOferenteComponent
  }
  ,
  {
    path: 'formulario/crear-formulario',
    component : CrearFormularioComponent
  },
  {
    path: 'solicitante/formulario-solicitante',
    component : FormularioSolicitanteComponent
  }
  ,
  {
    path: 'formulario/gestionar-formulario',
    component : GestionarFormularioComponent
  },
  {
    path: 'solicitante/formulario-solicitante-reactivo',
    component : FormularioSolicitanteReactivoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
