import {Injectable} from "@angular/core";
/**
 * Created by edgaguil on 9/08/2017.
 */

@Injectable()
export  class ServicioTipoEntidad
{

  obtenerTiposEntidad() : any[] {
    const tipoEntidades = [
      {
        id : 0,
        nombre : "-- Seleccione --"
      },
      {
        id : 1,
        nombre : "Fundación"
      }
    ];
    return tipoEntidades;
  }
}
