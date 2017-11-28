import {Injectable} from "@angular/core";
import {IConsultaAplicacionOferta} from "../models/aplicacion.oferta.model";
import {IEtapaCambioEstado} from "../models/etapa.model";



@Injectable()
export class ServicioDatosAplicacionOferta {
  datosAplicacionOferta: IConsultaAplicacionOferta;
  datosCambioEstadoEtapa: IEtapaCambioEstado;
}
