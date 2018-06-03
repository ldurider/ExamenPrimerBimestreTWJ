import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-equipo',
  templateUrl: './card-equipo.component.html',
  styleUrls: ['./card-equipo.component.css']
})
export class CardEquipoComponent implements OnInit {

  @Input() nombreEquipo: string;

  constructor() { }

  ngOnInit() {
  }

}
