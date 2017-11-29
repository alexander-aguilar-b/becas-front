
import {AutenticacionService} from "./autenticacion.service";
import {Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {IErrorServicio} from "../models/error.servicio.model";
/**
 * Created by edgaguil on 20/10/2017.
 */


@Injectable()
export class ServicioBase {

  constructor(protected autenticacionService: AutenticacionService){
  }

  protected obtenerOpcionesPeticion(): RequestOptions {
    let token =  this.autenticacionService.obtenerCookie('token');
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Basic ' + token});
    let options = new RequestOptions({headers: headers});
    return options;
  }
  protected obtenerOpcionesPeticionSinAutenticacion(): RequestOptions {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return options;
  }

  protected obtenerHeaderAutorizacion(): RequestOptions {
    let token =  this.autenticacionService.obtenerCookie('token');
    let headers = new Headers({'Authorization': 'Basic ' + token, 'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Methods' : 'PATCH'});
    let options = new RequestOptions({headers: headers});
    return options;
  }

  protected manejadorError(error: Response) {
    console.log('*********error**********');
    console.log(error.text());
    console.log('*********error1112**********');
    console.log(<IErrorServicio><any>error.json());

    //return Observable.throw(error.statusText);
    return Observable.throw(error);
  }
}
