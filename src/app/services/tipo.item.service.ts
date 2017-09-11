/**
 * Created by edgaguil on 10/09/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {ConfiguracionServicio} from "./configuracion.servicio";
import {Observable} from "rxjs/Observable";
import {ITipoItem} from "../models/tipo.item.model";


/**
 * Created by edgaguil on 9/08/2017.
 */


@Injectable()
export class ServicioTipoItem{

  constructor(private http : Http, private configuracion : ConfiguracionServicio)
  {}

  obtenerTiposItem(): Observable<ITipoItem[]> {
    return this.http.get(this.configuracion.baseUrl +  "general/itemtypes/ ").map((response : Response) => {
      return <ITipoItem[]> response.json();
    }).catch(this.manejadorError);
  };

  private manejadorError(error : Response)
  {
    return Observable.throw(error.statusText);
  }
}

