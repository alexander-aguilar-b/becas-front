import { Component, OnInit } from '@angular/core';
import {ServicioOferente} from "../../services/oferente.servicio";
import {IOferenteConsulta} from "../../models/oferente.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-consultar-solicitudes-oferentes',
  templateUrl: './consultar-solicitudes-oferentes.component.html',
  styles: []
})
export class ConsultarSolicitudesOferentesComponent implements OnInit {
  oferentesPendientesActivacion: IOferenteConsulta[];

  constructor(private servicioOferente: ServicioOferente, private router: Router) { }

  ngOnInit() {
    this.servicioOferente.obtenerOferentesPendientesActivacion().subscribe(oferentesPendientesActivacion => {
      this.oferentesPendientesActivacion = oferentesPendientesActivacion;
      console.log(oferentesPendientesActivacion);
    });
  }

  consultarDetalleOferente(idOferente) {
    console.log(idOferente);
    this.router.navigate(['/administrador/modificar-estado-solicitud-oferente', idOferente]);
  }
}
