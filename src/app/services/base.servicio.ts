
import {AutenticacionService} from "./autenticacion.service";
import {Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * Created by edgaguil on 20/10/2017.
 */


@Injectable()
export class ServicioBase {

  constructor(private autenticacionService : AutenticacionService){
  }

  obtenerOpcionesPeticion() : RequestOptions
  {
    let token =  this.autenticacionService.obtenerCookie('token');
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Basic ' + token});
    let options = new RequestOptions({headers: headers});
    return options;
  }
}
