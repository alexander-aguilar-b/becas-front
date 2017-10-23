import {Component, Inject, OnInit} from "@angular/core";
import {IEtapa, IEtapaConsulta} from "../../models/etapa.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioEtapasOferta} from "../../services/etapas.oferta.servicio";
import {JQ_TOKEN} from "../../comun/jquery.service";
/**
 * Created by edgaguil on 21/10/2017.
 */

@Component({
  selector: 'app-editar-etapa-oferta',
  templateUrl: './editar-etapa-oferta.component.html',
  styles: []
})

//declare var $: any;

export class EditarEtapaOfertaComponent implements OnInit {
  //etapaOferta : IEtapa;
  etapaOferta : IEtapaConsulta;
  idOferta : number;

  datosDisponibles : boolean = false;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter : ActivatedRoute, private router : Router,  private servicioEtapasOferta : ServicioEtapasOferta, @Inject(JQ_TOKEN) private $ : any){
    this.$('#msgActualizacionEtapa').on("close.bs.alert", function(){ this.$('#msgActualizacionEtapa').hide(); return false; } );
  }

  ngOnInit(){
    let idEtapaOferta = this.activatedRouter.snapshot.paramMap.get('idEtapa');
    this.idOferta = Number(this.activatedRouter.snapshot.paramMap.get('idOferta'));
    //this.etapaOferta = this.servicioEtapasOferta.obtenerEtapaOferta(idEtapaOferta);
    this.servicioEtapasOferta.obtenerEtapaOferta(idEtapaOferta).subscribe(etapaOferta =>  {
      this.etapaOferta = etapaOferta;
      console.log(etapaOferta);
      this.datosDisponibles = true;
    });

    this.$('#msgActualizacionEtapa').on("close.bs.alert", function(){ return false; } );
  }


  ocultarMensaje(){
    console.log('adasdasda');
    this.$('#msgActualizacionEtapa').hide();
    return false;
  }

  actualizarEtapaOferta(){
    //console.log(datosEtapaOferta);
    console.log(this.etapaOferta);
    let datosEtapa : IEtapa;
    datosEtapa = {
      id_convocatoria : this.idOferta,
      nombre : this.etapaOferta.nombre,
      descripcion : this.etapaOferta.descripcion,
      fecha_inicio : this.etapaOferta.fechaInicio,
      fecha_fin : this.etapaOferta.fechaFin,
      cantidad_a_seleccionar : this.etapaOferta.cantidadASeleccionar
    };
    this.servicioEtapasOferta.actualizarEtapaOferta(this.etapaOferta.id, datosEtapa).subscribe(event => {
      alert('La etapa se ha actualizado exitosamente');
      this.router.navigate(['/oferta/etapas-oferta-oferente/', this.idOferta]);
    });

    //this.$('#msgActualizacionEtapa').show();
  }

  eliminarFormulario(e, idFormulario){
    e.preventDefault();
    console.log(e);
    if(confirm('Esta seguro de que desea eliminar el formulario?')){
      console.log("Eliminar Formulario:" + idFormulario);
    }
  }

  agregarFormulario(e){
    e.preventDefault();
    this.router.navigate(['/oferta/formulario-etapa', 0 ]);
  }

  editarFormulario(e, idFormulario){
    e.preventDefault();
    this.router.navigate(['/oferta/formulario-etapa', idFormulario]);
  }


}
