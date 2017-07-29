import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetalleSolicitanteComponent} from "./detalle-solicitante/detalle-solicitante.component";
import {FormularioSolicitanteComponent} from "./formulario-solicitante/formulario-solicitante.component";
import {ListadoSolicitanteComponent} from "./listado-solicitante/listado-solicitante.component";

const routes: Routes = [
  // {
  //   path: '',
  //   component : ListadoSolicitanteComponent
  // },
  {
    path: 'listado-solicitante',
    component : ListadoSolicitanteComponent
  },
  {
    path: 'formulario-solicitante',
    component : FormularioSolicitanteComponent
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
