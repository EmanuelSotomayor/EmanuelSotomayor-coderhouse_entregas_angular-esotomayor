import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../services/autenticacion.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.scss'
})
export class IniciarSesionComponent implements OnInit{
  
  formLogin: FormGroup;

  constructor(private autenticacionService: AutenticacionService,
  private formBuilder: FormBuilder,
  private router: Router){
    this.formLogin = this.formBuilder.group({
      correo: new FormControl(null, Validators.required),
      clave: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {}

  iniciarSesion(): void{
    this.autenticacionService.iniciarSesion(this.formLogin.get('correo')?.value);
  }

}
