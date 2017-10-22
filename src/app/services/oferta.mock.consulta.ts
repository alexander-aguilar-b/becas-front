import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ConfiguracionServicio } from "./configuracion.servicio";
import { Observable } from "rxjs/Observable";
import { ITipoEntidad } from "../models/tipo.entidad.model";
import {IOferta} from "../models/oferta.model";
/**
 * Created by edgaguil on 9/08/2017.
 */

@Injectable()
export class ServicioOfertaConsultaMock {
    constructor(private http: Http, private configuracion: ConfiguracionServicio) { }


    obtenerOferta(): any {
        
        const oferta = 
        {
          "etapas": [
            {
              "nombre": "Etapa 1",
              "fecha_inicio": "2017-10-08",
              "fecha_fin": "2017-10-10",
              "descripcion": "Descripción etapa",
              "cantidad_a_seleccionar": "2",
              "formulario": {
                "nombre": "Nombre Formulario 1",
                "descripcion": "Descripción Formulario",
                "items": [
                  {
                    "descripcion": "Nombre",
                    "id_tipo_item": 1,
                    "obligatorio": true,
                    "tamanio": 10
                  },
                  {
                    "descripcion": "Fecha",
                    "id_tipo_item": 3,
                    "obligatorio": true
                  }
                ]
              }
            }
          ],
          "id_oferente": "Oferente",
          "nombre": "Nombre oferta",
          "fecha_inicio": "2017-10-01",
          "fecha_fin": "2017-10-15",
          "descripcion": "Descripción oferta",
          "id_tipo_convocatoria": 2,
          "requisitos": "Requisito Oferta  fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggfffffffffffffffffffffffffffff",
          "condiciones": "Condición Oferta",
          "informacion_adicional": "Información Oferta"
        };
        
        return oferta;
    }

}
