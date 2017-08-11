import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServicioOferente} from "../../services/oferente.servicio";
import {IRegistroOferente} from "../../models/registro.oferente.model";
import {ServicioPais} from "../../services/pais.servicio";
import {ServicioTipoEntidad} from "../../services/tipo.entidad.servicio";

@Component({
  selector: 'app-formulario-oferente',
  templateUrl: './formulario-oferente.component.html',
  styles: []
})
export class FormularioOferenteComponent implements OnInit {

  constructor(private router : Router , private servicioOferente : ServicioOferente, private servicioPais : ServicioPais, private servicioTipoEntidad : ServicioTipoEntidad ) {
  }

  paises;
  tipoEntidades;

  ngOnInit() {
    this.paises = this.servicioPais.obtenerPaises();
    this.tipoEntidades = this.servicioTipoEntidad.obtenerTiposEntidad();

    console.log(this.paises);
  }

  crearOferente(formValues){
    console.log(formValues);
    this.servicioOferente.crearOferente(formValues)
    //.finally(() => this.router.navigate(['/oferente/confirmacion-creacion-oferente'])).subscribe();
    .subscribe(event => { this.router.navigate(['/oferente/confirmacion-creacion-oferente']) })
  }

  valorSeleecionadoPais = 0;
  valorSeleccionadoTipoEntidad = 0;
}
