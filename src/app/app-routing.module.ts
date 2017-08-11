import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetalleSolicitanteComponent} from "./detalle-solicitante/detalle-solicitante.component";
import {FormularioSolicitanteComponente} from "./formulario-solicitante/formulario-solicitante.componente";
import {FormularioOferenteComponente} from "./formulario-oferente/formulario-oferente.componente";
import {ListadoSolicitanteComponent} from "./listado-solicitante/listado-solicitante.component";
import {LoginBecasComponent} from "./login-becas/login-becas.component";
import {FormularioOferenteComponent} from "./oferente/formulario-oferente/formulario-oferente.component";
import {ConfirmacionCreacionOferenteComponent} from "./oferente/confirmacion-creacion-oferente/confirmacion-creacion-oferente.component";
import {BuscarOferenteComponent} from "./oferente/buscar-oferente/buscar-oferente.component";
import {CrearFormularioComponent} from "./formulario/crear-formulario/crear-formulario.component";

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
    component : FormularioSolicitanteComponente
  },
  {
    path: 'login',
    component : LoginBecasComponent
  },
  {
    path: 'formulario-oferente',
    component : FormularioOferenteComponente
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
  }
  // ,
  // {
  //   path: 'book-list',
  //   component : BookListComponent
  // },
  // {
  //   path: 'book-form',
  //   component : BookFormComponent
  // },
  // {
  //   path: 'book-detail/:bookId',
  //   component : BookDetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
