import {Component, Inject, OnInit} from "@angular/core";
import {IEtapa, IEtapaConsulta} from "../../models/etapa.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioEtapasOferta} from "../../services/etapas.oferta.servicio";
import {JQ_TOKEN} from "../../comun/jquery.service";
import {IFormularioConsulta} from "../../models/formulario.model";
import {ServicioFormularioEtapa} from "../../services/formulario.etapa.servicio";
import {AutenticacionService} from "../../services/autenticacion.service";
/**
 * Created by edgaguil on 21/10/2017.
 */

@Component({
  selector: 'app-detalle-etapa-solicitante',
  templateUrl: './detalle-etapa-solicitante.component.html',
  styles: []
})

export class DetalleEtapaOfertaSolicitanteComponent implements OnInit {
  etapaOferta: IEtapaConsulta;
  idOferta: number;
  formulariosEtapa: IFormularioConsulta[];
  idEtapaOferta: number;

  datosEtapaDisponibles: boolean = false;
  datosFormulariosDisponibles: boolean = false;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter: ActivatedRoute, private servicioAutenticacion: AutenticacionService, private router: Router, private servicioEtapasOferta: ServicioEtapasOferta, private servicioFormularioEtapa: ServicioFormularioEtapa) {
  }

  ngOnInit() {
    this.idEtapaOferta = Number(this.activatedRouter.snapshot.paramMap.get('idEtapa'));
    this.idOferta = Number(this.activatedRouter.snapshot.paramMap.get('idOferta'));
    this.servicioEtapasOferta.obtenerEtapaOferta(this.idEtapaOferta, this.idOferta).subscribe(etapaOferta =>  {
      this.etapaOferta = etapaOferta;
      console.log(etapaOferta);
      this.datosEtapaDisponibles = true;
    });
    this.cargarFormulariosEtapa(this.idEtapaOferta);
  }

  cargarFormulariosEtapa(idEtapaOferta) {
    this.servicioFormularioEtapa.obtenerFormulariosEtapa(idEtapaOferta).subscribe(formulariosEtapa => {
      this.formulariosEtapa = formulariosEtapa;
      this.datosFormulariosDisponibles = true;
      console.log(formulariosEtapa);
    });
  }

  diligenciarFormulario(idformulario: number) {
    //path: 'oferta/formulario-etapa-solicitante/:idFormulario',
    this.router.navigate(['/oferta/formulario-etapa-solicitante', idformulario]);
  }
}
