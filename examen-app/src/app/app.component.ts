import { Component } from '@angular/core';
import {e} from "@angular/core/src/render3";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  equipoClick:number=0;

  arregloLigas=['Europea','Sudamericana', 'Africana', 'Asiatica', 'Norteamericana'];
  arregloPosicion=['Delantero','Defensa', 'Medio', 'Arquero'];

  arregloEquipos = [
    {
      nombreEquipo:'Real Madrid',
      idEquipo: 1,
      fechaCreacion: new Date(1988, 3, 15),
      liga: 'Europea',
      copas: 5,
      esCampeonActual: true,
      jugadores: [
        {
          nombreCompletoJugador: 'Cristiano Ronaldo',
          numeroCamiseta: 7,
          nombreCamiseta: 'Ronaldo',
          posicion: 'Delantero',
          fechaIngreso: new Date(2000, 5, 20),
          goles: 12,
          equipoID: 1
        },
        {
          nombreCompletoJugador: 'Sergio Ramos',
          numeroCamiseta: 2,
          nombreCamiseta: 'Ramos',
          posicion: 'Defensa',
          fechaIngreso: new Date(2007, 5, 20),
          goles: 5,
          equipoID: 1
        }
      ]
    },
    {
      nombreEquipo:'Barcelona FC',
      idEquipo: 2,
      fechaCreacion: new Date(1998, 3, 15),
      liga: 'Europea',
      copas: 10,
      esCampeonActual: false,
      jugadores: [
        {
          nombreCompletoJugador: 'Lionel Messi',
          numeroCamiseta: 10,
          nombreCamiseta: 'Messi',
          posicion: 'Delantero',
          fechaIngreso: new Date(2001, 5, 20),
          goles: 20,
          equipoID: 2
        },
        {
          nombreCompletoJugador: 'Luis Saurez',
          numeroCamiseta: 6,
          nombreCamiseta: 'Suarez',
          posicion: 'Delantero',
          fechaIngreso: new Date(2012, 5, 20),
          goles: 5,
          equipoID: 2
        }
      ]
    },
    {
      nombreEquipo:'Boca Juniors',
      idEquipo: 3,
      fechaCreacion: new Date(1970, 3, 15),
      liga: 'Sudamericana',
      copas: 3,
      esCampeonActual: false,
      jugadores: [
        {
          nombreCompletoJugador: 'Carlos Tevez',
          numeroCamiseta: 10,
          nombreCamiseta: 'Tevez',
          posicion: 'Delantero',
          fechaIngreso: new Date(2010, 5, 20),
          goles: 15,
          equipoID: 3
        }
      ]
    },
    {
      nombreEquipo:'River Plate',
      idEquipo: 4,
      fechaCreacion: new Date(1955, 3, 15),
      liga: 'Sudamericana',
      copas: 6,
      esCampeonActual: true,
      jugadores: [
        {
          nombreCompletoJugador: 'Rodrigo Mora',
          numeroCamiseta: 15,
          nombreCamiseta: 'Mora',
          posicion: 'Medio',
          fechaIngreso: new Date(2000, 5, 20),
          goles: 19,
          equipoID: 4
        }
      ]
    }

  ]

  ingresarEquipo(evento){
    this.arregloEquipos.push(
      {
        'nombreEquipo': evento.nombreEquipo,
        'idEquipo': evento.idEquipo,
        'fechaCreacion': evento.fechaCreacion,
        'liga': evento.liga,
        'copas': evento.copas,
        'esCampeonActual' : evento.esCampeonActual,
        'jugadores': null
      }
    );
    console.log('Evento: ', evento);
    console.log(this.arregloEquipos);

  }

  mostrarCard(indice){
    this.equipoClick=indice;
  }

  ingresarJugador(evento){

    this.arregloEquipos[this.equipoClick].jugadores.push(
      {
        'nombreCompletoJugador': evento.nombreCompletoJugador,
        'numeroCamiseta': evento.numeroCamiseta,
        'nombreCamiseta': evento.nombreCamiseta,
        'fechaIngreso': evento.fechaIngreso,
        'posicion': evento.posicion,
        'goles': evento.goles,
        'equipoID': evento.equipoID

      }
    );
    console.log('Evento: ', evento);
    console.log(this.arregloEquipos[this.equipoClick].jugadores);

  }
}
