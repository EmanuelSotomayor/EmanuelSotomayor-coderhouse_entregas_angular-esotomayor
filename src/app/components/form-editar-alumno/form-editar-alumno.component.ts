import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';
import AlumnoModel from '../../models/alumno.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-form-editar-alumno',
  templateUrl: './form-editar-alumno.component.html',
  styleUrl: './form-editar-alumno.component.scss'
})
export class FormEditarAlumnoComponent implements OnInit{

  formAlumno: FormGroup;
  titulo: string = "Editar alumno";

  constructor(private alumnoService: AlumnoService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private notificationService: NotificationService,
    private activatedRouter: ActivatedRoute){

    this.formAlumno = this.formBuilder.group({
      id: new FormControl(null),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl(null, [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required])      
    });

  }

  ngOnInit(): void {
    let idAlumno = this.activatedRouter.snapshot.params['id'];
    this.alumnoService.listarAlumnoPorId(idAlumno).subscribe({
      next: (value) => {
        this.formAlumno.setValue(value);
      }
    });
  }

  modificarAlumno(): void{
    let alumnoEditable: AlumnoModel = this.formAlumno.value;
    this.alumnoService.modificarAlumno(alumnoEditable).subscribe({
      next: () => {
        this.notificationService.showCustomAlert({
          title: 'Edición de alumno',
          text: `Se editó un alumno`,
          icon: 'success'
        });
      },
      complete: () =>{
        this.router.navigate(['/alumnos'])
      }
    });
  }

}