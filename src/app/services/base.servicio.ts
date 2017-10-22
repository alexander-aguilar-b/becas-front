import {ConfiguracionServicio} from "./configuracion.servicio";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {AutenticacionService} from "./autenticacion.service";
/**
 * Created by edgaguil on 20/10/2017.
 */


@Injectable()
export class ServicioBase {

  constructor(private http : Http, private configuracion : ConfiguracionServicio, private autenticacionService: AutenticacionService)
  {}
}
