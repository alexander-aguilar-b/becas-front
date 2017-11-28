import {Component, Input, OnInit} from '@angular/core';
import {IConsultaUsuario} from "../../models/usuario.model";
import {IItemFormularioConsulta, IItemResultado} from "../../models/item.model";
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioFormularioEtapa} from "../../services/formulario.etapa.servicio";
import {AutenticacionService} from "../../services/autenticacion.service";
import {SolicitanteService} from "../../services/solicitante.service";
import {ValidadorPersonalizado} from "../../validadores-personalizados/validador.personalizado";
import {ServicioAplicacionOferta} from "../../services/servicio.aplicacion.oferta";
import {IRespuestaFormulario} from "../../models/respuesta.formulario.model";

@Component({
  selector: 'app-consultar-formulario-diligenciado',
  templateUrl: './consultar-formulario-diligenciado.component.html',
  styles: []
})
export class ConsultarFormularioDiligenciadoComponent implements OnInit {

  listaItems: IItemResultado[];
  formularioDinamico: FormGroup;
  datosFormulario: FormData;
  idFormulario: number;
  idOferta: number;
  idEtapa: number;
  idAplicacion: number;
  datosFormularioDisponibles: boolean;
  resultadoFormularioDiligenciado: IRespuestaFormulario;

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


  constructor(private constructorFormulario: FormBuilder, private activatedRouter: ActivatedRoute,
              private servicioFormularioEtapa: ServicioFormularioEtapa,
              private servicioAutenticacion: AutenticacionService,
              private servicioSolicitante: SolicitanteService,
              private router: Router,
              private servicioAplicacionOferta: ServicioAplicacionOferta) {
  }
  ngOnInit() {
    this.datosFormularioDisponibles = false;
    this.idAplicacion = Number.parseInt(this.activatedRouter.snapshot.paramMap.get('idAplicacionOferta'));
    this.idFormulario = Number.parseInt(this.activatedRouter.snapshot.paramMap.get('idFormulario'));
    this.idOferta = Number.parseInt(this.activatedRouter.snapshot.paramMap.get('idOferta'));
    this.datosFormulario = new FormData();

    this.servicioAplicacionOferta.obtenerFormularioDiligenciado(this.idFormulario, this.idAplicacion).subscribe(resultadoFormularioDiligenciado => {
      this.listaItems = resultadoFormularioDiligenciado.itemsResult;
      this.renderizarFormulario();
    });

  }

  renderizarFormulario(){
    //this.listaItems = formularioEtapa.items;
    console.log(this.listaItems);

    let arregloControlesformulario = new FormArray([]);

    for (let i = 0; i <= this.listaItems.length - 1; i++) {
      let itemLista = this.listaItems[i].item;
      console.log(itemLista);

      if (itemLista.tipoItem.id === this.tiposItemEnum.listaSeleccionMultiple) {

        let arregloRespuestas = new FormArray([], ValidadorPersonalizado.checkBoxRequerido);

        for (let j = 0; j <= itemLista.valoresPosibles.length - 1; j++) {
          arregloRespuestas.push(new FormControl(this.listaItems[i].value[j]));
        }

        arregloControlesformulario.push(arregloRespuestas);
      } else {
        let control;
        let validadores: ValidatorFn[] = [];

        if (itemLista.obligatorio) {
          validadores.push(Validators.required);
        }

        if (itemLista.tamanio != null && itemLista.tamanio > 0) {
          validadores.push(Validators.maxLength(itemLista.tamanio));
        }

        let valorcontrol = this.listaItems[i].value[0];
        if(itemLista.tipoItem.id == this.tiposItemEnum.listaSeleccionable){
          let indiceSeleccionadoLista = itemLista.valoresPosibles.indexOf(this.listaItems[i].value[0]);
          valorcontrol = indiceSeleccionadoLista.toString();
        }

        control = new FormControl(valorcontrol, validadores);
        arregloControlesformulario.push(control);
      }
    }

    this.formularioDinamico = this.constructorFormulario.group({
      controlesDinamicos: arregloControlesformulario
    });


    console.log(this.formularioDinamico);
    console.log(JSON.stringify(this.formularioDinamico.value));

    this.datosFormularioDisponibles = true;
  }

  ngOnInit1() {
    this.datosFormularioDisponibles = false;
    this.idAplicacion = Number.parseInt(this.activatedRouter.snapshot.paramMap.get('idAplicacionOferta'));
    this.idFormulario = Number.parseInt(this.activatedRouter.snapshot.paramMap.get('idFormulario'));
    this.datosFormulario = new FormData();

    this.servicioAplicacionOferta.obtenerFormularioDiligenciado(this.idFormulario, this.idAplicacion).subscribe(resultadoFormularioDiligenciado => {
      this.listaItems = resultadoFormularioDiligenciado.itemsResult;
      console.log('Los datos que son, son');
      console.log(this.listaItems);

      let arregloControlesformulario = new FormArray([]);

      for (let i = 0; i <= this.listaItems.length - 1; i++) {
        let itemLista = this.listaItems[i].item;
        console.log(itemLista);

        if (itemLista.tipoItem.id === this.tiposItemEnum.listaSeleccionMultiple) {

          let arregloRespuestas = new FormArray([]);

          for (let j = 0; j <= itemLista.valoresPosibles.length - 1; j++) {

            arregloRespuestas.push(new FormControl(this.listaItems[i].value[j]));
          }

          arregloControlesformulario.push(arregloRespuestas);
        } else {
          let control;
          control = new FormControl(this.listaItems[i].value[0]);
          arregloControlesformulario.push(control);
        }
      }

      this.formularioDinamico = this.constructorFormulario.group({
        controlesDinamicos: arregloControlesformulario
      });


      console.log(this.formularioDinamico);
      console.log(JSON.stringify(this.formularioDinamico.value));

      this.datosFormularioDisponibles = true;
    });
  }
}
