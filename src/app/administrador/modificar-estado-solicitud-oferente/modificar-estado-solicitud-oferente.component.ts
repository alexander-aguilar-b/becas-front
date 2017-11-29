import { Component, OnInit } from '@angular/core';
import {ServicioOferente} from "../../services/oferente.servicio";
import {IOferenteConsulta} from "../../models/oferente.model";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private servicioOferente: ServicioOferente,
              private routerActivado: ActivatedRoute,
              private router: Router) { }

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
    if (confirm('¿Esta seguro de que desea realizar la activación de la solicitud de creación de cuenta de oferente?')){
      this.servicioOferente.activarCuentaOferente(this.oferentePendienteActivacion.id).subscribe(resultado => {
        //this.activacionOferenteOk = resultado;
        alert('La solicitud de activación del oferente se ha realizado exitosamente.');
        this.router.navigate(['/administrador/consultar-solicitudes-oferentes']);
      });
    }

  }

  rechazarSolicitud() {
    console.log('rechazarSolicitud');
    if (confirm('¿Esta seguro de que desea rechazar la solicitud de creación de cuenta de oferente?')){
      this.servicioOferente.rechazarCuentaOferente(this.oferentePendienteActivacion.id).subscribe(resultado => {
        //this.activacionOferenteOk = resultado;
        alert('La solicitud de activación del oferente ha sido rechazada.')
        this.router.navigate(['/administrador/consultar-solicitudes-oferentes']);
      });
    }

    //this.rechazoOferenteOk = true;
  }

  // consultarDetalleOferente(idOferente) {
  //   console.log(idOferente);
  // }


}
