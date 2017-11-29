/**
 * Created by edgaguil on 21/10/2017.
 */
import {Component} from "@angular/core";
//import {IOferta, IOfertaConsulta} from "../../models/oferta.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioOferta} from "../../services/oferta.servicio";
import {AutenticacionService} from "../../services/autenticacion.service";
import {IOfertaConsulta} from "../../models/oferta.model";
import {IErrorServicio} from "../../models/error.servicio.model";
import {CodigosErrorServicio} from "../../constantes/codigos.error.servicio";

@Component({
  selector: 'app-detalle-oferta-oferente',
  templateUrl: './detalle-oferta-oferente.component.html',
  styles: []
})


export class DetalleOfertaOferenteComponent {

  //detalleOferta: IOferta;
  detalleOferta: IOfertaConsulta;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter: ActivatedRoute, private router: Router, private servicioOferta: ServicioOferta, private servicioAutenticacion : AutenticacionService) {
  }

  /***Metodo de Inicialización del componente */
  ngOnInit() {
    this.servicioAutenticacion.validarAutorizacion('oferta/consulta-oferta-oferente');
    let idOferta: string;
    idOferta = this.activatedRouter.snapshot.paramMap.get('id');
    //this.detalleOferta = this.servicioOferta.consultarOferta(idOferta);
    this.servicioOferta.consultarOferta(idOferta).subscribe(detalleOferta => {
      this.detalleOferta = detalleOferta;
      console.log(detalleOferta);
    });
  }

  eliminarOferta() {
    const msgEliminar = 'Esta seguro de que desea eliminar la información de la oferta? Esto borrará la información de las etapas y formularios asociados';
    if (confirm(msgEliminar)) {
      this.servicioOferta.eliminarOferta(this.detalleOferta.id).subscribe(respuesta => {
        if (respuesta) {
          alert('La información de la oferta (etapas y formularios) ha sido borrada del sistema');
          this.router.navigate(['/oferta/consulta-oferta-oferente']);
        }
      },
        error => {
          let errorServicio: IErrorServicio =<IErrorServicio><any>error.json();
          if(errorServicio.code == CodigosErrorServicio.EXISTE_APLICACION_A_OFERTA) {
            alert('No es posible eliminar la oferta especificada, debido a que cuenta con aplicaciones en curso');
          }
          });
    }
  }

  consultarEtapasOferta(idOferta) {
    this.router.navigate(['/oferta/etapas-oferta-oferente', idOferta]);
  }
}
