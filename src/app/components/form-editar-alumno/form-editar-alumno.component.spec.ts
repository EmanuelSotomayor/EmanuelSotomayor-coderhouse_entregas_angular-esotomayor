import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarAlumnoComponent } from './form-editar-alumno.component';

describe('FormEditarAlumnoComponent', () => {
  let component: FormEditarAlumnoComponent;
  let fixture: ComponentFixture<FormEditarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditarAlumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
