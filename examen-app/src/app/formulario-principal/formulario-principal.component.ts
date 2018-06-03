import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-formulario-principal',
  templateUrl: './formulario-principal.component.html',
  styleUrls: ['./formulario-principal.component.css']
})
export class FormularioPrincipalComponent implements OnInit {

  @Output() clickEnIngresar: EventEmitter<object> = new EventEmitter();

  nombreEquipo: string;
  liga: string;
  copas: number;
  esCampeonActual: boolean;

  constructor() {
    this.esCampeonActual=false;
  }

  ngOnInit() {
  }

  mostrarInformacion(event, formData){
    console.log(event);
    console.log(formData.value);
    this.clickEnIngresar.emit(formData.value);

  }



}
