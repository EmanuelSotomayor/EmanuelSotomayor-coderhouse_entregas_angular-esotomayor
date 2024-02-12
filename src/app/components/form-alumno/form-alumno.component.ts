import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrl: './form-alumno.component.scss'
})
export class FormAlumnoComponent{

  formAlumnos: FormGroup;
  titulo: string = "Agregar alumno";

  constructor(private alumnoService: AlumnoService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private notificationService: NotificationService){

    this.formAlumnos = this.formBuilder.group({
      id: new FormControl(null),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl(null, [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required])      
    });

  }

  agregarAlumno(): void{
    
    this.alumnoService.agregarAlumno(this.formAlumnos.value).subscribe({
      next: () => {
        this.notificationService.showCustomAlert({
          title: 'Creación de alumno',
          text: `Se agregó un alumno`,
          icon: 'success'
        });
      },
      complete: () => {
        this.router.navigate(['/alumnos'])
      }
    });
    
    this.formAlumnos.reset();

  }

}