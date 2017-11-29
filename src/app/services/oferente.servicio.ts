import {Injectable} from "@angular/core";
import {IOferente, IOferenteConsulta} from "../models/oferente.model";
import { Subject, Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {IRegistroOferente} from "../models/registro.oferente.model";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {AutenticacionService} from "./autenticacion.service";
import {ServicioBase} from "./base.servicio";
/**
 * Created by edgaguil on 8/08/2017.
 */

@Injectable()
export class ServicioOferente extends ServicioBase {

  constructor(private http: Http, private configuracion: ConfiguracionServicio, autenticacionService: AutenticacionService) {
    super(autenticacionService);
  }

  crearOferente(oferente: IRegistroOferente): Observable<IOferente> {
    console.log('Oferente a crear');
    console.log(JSON.stringify(oferente));
    return this.http.post(this.configuracion.baseUrl +  'offerers/', JSON.stringify(oferente),   this.obtenerOpcionesPeticion()).map((response: Response) => {
      return response.json();
    }).catch(this.manejadorError);
  }

  // obtenerOferente(id: number): Observable<IOferente> {
  //   return this.http.get(this.configuracion.baseUrl + 'offerers/' + id).map((response: Response) => {
  //     return response.text() ? <IOferente>response.json() : {};
  //   }).catch(this.manejadorError);
  // }

  obtenerOferente(id: number): Observable<IOferenteConsulta> {
    console.log('obtenerOferente');
    return this.http.get(this.configuracion.baseUrl + 'offerers/offerer?id=' + id, this.obtenerOpcionesPeticion()).map((response: Response) => {
      console.log(<IOferenteConsulta>response.json());
      return response.text() ? <IOferenteConsulta>response.json() : {};

    }).catch(this.manejadorError);
  }

  activarCuentaOferente(idOferente: number): Observable<boolean> {
    console.log(this.obtenerOpcionesPeticion());
    return this.http.put(this.configuracion.baseUrl + 'offerers/activate/' + idOferente, null, this.obtenerOpcionesPeticion()).map((response: Response) => {
      return true;
    }).catch(this.manejadorError);
  }

  obtenerOferentesPendientesActivacion(): Observable<IOferenteConsulta[]> {

    return this.http.get(this.configuracion.baseUrl + 'offerers/requests', this.obtenerOpcionesPeticion()).map((response: Response) => {
      console.log(this.obtenerOpcionesPeticion());
      return response.text() ? <IOferenteConsulta[]>response.json() : {};
    }).catch(this.manejadorError);
  }

  rechazarCuentaOferente(idOferente: number): Observable<boolean> {
    console.log(this.obtenerOpcionesPeticion());
    return this.http.put(this.configuracion.baseUrl + 'offerers/reject/' + idOferente,
      null, this.obtenerOpcionesPeticion()).map((response: Response) => {
      return true;
    }).catch(this.manejadorError);
  }

  /*
  obtenerOferentesInactivos1(): IOferente[] {
    let oferentes: IOferente[] = [];
    let oferente1: IOferente;
    let oferente2: IOferente;
    let oferente3: IOferente;

    oferente1 = {
      id: 1,
      contrasena: '12345',
      correoElectronico: 'correo1@hotmail.com',
      nombre: 'nombre1',
      descripcion: 'descripcion1',
      nit: '123456',
      idEstadoSistema : { id : 1, descripcion: 'INACTIVO'},
      rol : { nombre: 'Oferente', id: 1, descripcion: 'Role1'},
      infoUsuario : {
        tipoEntidad : { id: 1, nombre: 'tipoEntidad1', descripcion: 'Descripcion Tipo Entidad'},
        pais: { id_pais: 1, nombre: 'Colombia', nacionalidad: 'Colombiana', abreviatura: 'COL'},
        fechaCreacion: new Date(),
        descripcion: 'descripcion1',
        nit: '123456'
      },
      estadoSistema : { id : 1, descripcion: 'INACTIVO'},
      tipoEntidad : { id: 1, nombre: 'tipoEntidad1', descripcion: 'Descripcion Tipo Entidad'},

    };


    oferente2 = {
      id: 2,
      contrasena: '12345',
      correoElectronico: 'correo2@hotmail.com',
      nombre: 'nombre2',
      descripcion: 'descripcion1',
      nit: '123456',
      idEstadoSistema : { id : 1, descripcion: 'INACTIVO'},
      rol : { nombre: 'Oferente', id: 1, descripcion: 'Role1'},
      infoUsuario : {
        tipoEntidad : { id: 1, nombre: 'tipoEntidad1', descripcion: 'Descripcion Tipo Entidad'},
        pais: { id_pais: 1, nombre: 'Colombia', nacionalidad: 'Colombiana', abreviatura: 'COL'},
        fechaCreacion: new Date(),
        descripcion: 'descripcion1',
        nit: '123456'
      },
      estadoSistema : { id : 1, descripcion: 'INACTIVO'},
      tipoEntidad : { id: 1, nombre: 'tipoEntidad1', descripcion: 'Descripcion Tipo Entidad'},

    };

    oferente3 = {
      id: 3,
      contrasena: '12345',
      correoElectronico: 'correo3@hotmail.com',
      nombre: 'nombre3',
      descripcion: 'descripcion1',
      nit: '123456',
      idEstadoSistema : { id : 1, descripcion: 'INACTIVO'},
      rol : { nombre: 'Oferente', id: 1, descripcion: 'Role1'},
      infoUsuario : {
        tipoEntidad : { id: 1, nombre: 'tipoEntidad1', descripcion: 'Descripcion Tipo Entidad'},
        pais: { id_pais: 1, nombre: 'Colombia', nacionalidad: 'Colombiana', abreviatura: 'COL'},
        fechaCreacion: new Date(),
        descripcion: 'descripcion1',
        nit: '123456'
      },
      estadoSistema : { id : 1, descripcion: 'INACTIVO'},
      tipoEntidad : { id: 1, nombre: 'tipoEntidad1', descripcion: 'Descripcion Tipo Entidad'},
    };


    oferentes.push(oferente1);
    oferentes.push(oferente2);
    oferentes.push(oferente3);
    return  oferentes;

  };
  */

  /*
  obtenerSolicitantes(): Observable<ISolicitante[]> {
     return this.http.get(this.configuracion.baseUrl +  "applicant/").map((response : Response) => {
       return <ISolicitante[]> response.json();
     }).catch(this.manejadorError);
   };
   */
}
