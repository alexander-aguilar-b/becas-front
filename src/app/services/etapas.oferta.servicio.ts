import {Injectable} from "@angular/core";
import {IEtapa, IEtapaConsulta} from "../models/etapa.model";
import {IFormultario} from "../models/formulario.model";
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import {ConfiguracionServicio} from "./configuracion.servicio";
import {AutenticacionService} from "./autenticacion.service";
import { Observable} from 'rxjs/Rx';





/**
 * Created by edgaguil on 20/10/2017.
 */


@Injectable()
export class ServicioEtapasOferta {

  constructor(private http : Http, private configuracion : ConfiguracionServicio, private autenticacionService: AutenticacionService)
  {}

  //obtenerEtapasOferta(idOferta) : IEtapa[] {
  obtenerEtapasOferta(idOferta): Observable<IEtapaConsulta[]> {
    let token =  this.autenticacionService.obtenerCookie('token');
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Basic ' + token});
    let options = new RequestOptions({headers: headers});

    return this.http.get(this.configuracion.baseUrl +  "phase/applicantforms/" + idOferta, options).map((response : Response) => {
      return <IEtapaConsulta[]> response.json();
    }).catch(this.manejadorError);
  }

  obtenerEtapasOfertaBK(idOferta): any[] {

    const etapasOferta = [];
    let etapa1: IEtapa;
    let etapa2: IEtapa;
    let etapa3: IEtapa;

    etapa1 = {
      id: 1,
      nombre: 'Etapa1 ',
      descripcion: 'Descripción Etapa 1',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: null
    };

    etapa2 = {
      id: 2,
      nombre: 'Etapa2 ',
      descripcion: 'Descripción Etapa 2',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: null
    };

    etapa3 = {
      id: 3,
      nombre: 'Etapa4 ',
      descripcion: 'Descripción Etapa 4',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: null
    };

    etapasOferta.push(etapa1);
    etapasOferta.push(etapa2);
    etapasOferta.push(etapa3);

    return etapasOferta;
  }

  obtenerEtapaOferta(idEtapaOferta) {
    let etapa5: IEtapa;
    let formulario : IFormultario;

    formulario = {
      id : 1,
      nombre : 'Formulario de Prueba 1',
      descripcion : 'Descripción Formulario',
      items : []
    };

    etapa5 = {
      id: 1,
      nombre: 'Etapa1 ',
      descripcion: 'Descripción Etapa 1',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      cantidad_a_seleccionar: 5,
      formulario: formulario
    };

    return etapa5;
  }

  private manejadorError(error : Response)
  {
    console.log(error);
    return Observable.throw(error.statusText);
  }

}
