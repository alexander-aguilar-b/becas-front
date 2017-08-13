/**
 * Created by edgaguil on 13/08/2017.
 */
import {Injectable} from "@angular/core";
/**
 * Created by edgaguil on 9/08/2017.
 */

@Injectable()
export  class ServicioGenero
{

  obtenerGeneros() : any[] {
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

