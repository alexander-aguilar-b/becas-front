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

            ruta: "c"

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

        ];

        break;


    }

    return menu;

  }

}
