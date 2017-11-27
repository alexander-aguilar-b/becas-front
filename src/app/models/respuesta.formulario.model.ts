import {IItemResultado} from "./item.model";

export interface IRespuestaFormulario {
  id: number;
  applicationId: number;
  phaseId: number;
  applicationFormId: number;
  itemsResult: IItemResultado[];
}
