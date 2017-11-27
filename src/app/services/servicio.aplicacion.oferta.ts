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
import {IAplicacionOferta, IConsultaAplicacionOferta} from "../models/aplicacion.oferta.model";
import {IRespuestaFormulario} from "../models/respuesta.formulario.model";

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

  obtenerAplicaciones(idOferta: number): Observable<IConsultaAplicacionOferta[]>  {
    return this.http.get(this.configuracion.baseUrl +  'application?id_oferta=' + idOferta,
      this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <IConsultaAplicacionOferta[]> response.json();
    }).catch(this.manejadorError);
  }

  obtenerAplicacion(idAplicacion: number): Observable<IConsultaAplicacionOferta>  {
    return this.http.get(this.configuracion.baseUrl +  'application/' + idAplicacion,
      this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <IConsultaAplicacionOferta> response.json();
    }).catch(this.manejadorError);
  }

  obtenerFormularioDiligenciado(idFormulario: number, idAplicacionOferta: number): Observable<IRespuestaFormulario> {
    return this.http.get(this.configuracion.baseUrl +  'applicationform/' + idFormulario + '/response/application/' + idAplicacionOferta,
      this.obtenerOpcionesPeticion()).map((response: Response) => {
      return <IRespuestaFormulario> response.json();
    }).catch(this.manejadorError);
  }
}
