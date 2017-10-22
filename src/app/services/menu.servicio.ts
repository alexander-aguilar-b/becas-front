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
            nombre_menu: "Crear cuenta",
            ruta: "formulario-solicitante"
          },
          {
            nombre_menu: "Consultar Oferta",
            ruta: "oferta/consultar-oferta-solicitante"
          },
          {
            ruta: 'oferta/consulta-oferta-oferente',
            nombre_menu: "Consultar Ofertas oferente"
          },
        ];

        break;

      case "ADMIN":
        menu = [

          {
            ruta: 'administrador/formulario-administrador',
            nombre_menu: "Crear administrador"
          },
        ];

        break;

      case "OFERENTE":
        menu = [
          {
            nombre_menu: "Crear oferta",
            ruta: "oferente/creacion-oferta"
          },
          {
            ruta: 'oferente/formulario-oferente',
            nombre_menu: "Solicitar cuenta"
          },
          {
            ruta: 'oferta/consulta-oferta-oferente',
            nombre_menu: "Consultar Ofertas"
          },
        ];

        break;
    }

    return menu;

  }

}
