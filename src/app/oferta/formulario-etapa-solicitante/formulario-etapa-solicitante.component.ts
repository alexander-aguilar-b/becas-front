import {Component, Input, OnInit} from '@angular/core';
import {IItemFormularioConsulta} from "../../models/item.model";
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ServicioFormularioEtapa} from "../../services/formulario.etapa.servicio";
import {ValidadorPersonalizado} from "../../validadores-personalizados/validador.personalizado";

@Component({
  selector: 'app-formulario-etapa-solicitante',
  templateUrl: './formulario-etapa-solicitante.component.html',
  styles: []
})
export class FormularioEtapaSolicitanteComponent implements OnInit {
  listaItems: IItemFormularioConsulta[];
  formularioDinamico: FormGroup;
  datosFormulario: FormData;
  idFormulario: number;
  datosFormularioDisponibles: boolean;

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



  constructor(private constructorFormulario: FormBuilder, private activatedRouter: ActivatedRoute, private servicioFormularioEtapa: ServicioFormularioEtapa) { }

  ngOnInit() {
    this.datosFormularioDisponibles = false;
    this.idFormulario = Number.parseInt(this.activatedRouter.snapshot.paramMap.get('idFormulario'));
    console.log('Dentro del Componete');
    this.datosFormulario = new FormData();

    this.servicioFormularioEtapa.obtenerFormulario(this.idFormulario).subscribe(formularioEtapa => {
      this.listaItems = formularioEtapa.items;
      console.log(this.listaItems);

      let arregloControlesformulario = new FormArray([]);

      for (let i = 0; i <= this.listaItems.length - 1; i++) {
        let itemLista = this.listaItems[i];
        console.log(itemLista);

        if(itemLista.tipoItem.id === this.tiposItemEnum.listaSeleccionMultiple) {

          let arregloRespuestas = new FormArray([], ValidadorPersonalizado.checkBoxRequerido);

          for (let j = 0; j <= itemLista.valoresPosibles.length - 1; j++) {
            arregloRespuestas.push(new FormControl(false));
          }

          arregloControlesformulario.push(arregloRespuestas);
        } else {
          let control;
          let validadores: ValidatorFn[] = [];

          if (itemLista.obligatorio) {
            validadores.push(Validators.required);
          }

          if (itemLista.tamanio != null && itemLista.tamanio > 0){
            validadores.push(Validators.maxLength(itemLista.tamanio));
          }
          control = new FormControl('', validadores);
          arregloControlesformulario.push(control);
        }
      }

      this.formularioDinamico = this.constructorFormulario.group({
        controlesDinamicos : arregloControlesformulario
      });



      console.log(this.formularioDinamico);
      console.log(JSON.stringify(this.formularioDinamico.value));

      this.datosFormularioDisponibles = true;
    });
  }
  regresar(){}


  guardarFormulario(){
    console.log(this.listaItems);
  }
}
