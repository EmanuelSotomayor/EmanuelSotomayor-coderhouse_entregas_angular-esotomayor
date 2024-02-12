import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlumnoService } from './alumno.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private authenticationTrigger$ = new Subject<boolean>();
  public isLogged$ = this.authenticationTrigger$.asObservable();
  
  constructor(private alumnoService: AlumnoService,
    private router: Router) {}

  iniciarSesion(correo: string): void{
    this.alumnoService.buscarAlumnoPorCorreo(correo).subscribe({
      next: (alumno) => {
        if(alumno !== undefined){
          localStorage.setItem('usuario', JSON.stringify(alumno.correo));
          this.authenticationTrigger$.next(true);
          this.router.navigate(['/alumnos']);
        }else{
          this.router.navigate(['/iniciar-sesion'])
        }
      }
    });
  }

  deslogear(): void{
    localStorage.removeItem('usuario');
    this.authenticationTrigger$.next(false);
    this.router.navigate(['/iniciar-sesion']);
  }

}