import {Component, OnInit} from '@angular/core';
import {ServicioMenu} from "./services/menu.servicio";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app1111';
  menus;

  constructor(private servicioMenu: ServicioMenu) {
  }

  ngOnInit() {
    this.menus = this.servicioMenu.obtenerMenu('Oferente');
  }
}
