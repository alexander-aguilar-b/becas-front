import {Injectable} from "@angular/core";
import {IOferente} from "../models/oferente.model";
import { Subject, Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {IRegistroOferente} from "../models/registro.oferente.model";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {AutenticacionService} from "./autenticacion.service";
/**
 * Created by edgaguil on 8/08/2017.
 */

@Injectable()
export class ServicioOferente {

  constructor(private http: Http, private configuracion: ConfiguracionServicio, private autenticacionService: AutenticacionService)
  {
  }

  crearOferente(oferente: IRegistroOferente): Observable<IOferente>
  {
    let token = this.autenticacionService.obtenerCookie('token');
    let headers= new Headers({'Content-Type' : 'application/json', 'Authorization' : 'Basic ' + token});
    let options = new RequestOptions({ headers : headers});
    return this.http.post(this.configuracion.baseUrl +  'offerers/', JSON.stringify(oferente), options).map((response : Response) => {
      return response.json()
    }).catch(this.manejadorError);
  }

  obtenerOferente(id: number): Observable<IOferente> {
    return this.http.get(this.configuracion.baseUrl + 'offerers/' + id).map((response: Response) => {
      return response.text() ? <IOferente>response.json() : {}
    }).catch(this.manejadorError);
  }

  obtenerOferentesInactivos(): IOferente[] {
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

  /*
  obtenerSolicitantes(): Observable<ISolicitante[]> {
     return this.http.get(this.configuracion.baseUrl +  "applicant/").map((response : Response) => {
       return <ISolicitante[]> response.json();
     }).catch(this.manejadorError);
   };
   */

  private manejadorError(error: Response) {
    console.log(error);
    return Observable.throw(error.statusText);
  }
}
