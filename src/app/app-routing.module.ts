import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { FormEditarAlumnoComponent } from './components/form-editar-alumno/form-editar-alumno.component';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full'},
  {path: 'inicio', component: HomeComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'alumnos', component: ListarAlumnosComponent},
  {path: 'alumnos/agregar', component: FormAlumnoComponent},
  {path: 'alumnos/:id', component: FormEditarAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }