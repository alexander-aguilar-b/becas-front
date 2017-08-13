/**
 * Created by edgaguil on 13/08/2017.
 */
import {Injectable} from "@angular/core";

@Injectable()
export  class ServicioTipoPoblacion
{

  obtenerTipoPoblacion() : any[] {
    const tiposPoblacion = [
      {
        id : 0,
        descripcion : "-- Seleccione --"
      },
      {
        id : 1,
        descripcion : "Indigena"
      },
      {
        id : 2,
        descripcion : "Afro-Colombiana"
      },
    ];
    return tiposPoblacion;
  }
}

