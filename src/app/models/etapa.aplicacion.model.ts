import {IEtapaConsulta} from "./etapa.model";

export interface IEtapaAplicacion {
  etapa: IEtapaConsulta;
  estadoAplicacionEtapa: string;
  fechaAplicacionEtapa?: Date;
  fechaEstadoAplicacionEtapa?: Date;
  resultadosFormularioEtapa?: IResultadoFormularioEtapa[];
}

export interface IResultadoFormularioEtapa{
  id?: number;
  estadoFormulario?: string;
  fechaEnvioFormulario?: Date;
}
