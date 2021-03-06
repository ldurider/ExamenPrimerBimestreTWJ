import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-formulario-secundario',
  templateUrl: './formulario-secundario.component.html',
  styleUrls: ['./formulario-secundario.component.css']
})
export class FormularioSecundarioComponent implements OnInit {

  @Output() clickEnIngresar: EventEmitter<object> = new EventEmitter();
  @Input() idEquipo: number;
  //@Input() posiciones;

  pos: SelectItem[];


  nombreCompletoJugador: string;
  numeroCamiseta: number;
  nombreCamiseta: string;
  fechaIngreso: string;
  posicion: string
  goles: number;
  equipoID: string;

  es: any;

  /*pos =[
    {label:this.posiciones[1], value:'New York'},
    {label:'Rome', value:'New Yosrkd'},
    {label:'London', value:'New Yorkd'},
    {label:'Istanbul', value:'New Yordk'},
    {label:'Paris', value:'New Ydork'}
  ];*/

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
    };

    this.pos = [];
    this.pos.push({label:'Seleccione Posicion', value:''});
    this.pos.push({label:'Delantero', value:'Delantero'});
    this.pos.push({label:'Defensa', value:'Defensa'});
    this.pos.push({label: 'Arquero', value:'Arquero'});
    this.pos.push({label: 'Medio', value:'Medio'});

  }

  ngOnInit() {
  }

  esNulos(){
    if(
    this.nombreCompletoJugador==null||
    this.numeroCamiseta==null||
    this.nombreCamiseta==null||
    this.fechaIngreso==null||
    this.posicion==null||
    this.goles==null){
      return true
    }else{
      return false
    }
  }

  mostrarInformacion(event, formData){

    console.log(event);
    console.log(formData.value);
    if(this.esNulos()==false){
    this.clickEnIngresar.emit(formData.value);
    this.resetForm();}
    else{
      alert("¡Llene todo los campos del Jugador!")
    }

  }

  resetForm() {

    var resetForm = <HTMLFormElement>document.getElementById('form2');
    resetForm.reset();
  }
}
