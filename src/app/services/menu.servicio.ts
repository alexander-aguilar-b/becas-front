import { Injectable } from "@angular/core";
import { IMenu } from "../models/menu.model";
@Injectable()
export class ServicioMenu {

  obtenerMenu(perfil: string): IMenu[] {
    let menu = [];

    switch (perfil) {
      case "SOLICITANTE":
        menu = [
          {
            nombre_menu: "Crear oferta",
            ruta: "oferente/creacion-oferta"
          },
          {
            ruta: 'administrador/formulario-administrador',
            nombre_menu: "Crear administrador"
          },
        ];
        break;
      case "Administrador":
        menu = [
          {
            nombre_menu: "Crear oferta",
            ruta: "oferente/creacion-oferta"
          },
        ];
        break;
      case "ADMIN":
        menu = [
          {
            nombre_menu: "Crear oferta",
            ruta: "oferente/creacion-oferta"
          },
          {
            ruta: 'administrador/formulario-administrador',
            nombre_menu: "Crear administrador"
          },
        ];
        break;
    }
    return menu;
  }
}
