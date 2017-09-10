/**
 * Created by edgaguil on 2/09/2017.
 */
import {Component, Input} from '@angular/core';


@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  // styles: ['.modal-body { height : 250px; overflow-y: scroll;  width : 600px; }'  ]
})

export class SimpleModalComponent{

  @Input() title : string;



}
