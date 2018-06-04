import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import {ListboxModule} from 'primeng/listbox';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormularioPrincipalComponent } from './formulario-principal/formulario-principal.component';
import { CardEquipoComponent } from './card-equipo/card-equipo.component';
import { FormularioSecundarioComponent } from './formulario-secundario/formulario-secundario.component';
import { TablaJugadoresComponent } from './tabla-jugadores/tabla-jugadores.component';


@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    FormularioPrincipalComponent,
    CardEquipoComponent,
    FormularioSecundarioComponent,
    TablaJugadoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule,
    CardModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    MatSelectModule,
    FieldsetModule,
    ListboxModule,
    PanelModule,
    DropdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
