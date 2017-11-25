/**
 * Created by edgaguil on 28/07/2017.
 */
import {IRol} from "./rol.model";
import {IConsultaExperienciaLaboral} from "./experiencia.laboral.model";
import {IPais} from "./pais.model";
import {IGenero} from "./genero.model";
import {ITipoDocumento} from "./tipo.documento.model";
import {IInformacionAcademicaBasica, IInformacionAcademicaBasicaConsulta} from "./informacion.academica.basica.model";
import {IInformacionAcademicaSuperiorConsulta} from "./informacion.academica.superior.model";
import {IInformacionNivelIdiomaConsulta} from "./informacion.nivel.idioma.model";
import {ITipoEntidad} from "./tipo.entidad.model";

export interface IUsuario {
  id: number;
  login: string;
  password: string;
  confirmarPassword: string;
  correoElectronico: string;
}

export class Usuario implements IUsuario {
  id: number;
  login: string;
  password: string;
  confirmarPassword: string;
  correoElectronico: string;
}

export interface IConsultaUsuario {
  id: number;
  username?: string;
  correoElectronico: string;
  contrasena: string;
  nombre?: string;
  estadoSistema?: {
    valor: string;
    fechaEstado: Date;
  };
  rol: IRol;
  infoUsuario: {
    numero_documento?: string;
    apellidos?: string;
    direccion?: string;
    telefono?: string;
    estrato?: string;
    fecha_nacimiento?: Date;
    id_tipo_documento?: ITipoDocumento;
    sexo?: IGenero;
    id_tipo_poblacion?: number;
    pais_nacimiento?: IPais;
    pais_residencia?: IPais;
    experiencia_laboral?: IConsultaExperienciaLaboral[];
    informacion_academica_basica?: IInformacionAcademicaBasicaConsulta[];
    informacion_academica_superior?: IInformacionAcademicaSuperiorConsulta[];
    idioma_solicitante?: IInformacionNivelIdiomaConsulta[];
    // Oferente
    nit?: string;
    descripcion?: string;
    tipoEntidad?: ITipoEntidad;
    pais?: IPais;
  };
}
