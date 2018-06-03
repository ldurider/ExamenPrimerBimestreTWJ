import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPrincipalComponent } from './formulario-principal.component';

describe('FormularioPrincipalComponent', () => {
  let component: FormularioPrincipalComponent;
  let fixture: ComponentFixture<FormularioPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
