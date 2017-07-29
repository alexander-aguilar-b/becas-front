import { Component, OnInit } from '@angular/core';
import {SolicitanteService} from "../services/solicitante.service";
import {ISolicitante} from "../models/solicitante.model";

@Component({
  selector: 'app-listado-solicitante',
  templateUrl: './listado-solicitante.component.html',
  styles: []
})
export class ListadoSolicitanteComponent implements OnInit {
  solicitantes : ISolicitante[];

  constructor(private solicitateService : SolicitanteService  ) { }

  ngOnInit() {
    this.solicitantes  = this.solicitateService.obtenerListadoSolicitantes();
  }

}
