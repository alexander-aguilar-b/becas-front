import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetalleSolicitanteComponent} from "./detalle-solicitante/detalle-solicitante.component";
import {FormularioSolicitanteComponent} from "./formulario-solicitante/formulario-solicitante.component";
import {FormularioOferenteComponent} from "./formulario-oferente/formulario-oferente.component";
import {ListadoSolicitanteComponent} from "./listado-solicitante/listado-solicitante.component";
import {LoginBecasComponent} from "./login-becas/login-becas.component";

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
    path: 'formulario-oferente',
    component : FormularioOferenteComponent
  },

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
