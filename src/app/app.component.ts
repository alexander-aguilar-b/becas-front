import {Component, OnInit} from '@angular/core';
import {ServicioMenu} from "./services/menu.servicio";
import {AutenticacionService} from "./services/autenticacion.service";
import {CookieService} from "angular2-cookie/services";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app1111';
  menus;
  perfil : string;

  constructor(private servicioMenu: ServicioMenu, private autenticacionService: AutenticacionService,private cookie :CookieService) {
  }

  ngOnInit() {
    let perfil = this.cookie.get('perfil');
    this.menus = this.servicioMenu.obtenerMenu(perfil);
    console.log(perfil);
  }
}
