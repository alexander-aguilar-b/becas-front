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
import {FormularioAdministradorComponent} from "./administrador/formulario-administrador/formulario-administrador.component";
import {CreacionOfertaComponent} from "./oferente/creacion-oferta/creacion-oferta.component";

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
    path: 'administrador/formulario-administrador',
    component : FormularioAdministradorComponent
  },
  {
    path: 'oferente/creacion-oferta',
    component : CreacionOfertaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
