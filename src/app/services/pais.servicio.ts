import {Injectable} from "@angular/core";
import {IPais} from "../models/pais.model";
/**
 * Created by edgaguil on 9/08/2017.
 */


@Injectable()
export class ServicioPais{

  obtenerPaises() : any[]{

    const idPaisColombia  = 4;

    const paises = [
      {
        id : 0,
        nombre : "-- Seleccione --"
      },
      {
        id : 1,
        nombre : 'Afganistán'

      },
      {
        id : 2,
        nombre : 'Albania'

      },
      {
        id : 3,
        nombre : 'Argentina'
      },
      {
        id : idPaisColombia,
        nombre : 'Colombia'
      },
      {
        id : 5,
        nombre : 'España'
      },
      {
        id : 6,
        nombre : 'Costa Rica'
      }
    ];

    return paises;
  }
}
