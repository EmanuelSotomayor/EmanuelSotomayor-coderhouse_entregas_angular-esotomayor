import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutComponent } from './layout/layout/layout.component';
import { MatTableModule } from '@angular/material/table';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { AgrandarTitulosDirective } from './directives/agrandar-titulos.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormEditarAlumnoComponent } from './components/form-editar-alumno/form-editar-alumno.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ListarAlumnosComponent,
    FormAlumnoComponent,
    NavbarComponent,
    ToolbarComponent,
    LayoutComponent,
    NombreCompletoPipe,
    AgrandarTitulosDirective,
    FormEditarAlumnoComponent,
    IniciarSesionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }