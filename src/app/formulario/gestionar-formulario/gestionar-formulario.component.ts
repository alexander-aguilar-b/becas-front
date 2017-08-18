import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {IItem, Item} from "../../models/item.model";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestionar-formulario',
  templateUrl: './gestionar-formulario.component.html',
  styles: []
})
export class GestionarFormularioComponent implements OnInit {

  listaItems : IItem[];
  formularioDinamico : FormGroup;
  //constructorFormulario : FormBuilder;

  constructor(private constructorFormulario : FormBuilder) { }

  ngOnInit() {
    this.listaItems = [{
      idTipoControl : 4,
      descripcion : 'Test 123456',
      requerido :  true,
      listaRespuestas : [],
      valor : 'valor',
      activo : true,
      tamanoMaximo : 5
    },
      {
        idTipoControl : 4,
        descripcion : 'Test 55555',
        requerido :  true,
        listaRespuestas : [],
        valor : 'valor',
        activo : true,
        tamanoMaximo : null
      }
    ];

    let i : number  = 0;

    let arregloControlesformulario = new FormArray([]);

    for(let itemLista of this.listaItems)
    {
      let control;

      let validadores : ValidatorFn[] = [];

      if(itemLista.requerido){
        validadores.push(Validators.required);
      }

      if(itemLista.tamanoMaximo != null && itemLista.tamanoMaximo > 0){
       validadores.push(Validators.maxLength(itemLista.tamanoMaximo));
      }

      control = new FormControl('', validadores);

      i = i +1;

      arregloControlesformulario.push(control);
    }

    console.log(arregloControlesformulario.value);

    this.formularioDinamico = this.constructorFormulario.group({
      controlesDinamicos : arregloControlesformulario
    });

    console.log('1');
    console.log(this.formularioDinamico);
    console.log('2');
    console.log(JSON.stringify(this.formularioDinamico.value));

  }

  guardarFormulario(){

  }

  get controles() : FormArray{
    return <FormArray>this.formularioDinamico.get('controles');

  }



}
