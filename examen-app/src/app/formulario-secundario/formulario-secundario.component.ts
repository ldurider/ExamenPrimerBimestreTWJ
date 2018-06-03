import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-secundario',
  templateUrl: './formulario-secundario.component.html',
  styleUrls: ['./formulario-secundario.component.css']
})
export class FormularioSecundarioComponent implements OnInit {

  @Output() clickEnIngresar: EventEmitter<object> = new EventEmitter();

  nombreCompletoJugador: string;
  numeroCamiseta: number;
  nombreCamiseta: string;
  fechaIngreso: string;
  goles: number;
  equipoID: string;

  es: any;

  constructor() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
    }
  }

  ngOnInit() {
  }

  mostrarInformacion(event, formData){

      console.log(event);
      console.log(formData.value);
      this.clickEnIngresar.emit(formData.value);


  }
}
