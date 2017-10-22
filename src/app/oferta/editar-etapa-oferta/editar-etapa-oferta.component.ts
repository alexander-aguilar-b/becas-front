import {Component, Inject, OnInit} from "@angular/core";
import {IEtapa} from "../../models/etapa.model";
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
  etapaOferta : IEtapa;
  idOferta : string;

  /** Constructor- Se inyectan las dependencias requeridas*/
  constructor(private activatedRouter : ActivatedRoute, private router : Router,  private servicioEtapasOferta : ServicioEtapasOferta, @Inject(JQ_TOKEN) private $ : any){
    this.$('#msgActualizacionEtapa').on("close.bs.alert", function(){ this.$('#msgActualizacionEtapa').hide(); return false; } );
  }



  ngOnInit(){
    console.log("onInit");
    let idEtapaOferta = this.activatedRouter.snapshot.paramMap.get('idEtapa');
    this.idOferta = this.activatedRouter.snapshot.paramMap.get('idOferta');
    this.etapaOferta = this.servicioEtapasOferta.obtenerEtapaOferta(idEtapaOferta);

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
    this.$('#msgActualizacionEtapa').show();
    //this.$('#simple-modal').modal({});
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
