import {Injectable} from "@angular/core";
import {IPais} from "../models/pais.model";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {Observable} from "rxjs/Observable";
import {inherits} from "util";
import {ServicioBase} from "./base.servicio";
import {AutenticacionService} from "./autenticacion.service";
import {IConsultaUsuario} from "../models/usuario.model";

/**
 * Created by edgaguil on 9/08/2017.
 */
@Injectable()
export class ServicioUsuario extends ServicioBase {
  constructor(private servicioAutenticacion: AutenticacionService) {
    super(servicioAutenticacion);
  }
  obtenerUsuario(nombreUuario: string): IConsultaUsuario {
    console.log('Invocacion metodo');
    let usuario: IConsultaUsuario;
    usuario = {
      id: 1,
      nombre : 'nombre',
      correoElectronico : 'correo@hotmail.com',
      username : 'nombreUsuario',
      infoUsuario : {}
    };
    return usuario;
  }

  eliminarUsuario(idUsuario: number): boolean {
    return true;
  }

  /*
  obtenerPaises(): Observable<IPais[]> {
    return this.http.get(this.configuracion.baseUrl +  "general/countries/").map((response : Response) => {
      return <IPais[]> response.json();
    }).catch(this.manejadorError);
  };
*/
}
