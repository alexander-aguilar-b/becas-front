import {Component, Input, OnInit} from '@angular/core';
import {IConsultaUsuario} from "../../models/usuario.model";
import {AutenticacionService} from "../../services/autenticacion.service";

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida-component.html',
  styles: []
})
export class BienvenidaComponent implements OnInit {
  contenido: string;
  perfil : any = {
    solicitante: 'SOLICITANTE',
    admin: 'ADMIN',
    oferente: 'OFERENTE'
  };


  constructor(private servicioAutenticacion: AutenticacionService) {
  }
  ngOnInit() {
    let perfil = this.servicioAutenticacion.obtenerCookie('perfil');

    if(perfil == this.perfil.solicitante){
      this.contenido = 'En el portal Centralizado de Becas podras realizar búsquedas de las distintas ofertas (becas, pasantias, créditos condonables) dentro y fuera del pais, las cuales han sido registradas por distinos tipos de entidades oferentes.';
    }
    if (perfil == this.perfil.oferente){
      this.contenido = 'Señor oferente, el portal Centralizado de Becas es una herramienta que le permitirá realizar el registro y seguimiento de ofertas (becas, pasantias, créditos condonables) con las cuales quiera beneficiar a la población Colombiana.';
    }
    if (perfil == this.perfil.admin){
      this.contenido = 'Señor Administrador, el portal Centralizado de Becas es una herramienta que le permitirá realizar la administración de los distintos tipos de usuarios soportados por el mismo';
    }
  }
}


