import {IEstadoAplicacion} from "./estado.aplicacion.model";

export interface IAplicacionOferta {
  id: number;
  idSolicitante: number;
  idConvocatoria: number;
  fechaAplicacion: Date;
  estadoAplicacion: string;
  fechaEstadoAplicacion: Date;
}
