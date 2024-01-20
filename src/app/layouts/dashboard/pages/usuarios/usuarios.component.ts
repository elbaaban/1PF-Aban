import { Component } from '@angular/core';
import { Usuario } from './models/indes';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss',
})
export class UsuariosComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'pais', 'roll'];
  dataSource: Usuario[] = [
    {
      id: 1,
      nombre:'Elba',
      apellido : 'Aban',
      email: 'elbajonas16@gmail.com',
      pais: 'Argentina',
      roll: 'Admin'
    },
    {
      id: 2,
      nombre:'Cari',
      apellido : 'Aban',
      email: 'carito@gmail.com',
      pais: 'Argentina',
      roll: 'Admin'
    },
    {
      id: 3,
      nombre:'Luis',
      apellido : 'Aban',
      email: 'amonamar@gmail.com',
      pais: 'Argentina',
      roll: 'User'
    }
  ];


  onUserSubmitted(ev: Usuario):void{
   this.dataSource = [...this.dataSource, ev];
  }
}
