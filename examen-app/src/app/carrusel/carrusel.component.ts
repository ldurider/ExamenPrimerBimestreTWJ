import {Component, Input, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  @Input() arregloEquipos;

  constructor() { }

  ngOnInit() {
  }

}
