import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-equipo',
  templateUrl: './card-equipo.component.html',
  styleUrls: ['./card-equipo.component.css']
})
export class CardEquipoComponent implements OnInit {

  @Input() equipo;

  constructor() { }

  ngOnInit() {
  }

  transformarSiNo(estado){
    if(estado==true){
      return "SI"
    }else{
      return "NO"
    }
  }

}
