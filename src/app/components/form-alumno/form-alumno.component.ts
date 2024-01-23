import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrl: './form-alumno.component.scss'
})
export class FormAlumnoComponent implements OnChanges{

  formAlumnos: FormGroup;
  @Output()
  alumnos = new EventEmitter();
  @Input()
  alumnoEditable: any;
  titulo: string = "Agregar alumno";

  constructor(private alumnoService: AlumnoService, private formBuilder: FormBuilder){

    this.formAlumnos = this.formBuilder.group({
      id: new FormControl(null),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl(null, [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required])      
    });

  }

  agregarActualizarAlumno(): void{
    console.info(`ID seleccionado desde el form ${this.formAlumnos}`);
    if(!this.formAlumnos.value.id){
      this.alumnoService.agregarAlumno(this.formAlumnos.value);
    }else{
      this.alumnoService.modificarAlumno(this.formAlumnos.value);
    }

    this.alumnos.emit();
    this.formAlumnos.reset();

  }

  ngOnChanges(): void {
    if(this.alumnoEditable){
      this.formAlumnos.setValue(this.alumnoEditable);
      console.info(`Alumno seleccionado ${this.formAlumnos.get('id')?.value}`);
    }
    console.info(this.alumnos)
  }

}