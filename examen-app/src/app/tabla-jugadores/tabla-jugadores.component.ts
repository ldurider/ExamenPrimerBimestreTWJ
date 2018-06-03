import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tabla-jugadores',
  templateUrl: './tabla-jugadores.component.html',
  styleUrls: ['./tabla-jugadores.component.css']
})
export class TablaJugadoresComponent implements OnInit {

  @Input() jugadores;

  jugador=[
    {
      nombre: "Hola",
      ape: "verde",
      d: "dd"
    },
    {
      nombre: "Hola",
      ape: "verde",
      d: "dd"
    },
    {
      nombre: "Hola",
      ape: "verde",
      d: "dd"
    }
    ];

  constructor() { }

  ngOnInit() {
  }

}
