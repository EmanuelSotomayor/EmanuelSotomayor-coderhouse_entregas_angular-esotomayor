import { EventEmitter, Injectable } from '@angular/core';
import AlumnoModel from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService{
  
  constructor() {}

  private alumnos: AlumnoModel[] = [
    {
      id: 1,
      nombre: 'Naruto',
      apellido: 'Uzumaki',
      edad: 15,
      pais: 'Japon',
      telefono: '1154829301'
    },
    {
      id: 2,
      nombre: 'Sasuke',
      apellido: 'Uchiha',
      edad: 15,
      pais: 'Japon',
      telefono: '1154829001'
    },
    {
      id: 3,
      nombre: 'Kakashi',
      apellido: 'Hatake',
      edad: 30,
      pais: 'Japon',
      telefono: '1154829301'
    },
    {
      id: 4,
      nombre: 'Minato',
      apellido: 'Namikaze',
      edad: 35,
      pais: 'Japon',
      telefono: '1124829391'
    },
    {
      id: 5,
      nombre: 'Madara',
      apellido: 'Uchiha',
      edad: 42,
      pais: 'Japon',
      telefono: '1170819301'
    }
  ];

  public agregarAlumno(alumno: AlumnoModel): void{
    console.log(this.alumnos);
    const nuevoAlumno: AlumnoModel = {
      id: (this.alumnos.length + 1),
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      edad: alumno.edad,
      pais: alumno.pais,
      telefono: alumno.telefono
    };
    this.alumnos.push(nuevoAlumno);
    console.log(`Alumno agregado ${JSON.stringify(nuevoAlumno)}`)
    console.log(this.alumnos);
  }

  public eliminarAlumno(id: any): void{
    this.alumnos = this.alumnos.filter((alumno) => alumno.id != id);
    console.log(`Alumno eliminado: ${id}`)
    console.log(this.alumnos);
  }

  public listarAlumnos(): AlumnoModel[]{
    return this.alumnos;
  }

  public modificarAlumno(alumnoRequest: AlumnoModel): void{
    const alumnoEncontrado: number = this.alumnos.findIndex((alumno) => alumno.id === alumnoRequest.id);
      this.alumnos[alumnoEncontrado] = alumnoRequest;
    }

}