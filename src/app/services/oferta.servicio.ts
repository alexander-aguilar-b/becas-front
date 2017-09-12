import {Injectable} from "@angular/core";
import { Subject, Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {IOferta} from "../models/oferta.model";
import {AutenticacionService} from "./autenticacion.service";

/**
 * Created by edgaguil on 8/08/2017.
 */

@Injectable()
export class ServicioOferta {

  constructor(private http : Http, private configuracion : ConfiguracionServicio, private autenticacionService : AutenticacionService)
  {
  }

  crearOferta(oferta): Observable<IOferta>
  {
    let headers= new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers : headers});
    return this.http.post(this.configuracion.baseUrl +  'offerers/', JSON.stringify(oferta), options).map((response : Response) => {
      return response.json()
    }).catch(this.manejadorError);
  }

  crearOfertaConvocatoria(oferta): Observable<IOferta>
  {
    let token = this.autenticacionService.obtenerCookie('token');
    let headers= new Headers({'Content-Type' : 'application/json','Authorization' : 'Basic ' + token});


    let options = new RequestOptions({ headers : headers});
    return this.http.post(this.configuracion.baseUrl +  'announcements/', JSON.stringify(oferta), options).map((response : Response) => {
      return response.text() ? response.json() : {}
    }).catch(this.manejadorError);

  }

  private manejadorError(error: Response)
  {
    console.log(error);
    return Observable.throw(error.statusText);
  }
}


