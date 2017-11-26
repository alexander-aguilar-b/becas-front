/**
 * Created by edgaguil on 18/10/2017.
 */

import {Component, OnInit} from "@angular/core";
import {ServicioOferta} from "../../services/oferta.servicio";
import {IOferta, IOfertaConsulta} from "../../models/oferta.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AutenticacionService} from "../../services/autenticacion.service";
import {ServicioAplicacionOferta} from "../../services/servicio.aplicacion.oferta";
import {ISolicitudAplicacion} from "../../models/solicitud.aplicacion.model";


@Component({
  selector: 'app-detalle-oferta-solicitante',
  templateUrl: './detalle-oferta-solicitante.component.html',
  styles: []
})

export class DetalleOfertaSolicitanteComponent implements OnInit {

  //detalleOferta : IOferta;
  detalleOferta: IOfertaConsulta;
  aplicacionOfertaRealizada: boolean;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter: ActivatedRoute, private router: Router, private servicioOferta: ServicioOferta, private autenticacionService: AutenticacionService, private servicioAplicacionOferta: ServicioAplicacionOferta) {
  }

  /***Metodo de Inicialización del componente */
  ngOnInit() {
    this.autenticacionService.validarAutorizacion('oferta/consulta-oferta');
    this.aplicacionOfertaRealizada = false;
    let idOferta: string;
    idOferta = this.activatedRouter.snapshot.paramMap.get('id');
    //this.detalleOferta = this.servicioOferta.consultarOferta(idOferta);
    this.servicioOferta.consultarOferta(idOferta).subscribe(detalleOferta => {
      this.detalleOferta = detalleOferta;
      console.log(detalleOferta);
    });

    console.log(this.detalleOferta);
  }

  aplicarOferta() {
    if (confirm('Esta seguro de que ha leido cuidadosamente la información de la convocatoria y desea aplicar a la misma ?')) {
      const idSolicitante = Number.parseInt(this.autenticacionService.obtenerCookie('idUsuario'));
      const solicitudAplicacion: ISolicitudAplicacion = {
        idConvocatoria : this.detalleOferta.id,
        idSolicitante : idSolicitante
      };
      this.aplicacionOfertaRealizada = true;
      alert('La solicitud de aplicación a la convocatoria "' + this.detalleOferta.nombre.toUpperCase() + '" ha sido registrada correctamente. ' +
        'Por favor revise la información que debe diligenciar para cada una de las etapas');
      /*
      this.servicioAplicacionOferta.aplicarOferta(solicitudAplicacion).subscribe(event => {
        this.aplicacionOfertaRealizada = true;
        alert('La etapa solicitud de aplicación ha sido registrada correctamente. ' +
          'Por favor revise la información que debe diligenciar para cada una de las etapas');
      });
      */
    }
  }

  consultarEtapasOferta(idOferta) {
    this.router.navigate(['/oferta/etapas-oferta-solicitante', idOferta]);
  }

}
