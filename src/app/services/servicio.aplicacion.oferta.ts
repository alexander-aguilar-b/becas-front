import {Injectable} from "@angular/core";
import {IPais} from "../models/pais.model";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {Observable} from "rxjs/Observable";
import {inherits} from "util";
import {ServicioBase} from "./base.servicio";
import {AutenticacionService} from "./autenticacion.service";
import {IConsultaUsuario} from "../models/usuario.model";
import {ISolicitudAplicacion} from "../models/solicitud.aplicacion.model";
import {IAplicacionOferta} from "../models/aplicacion.oferta.model";

/**
 * Created by edgaguil on 9/08/2017.
 */
@Injectable()
export class ServicioAplicacionOferta extends ServicioBase {
  constructor(private servicioAutenticacion: AutenticacionService, private http: Http, private configuracion: ConfiguracionServicio) {
    super(servicioAutenticacion);
  }

  aplicarOferta(solicitudAplicacion: ISolicitudAplicacion): Observable<IAplicacionOferta>  {
    return this.http.post(this.configuracion.baseUrl +  'application/', JSON.stringify(solicitudAplicacion),
      this.obtenerOpcionesPeticion()).map((response: Response) => {
      console.log(<IAplicacionOferta> response.json());
      return <IAplicacionOferta> response.json();
    }).catch(this.manejadorError);
  }
}
