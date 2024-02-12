import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
  
  isLogged!: boolean;
  
  constructor(private autenticacionService: AutenticacionService){}

  ngOnInit(): void {

    this.autenticacionService.isLogged$.subscribe({
      next: (value) => {
        this.isLogged = value;
      }
    });

  }

}
