import { Component, OnInit } from '@angular/core';
import AlumnoModel from '../../models/alumno.model';
import { AlumnoService } from '../../services/alumno.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrl: './listar-alumnos.component.scss'
})
export class ListarAlumnosComponent implements OnInit{

  alumnoCargados: AlumnoModel[] = [];
  cargando: boolean = false;
  alumnoSeleccionado: AlumnoModel | null = null;
  titulo: string = "Listado de alumnos";
  filasVisualizadas: string[] = ['id', 'nombre', 'apellido', 'edad', 'telefono', 'nombreCompleto', 'acciones'];

  constructor(private alumnoService: AlumnoService, private loadingService: LoadingService){}

  ngOnInit(): void {

    this.loadingService.isLoading$.subscribe({
      next: (loading) => this.cargando = loading
    });

    this.loadingService.setLoadingStatus(true);
    
    this.alumnoService.listarAlumnos().subscribe({
      next: (alumnos) => {
        this.alumnoCargados = alumnos;
      },
      complete: () => {
        this.loadingService.setLoadingStatus(false);
      }
    });

  }

  onPressEliminarAlumno(id: any): void{
    this.alumnoService.eliminarAlumno(id).subscribe({
      next: (alumnos) => this.alumnoCargados = alumnos
    });
  }

} 