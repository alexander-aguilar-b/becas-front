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
export class ServicioOfertaMock {

  constructor(private http : Http, private configuracion : ConfiguracionServicio, private autenticacionService : AutenticacionService)
  {
  }

  obtenerOferta() : any[] {
    const generos = [
      {
        id : 0,
        descripcion : "-- Seleccione --"
      },
      {
        id : 1,
        descripcion : "Masculino"
      },
      {
        id : 2,
        descripcion : "Femenino"
      }
    ];

    return generos;
  }

}


