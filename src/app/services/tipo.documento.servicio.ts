/**
 * Created by edgaguil on 13/08/2017.
 */
import {Injectable} from "@angular/core";
/**
 * Created by edgaguil on 9/08/2017.
 */

@Injectable()
export  class ServicioTipoDocumento
{

  obtenerTipoDocumentos() : any[] {
    const tipoDocumentos = [
      {
        id : 0,
        descripcion : "-- Seleccione --"
      },
      {
        id : 1,
        descripcion : "Cedula de Ciudadania"
      },
      {
        id : 2,
        descripcion : "Cedula de Extranjeria"
      },
      {
        id : 3,
        descripcion : "Tarjeta de identidad"
      },

    ];

    return tipoDocumentos;
  }
}
