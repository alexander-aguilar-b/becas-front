import {Injectable} from "@angular/core";
@Injectable()
export class ServicioMenu {

  obtenerMenu(perfil:string): any[] {
    let menu = [];

    switch (perfil){
      case "Oferente":
        menu = [
          {
            nombre_menu: "Crear oferta",
            ruta: "oferente/creacion-oferta"
          },
          {
            ruta: 'administrador/formulario-administrador',
            nombre_menu : "Crear administrador"
          },
        ];
        break;
      case "Administrador":
        menu = [
          {
            ruta: 'administrador/formulario-administrador',
            nombre_menu : "Crear administrador"
          },
        ];
        break;
    }
    return menu;
  }
}

