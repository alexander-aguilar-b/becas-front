import {IEstadoAplicacion} from "./estado.aplicacion.model";
import {IConsultaUsuario} from "./usuario.model";
import {IOfertaConsulta} from "./oferta.model";
import {IEtapaAplicacion} from "./etapa.aplicacion.model";

export interface IAplicacionOferta {
  id: number;
  idSolicitante: number;
  idConvocatoria: number;
  fechaAplicacion: Date;
  estadoAplicacion: string;
  fechaEstadoAplicacion: Date;
}

export interface IConsultaAplicacionOferta {
  id: number;
  usuario: IConsultaUsuario;
  convocatoria: IOfertaConsulta;
  fechaAplicacion: Date;
  estadoAplicacion: string;
  fechaEstadoAplicacion: Date;
  etapasAplicacion: IEtapaAplicacion[];
}
