import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEquipoComponent } from './card-equipo.component';

describe('CardEquipoComponent', () => {
  let component: CardEquipoComponent;
  let fixture: ComponentFixture<CardEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
