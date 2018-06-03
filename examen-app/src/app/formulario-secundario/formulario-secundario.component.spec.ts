import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSecundarioComponent } from './formulario-secundario.component';

describe('FormularioSecundarioComponent', () => {
  let component: FormularioSecundarioComponent;
  let fixture: ComponentFixture<FormularioSecundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioSecundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
