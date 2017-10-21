import {Component, Input, OnInit} from "@angular/core";
import {IOferta} from "../../models/oferta.model";
/**
 * Created by edgaguil on 21/10/2017.
 */

@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.component.html',
  styles: []
})


export class DetalleOfertaComponent implements OnInit {
  @Input() detalleOferta : IOferta[];

  ngOnInit(){

  }


}

