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

            nombre_menu: "Ver oferta",

            ruta: "oferente/creacion-oferta"

          },

        ];

        break;

      case "USUARIO":

        menu = [
          {

            nombre_menu: "Ver oferta",

            ruta: "oferente/creacion-oferta"

          },

        ];

        break;

      case "ADMIN":

        menu = [

          {

            ruta: 'administrador/formulario-administrador',

            nombre_menu: "Crear administrador"

          },
          {

            ruta: 'oferente/formulario-oferente',

            nombre_menu: "Crear oferente"

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

            nombre_menu: "Ver oferta",

            ruta: "oferente/creacion-oferta"

          },

        ];

        break;


    }

    return menu;

  }

}
