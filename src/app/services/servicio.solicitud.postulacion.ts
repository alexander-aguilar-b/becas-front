import {Injectable} from "@angular/core";
import {IConsultaAplicacionOferta} from "../models/aplicacion.oferta.model";
import {ServicioBase} from "./base.servicio";
import {AutenticacionService} from "./autenticacion.service";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";



@Injectable()
export class ServicioSolicitudPostulacion extends ServicioBase {
  constructor(private servicioAutenticacion: AutenticacionService, private http: Http, private configuracion: ConfiguracionServicio) {
    super(servicioAutenticacion);
  }
  //APROBADA, EN_ESPERA, RECHAZADA, EN_REVISION
  cambiarEstadoAplicacion(){

  }
  cambiarEtadoEtapaAplicacion(nuevoEstadoEtapa: string, idAplicacion: number, idEtapa: number){
    console.log(this.obtenerOpcionesPeticion());
    return this.http.put(this.configuracion.baseUrl + 'application/' + idAplicacion +'/phase/' + idEtapa + '/status?value=' + nuevoEstadoEtapa,
      null,
      this.obtenerOpcionesPeticion()).map((response: Response) => {
      console.log('respuesta es:')
      console.log(response);
      return true;
    }).catch(this.manejadorError);
  }

  cambiarEstadoPostulacion(nuevoEstadoEtapa: string, idAplicacion: number) {
    console.log(this.obtenerOpcionesPeticion());
    return this.http.put(this.configuracion.baseUrl + 'application/' + idAplicacion + '/status?value=' + nuevoEstadoEtapa,
      null,
      this.obtenerOpcionesPeticion()).map((response: Response) => {
      console.log('respuesta es:')
      console.log(response);
      return true;
    }).catch(this.manejadorError);

  }



}
