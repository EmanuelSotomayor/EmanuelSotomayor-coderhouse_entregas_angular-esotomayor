import { Component, OnInit } from '@angular/core';
import AlumnoModel from '../../models/alumno.model';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrl: './listar-alumnos.component.scss'
})
export class ListarAlumnosComponent implements OnInit{

  alumnoCargados: AlumnoModel[] = this.alumnoService.listarAlumnos();
  cargando: boolean = true;
  alumnoSeleccionado: AlumnoModel | null = null;
  titulo: string = "Listado de alumnos";
  filasVisualizadas: string[] = ['id', 'nombre', 'apellido', 'edad', 'telefono', 'nombreCompleto', 'acciones'];

  constructor(private alumnoService: AlumnoService){
    setTimeout(() => {
      this.cargando = false
      console.log(this.cargando)
    }, 2000);
  }

  ngOnInit(): void {}

  onPressEliminarAlumno(id: any): void{
    this.alumnoService.eliminarAlumno(id);
    this.actualizarAlumnos();
  }

  onPressModificarAlumno(alumno: AlumnoModel): void{
    this.alumnoSeleccionado = alumno;
  }

  actualizarAlumnos(){
    this.alumnoCargados = [...this.alumnoService.listarAlumnos()];
  }

} 