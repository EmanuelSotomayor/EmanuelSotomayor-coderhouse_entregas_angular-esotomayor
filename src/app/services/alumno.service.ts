import { Injectable } from '@angular/core';
import { Subject, Observable, of, delay, tap } from 'rxjs';
import AlumnoModel from '../models/alumno.model';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService{
  
  constructor(private notificationService: NotificationService,
    private router: Router) {}

  private alumnosTrigger$ = new Subject<AlumnoModel[]>();
  public alumnosObservable = this.alumnosTrigger$.asObservable();

  private alumnos: AlumnoModel[] = [{
      id: 1,
      nombre: 'Naruto',
      apellido: 'Uzumaki',
      edad: 15,
      pais: 'Japon',
      telefono: '1154829301',
      correo: 'narutouzumaki@gmail.com',
      clave: '1234'},{
      id: 2,
      nombre: 'Sasuke',
      apellido: 'Uchiha',
      edad: 15,
      pais: 'Japon',
      telefono: '1154829001',
      correo: 'sasukeuchiha@gmail.com',
      clave: '1234'},{
      id: 3,
      nombre: 'Kakashi',
      apellido: 'Hatake',
      edad: 30,
      pais: 'Japon',
      telefono: '1154829301',
      correo: 'kakashihatake@gmail.com',
      clave: '1234'},{
      id: 4,
      nombre: 'Minato',
      apellido: 'Namikaze',
      edad: 35,
      pais: 'Japon',
      telefono: '1124829391',
      correo: 'minatonamikaze@gmail.com',
      clave: '1234'},{
      id: 5,
      nombre: 'Madara',
      apellido: 'Uchiha',
      edad: 42,
      pais: 'Japon',
      telefono: '1170819301',
      correo: 'madarauchiha@gmail.com',
      clave: '1234'}
  ];

  public agregarAlumno(alumno: AlumnoModel): Observable<AlumnoModel>{
    
    const nuevoAlumno: AlumnoModel = {
      id: (this.alumnos.length + 1),
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      edad: alumno.edad,
      pais: alumno.pais,
      telefono: alumno.telefono
    };

    this.alumnos.push(nuevoAlumno);

    return of(nuevoAlumno);
  }

  public eliminarAlumno(id: any): Observable<AlumnoModel[]>{
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
    return this.listarAlumnos().pipe(
      tap(() => {
        this.notificationService.showCustomAlert({
          title: 'Eliminación de usuario',
          text: 'Se ha eliminado un usuario',
          icon: 'success'
        });
      })
    );
  }

  public listarAlumnos(): Observable<AlumnoModel[]>{
    return of(this.alumnos)
    .pipe(
      delay(2000)
    );
  }

  public modificarAlumno(alumnoRequest: AlumnoModel): Observable<AlumnoModel>{
    
    const alumnoEncontrado: number = this.alumnos.findIndex((alumno) => alumno.id == alumnoRequest.id);
    this.alumnos[alumnoEncontrado] = alumnoRequest;
    return of(this.alumnos[alumnoEncontrado]);

  }

  public listarAlumnoPorId(id: number): Observable<AlumnoModel>{
    let alumnoEncontradoID: number = this.alumnos.findIndex((alumno) => alumno.id == id);
    return of(this.alumnos[alumnoEncontradoID]);
  }

  public buscarAlumnoPorCorreo(correo: string): Observable<AlumnoModel>{
    let alumnoEncontradoPorCorreo: number = this.alumnos.findIndex((alumno) => alumno.correo === correo);
    return of(this.alumnos[alumnoEncontradoPorCorreo]);
  }

}