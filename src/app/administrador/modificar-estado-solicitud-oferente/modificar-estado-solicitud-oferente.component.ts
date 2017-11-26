import { Component, OnInit } from '@angular/core';
import {ServicioOferente} from "../../services/oferente.servicio";
import {IOferenteConsulta} from "../../models/oferente.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modificar-estado-solicitud-oferente',
  templateUrl: './modificar-estado-solicitud-oferente.component.html',
  styles: []
})
export class ModificarEstadoSolicitudOferenteComponent implements OnInit {
  oferentePendienteActivacion: IOferenteConsulta;
  datosOferenteDisponibles: boolean;
  activacionOferenteOk: boolean;
  rechazoOferenteOk: boolean;

  constructor(private servicioOferente: ServicioOferente, private routerActivado: ActivatedRoute) { }

  ngOnInit() {
    console.log('Init - ModificarEstadoSolicitudOferenteComponent');
    this.datosOferenteDisponibles = false;
    this.activacionOferenteOk = false;
    this.rechazoOferenteOk = false;
    let idOferente: number;
    idOferente = Number.parseInt(this.routerActivado.snapshot.paramMap.get('idOferente'));
    this.servicioOferente.obtenerOferente(idOferente).subscribe(oferentePendienteActivacion => {
      this.oferentePendienteActivacion = oferentePendienteActivacion;
      this.datosOferenteDisponibles = true;
      console.log(oferentePendienteActivacion);
    });
  }

  aceptarSolicitud() {
    console.log('aceptarSolicitud');
    this.activacionOferenteOk = true;
  }

  rechazarSolicitud() {
    console.log('rechazarSolicitud');
    this.rechazoOferenteOk = true;
  }

  // consultarDetalleOferente(idOferente) {
  //   console.log(idOferente);
  // }


}
