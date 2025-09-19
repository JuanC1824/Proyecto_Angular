import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';

type Estado = 'disponible' | 'agotado' | 'espera';

@Component({
  selector: 'app-calendario',
  imports: [RouterModule, Nav, Footer],
  templateUrl: './calendario.html',
  styleUrls: ['./calendario.css']
})

export class Calendario {

  estado: Estado = 'disponible';

  cambiarEstado(nuevoEstado: Estado) {
    this.estado = nuevoEstado;
  }
}