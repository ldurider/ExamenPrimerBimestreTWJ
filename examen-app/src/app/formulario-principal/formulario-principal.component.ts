import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-formulario-principal',
  templateUrl: './formulario-principal.component.html',
  styleUrls: ['./formulario-principal.component.css']
})
export class FormularioPrincipalComponent implements OnInit {

  @Output() clickEnIngresar: EventEmitter<object> = new EventEmitter();
  @Input() arregloLigas;

  nombreEquipo: string;
  liga: string;
  copas: number;
  esCampeonActual: boolean;
  fechaCreacion: string;

  constructor() {
    this.esCampeonActual=false;
  }

  ngOnInit() {
  }

  esNulos(){
    if(
    this.nombreEquipo==null||
    this.liga==null||
    this.copas==null||
    this.esCampeonActual==null||
    this.fechaCreacion==null){
      return true;
    }else{
      return false;
    }
  }

  mostrarInformacion(event, formData){
    console.log(event);
    console.log(formData.value);
    if(this.esNulos()==false){
    this.clickEnIngresar.emit(formData.value);
    this.resetForm();}
    else{
      alert("¡Llene todos los campos del Equipo!")
    }
  }

  resetForm() {

    var resetForm = <HTMLFormElement>document.getElementById('form1');
    resetForm.reset();
  }



}
