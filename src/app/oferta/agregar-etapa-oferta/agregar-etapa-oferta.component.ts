import {Component, Inject, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioEtapasOferta} from "../../services/etapas.oferta.servicio";
import {JQ_TOKEN} from "../../comun/jquery.service";
import {IEtapa} from "../../models/etapa.model";
/**
 * Created by edgaguil on 22/10/2017.
 */

@Component({
  selector: 'app-agregar-etapa-oferta',
  templateUrl: './agregar-etapa-oferta.component.html',
  styles: []
})

export class AgregarEtapaOfertaComponent implements OnInit{

  idOferta : number;
  etapaOferta : IEtapa;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter : ActivatedRoute, private router : Router,  private servicioEtapasOferta : ServicioEtapasOferta, @Inject(JQ_TOKEN) private $ : any){
    this.$('#msgActualizacionEtapa').on("close.bs.alert", function(){ this.$('#msgActualizacionEtapa').hide(); return false; } );
  }

  ngOnInit(){
    this.idOferta = Number(this.activatedRouter.snapshot.paramMap.get('idOferta'));
  }


  agregarEtapaOferta(datosEtapaOferta){
    console.log(datosEtapaOferta);
    this.etapaOferta = {
      id_convocatoria : this.idOferta,
      nombre : datosEtapaOferta.nombre,
      descripcion : datosEtapaOferta.descripcion,
      fecha_inicio : datosEtapaOferta.fechaInicio,
      fecha_fin : datosEtapaOferta.fechaFin,
      cantidad_a_seleccionar : datosEtapaOferta.cantidadASeleccionar
    };

    this.servicioEtapasOferta.agregarEtapaOferta(this.etapaOferta)
      .subscribe(event => {
        alert('La etapa se ha agregado exitosamente a la oferta');
        this.router.navigate(['/oferta/etapas-oferta-oferente/', this.idOferta]);
      });

  }
}
