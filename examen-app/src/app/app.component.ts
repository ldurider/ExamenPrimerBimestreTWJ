import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  arregloEquipos = [
    {
      nombreEquipo:"Real Madrid",
      liga: "España",
      copas: 4,
      esCampeonActual: false,
      jugadores: [
        {
          nombreCompletoJugador: "Cristiano Ronaldo",
          numeroCamiseta: 7,
          nombreCamiseta: "Ronaldo",
          fechaIngreso: 20/11/2000,
          goles: 1,
          equipoID: "RM"
        }
      ]
    },
    {
      nombreEquipo:"Barcelona",
      liga: "España",
      copas: 3,
      esCampeonActual: false,
      jugadores: [
        {
          nombreCompletoJugador: "Lionel Messi",
          numeroCamiseta: 10,
          nombreCamiseta: "Messi",
          fechaIngreso: 30/12/2000,
          goles: 10,
          equipoID: "BAR"
        }
      ]
    },

  ]

}
