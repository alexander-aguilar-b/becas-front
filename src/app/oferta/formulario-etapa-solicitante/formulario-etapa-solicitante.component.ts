import {Component, Input, OnInit} from '@angular/core';
import {IItemFormularioConsulta} from "../../models/item.model";
import {Form, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioFormularioEtapa} from "../../services/formulario.etapa.servicio";
import {ValidadorPersonalizado} from "../../validadores-personalizados/validador.personalizado";
import {AutenticacionService} from "../../services/autenticacion.service";
import {IFormularioRegistro, IValoresFormulario} from "../../models/formulario.model";
import {isArray, isNullOrUndefined} from "util";
import {SolicitanteService} from "../../services/solicitante.service";
import {IErrorServicio} from "../../models/error.servicio.model";
import {CodigosErrorServicio} from "../../constantes/codigos.error.servicio";

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
  idOferta: number;
  idEtapa: number;
  datosFormularioDisponibles: boolean;

  tiposItemEnum = {
    textoEntrada: 1, //'INPUT_TEXT',
    entradaNumerica: 2, // 'INPUT_NUMBER',
    fecha: 3, //'INPUT_DATE',
    listaSeleccionable: 4, //'INPUT_SELECT',
    listaSeleccionMultiple: 5, //'INPUT_MULTISELECT',
    archivo: 6, //'INPUT_FILE'
    etiqueta: 7,  //TITULO,
    titulo: 8,  //TITULO,
    listaRadioButton: 9
  }


  constructor(private constructorFormulario: FormBuilder, private activatedRouter: ActivatedRoute,
              private servicioFormularioEtapa: ServicioFormularioEtapa,
              private servicioAutenticacion: AutenticacionService,
              private servicioSolicitante: SolicitanteService,
              private router: Router) {
  }

  ngOnInit() {
    this.datosFormularioDisponibles = false;
    this.idOferta = Number.parseInt(this.activatedRouter.snapshot.paramMap.get('idOferta'));
    this.idEtapa = Number.parseInt(this.activatedRouter.snapshot.paramMap.get('idEtapa'));
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

        if (itemLista.tipoItem.id === this.tiposItemEnum.listaSeleccionMultiple) {

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

          if (itemLista.tamanio != null && itemLista.tamanio > 0) {
            validadores.push(Validators.maxLength(itemLista.tamanio));
          }
          control = new FormControl('', validadores);
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

  regresar() {
    this.router.navigate(['/oferta/detalle-etapa-solicitante/', this.idOferta, this.idEtapa]);
  }


  guardarFormulario() {
    console.log('formularioDinamico.value');
    const idSolicitante = Number.parseInt(this.servicioAutenticacion.obtenerCookie('idUsuario'));
    console.log(this.formularioDinamico.value.controlesDinamicos);
    console.log('this.listaItems');
    console.log(this.listaItems);

    let valoresFomulario: IValoresFormulario[] = [];

    for (let i = 0; i < this.listaItems.length; i++) {
      let valorItemFormulario: IValoresFormulario;
      let arregloValores: string[] = [];

      let idItemFormulario: number = this.listaItems[i].id;
      console.log(idItemFormulario);

      let contenedorRespuesta: string[] = [];
      if (!isNullOrUndefined(this.formularioDinamico.value.controlesDinamicos[i])) {
        if (isArray(this.formularioDinamico.value.controlesDinamicos[i])) {
          arregloValores = this.formularioDinamico.value.controlesDinamicos[i];
        }
        else {
          contenedorRespuesta.push(this.formularioDinamico.value.controlesDinamicos[i]);
          arregloValores = contenedorRespuesta;
        }

        valorItemFormulario = {
          id: idItemFormulario,
          values: arregloValores
        };

        valoresFomulario.push(valorItemFormulario);
      }
    }

    /*
    for (let i = 0; i <= arreglo1.length; i++) {
      if (arreglo1[i] !== undefined) {
        console.log(arreglo1[i].value);
      }
    }*/

    let formularioRegistro: IFormularioRegistro;
    formularioRegistro = {
      id_usuario: idSolicitante,
      id_convocatoria: this.idOferta,
      id_etapa: this.idEtapa,
      id_formulario: this.idFormulario,
      valoresFormulario: valoresFomulario
    };
    console.log('formularioRegistro');
    console.log(formularioRegistro);

    console.log('this.listaItems');
    console.log(this.listaItems);

    this.servicioSolicitante.registrarInformacionFormulario(formularioRegistro).subscribe(respuesta => {
      alert('La información del formulario ha sido registrada correctamente');
      this.router.navigate(['/oferta/detalle-etapa-solicitante/', this.idOferta, this.idEtapa]);
    },
      error => {
        const errorServicio: IErrorServicio = <IErrorServicio><any>error.json();
        if (errorServicio.code === CodigosErrorServicio.APLICACION_NO_EXISTE) {
          alert('Para poder registrar la información del formulario es necesario que previamente realice la aplicación a la oferta.');
          this.router.navigate(['/oferta/detalle-oferta-solicitante', this.idOferta]);
        }
        });
  }
}
