import {Injectable} from "@angular/core";
import {IOferente} from "../models/oferente.model";
import { Subject, Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {IRegistroOferente} from "../models/registro.oferente.model";

/**
 * Created by edgaguil on 8/08/2017.
 */

@Injectable()
export class ServicioOferente {

  constructor(private http : Http, private configuracion : ConfiguracionServicio)
  {
  }

  crearOferente(oferente : IRegistroOferente) : Observable<IOferente>
  {
    let headers : Headers = new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers : headers});
    return this.http.post(this.configuracion.baseUrl +  'offerers/', JSON.stringify(oferente), options).map((response : Response) => {
      return response.json()
    }).catch(this.manejadorError);
  }

  obtenerOferente(id : number) : Observable<IOferente>
  {
    return this.http.get(this.configuracion.baseUrl + "offerers/" + id).map((response: Response) => {
      return response.text() ? <IOferente>response.json() : {}
    }).catch(this.manejadorError);
  }

  // obtenerSolicitantes(): Observable<ISolicitante[]> {
  //   return this.http.get(this.configuracion.baseUrl +  "applicant/").map((response : Response) => {
  //     return <ISolicitante[]> response.json();
  //   }).catch(this.manejadorError);
  // };

  private manejadorError(error : Response)
  {
    console.log(error);
    return Observable.throw(error.statusText);
  }
}
