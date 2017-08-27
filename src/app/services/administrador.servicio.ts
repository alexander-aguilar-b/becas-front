import {Injectable} from '@angular/core';
import { Subject, Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {ConfiguracionServicio} from './configuracion.servicio';
import {IAdministrador} from '../models/administrador.model';

/**
 * Created by edgaguil on 8/08/2017.
 */

@Injectable()
export class ServicioAdministrador {

  constructor(private http: Http, private configuracion: ConfiguracionServicio)
  {

  }

  crearAdministrador(administrador) : Observable<IAdministrador>
  {
    console.log(administrador);
    let headers= new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers : headers});
    return this.http.post(this.configuracion.baseUrl +  'icetex/users/', JSON.stringify(administrador), options).map((response : Response) => {
      return response.json()
    }).catch(this.manejadorError);
  }


  private manejadorError(error : Response)
  {
    console.log(error);
    return Observable.throw(error.statusText);
  }
}
