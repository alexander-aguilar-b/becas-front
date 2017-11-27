import {Component, Input, OnInit} from '@angular/core';
import {IConsultaUsuario} from "../../models/usuario.model";
import {IItem} from "../../models/item.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-datos-formulario',
  templateUrl: './datos-formulario.component.html',
  styles: []
})
export class DatosFormularioComponent implements OnInit {

  @Input() listaItems: IItem[];

  tiposItemEnum  = {
    textoEntrada :  1, //'INPUT_TEXT',
    entradaNumerica : 2, // 'INPUT_NUMBER',
    fecha : 3, //'INPUT_DATE',
    listaSeleccionable : 4, //'INPUT_SELECT',
    listaSeleccionMultiple : 5, //'INPUT_MULTISELECT',
    archivo :  6, //'INPUT_FILE'
    etiqueta : 7,  //TITULO,
    titulo : 8,  //TITULO,
    listaRadioButton : 9
  }

  formularioDinamico: FormGroup;
  datosFormulario: FormData;

  constructor(private constructorFormulario: FormBuilder) { }

  ngOnInit() {
    console.log('Dentro del Componete');
    this.datosFormulario = new FormData();
  }
}
