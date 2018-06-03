import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-principal',
  templateUrl: './formulario-principal.component.html',
  styleUrls: ['./formulario-principal.component.css']
})
export class FormularioPrincipalComponent implements OnInit {

  @Output() arrayEquiposOutput;

  nombreEquipo: string;
  esCampeon: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  mostrarInformacion(event, formData){
    console.log(event);
    console.log(formData.value);


  }



}
