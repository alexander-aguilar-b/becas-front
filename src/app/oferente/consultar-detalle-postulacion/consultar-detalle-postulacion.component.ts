import {Component, Input, OnInit} from '@angular/core';
import {IConsultaUsuario} from "../../models/usuario.model";
import {ServicioDatosAplicacionOferta} from "../../services/servicio.datos.aplicacion";
import {IConsultaAplicacionOferta} from "../../models/aplicacion.oferta.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioAplicacionOferta} from "../../services/servicio.aplicacion.oferta";

@Component({
  selector: 'app-consultar-detalle-postulacion',
  templateUrl: './consultar-detalle-postulacion.component.html',
  styles: []
})
export class ConsultarDetallePostulacionComponent implements OnInit {

  aplicacionOferta: IConsultaAplicacionOferta;
  idAplicacion: number;

  constructor(private servicioDatosAplicacionOferta: ServicioDatosAplicacionOferta,
              private servicioAplicacionOferta: ServicioAplicacionOferta,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
  }
  ngOnInit() {
    console.log('Dentro del Componete');
    console.log('Datos Aplicacion');
    //console.log(this.servicioDatosAplicacionOferta.datosAplicacionOferta);
    //this.aplicacionOferta = this.servicioDatosAplicacionOferta.datosAplicacionOferta;

    this.idAplicacion = Number(this.activatedRouter.snapshot.paramMap.get('idAplicacionOferta'));
    this.servicioAplicacionOferta.obtenerAplicacion(this.idAplicacion).subscribe(respuesta => {
      this.aplicacionOferta = respuesta;
      console.log(this.aplicacionOferta);
    });
  }

  consultarDetalleFormularioAplicacion(idFormulario: number, idAplicacionOferta: number) {
    this.router.navigate(['/oferente/consultar-formulario-diligenciado', idFormulario, idAplicacionOferta]);
  }
}
