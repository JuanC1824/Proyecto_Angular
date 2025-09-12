import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';

interface Sponsor { logo: string; }

@Component({
  selector: 'app-nfl',
  standalone: true,
  imports: [RouterModule, Nav, Footer, CommonModule],
  templateUrl: './nfl.html',
  styleUrls: ['./nfl.css']
})
export class NflComponent {
  partidosEnVivo = [
    {
      equipo1: { nombre: 'Guerreros del Sol', logo: 'assets/img/i (3).png', score: 28 },
      equipo2: { nombre: 'Dragones de Fuego', logo: 'assets/img/i (1).png', score: 24 },
      tiempo: 'T4 - 2:15'
    },
    {
      equipo1: { nombre: 'Águilas Doradas', logo: 'assets/img/i (2).png', score: 17 },
      equipo2: { nombre: 'Toros Negros', logo: 'assets/img/i (4).png', score: 14 },
      tiempo: 'T3 - 8:05'
    },
     {
      equipo1: { nombre: 'Águilas Doradas', logo: 'assets/img/i (5).png', score: 15 },
      equipo2: { nombre: 'Toros Negros', logo: 'assets/img/bD0xJTIwMng.png', score: 12 },
      tiempo: 'T3 - 8:05'
    }
  ];

  lideresTemporada = [
    { jugador: 'Juan Pérez', valor: '4,502', stat: 'Yardas por pase' },
    { jugador: 'Carlos Ramírez', valor: '1,780', stat: 'Yardas terrestres' },
    { jugador: 'Luis Hernández', valor: '1,320', stat: 'Yardas por recepción' },
    { jugador: 'José López', valor: '92.1%', stat: 'Precisión en goles de campo' }
  ];

  proximosPartidos = [
    { partido: 'Felinos vs Titanes', hora: 'Domingo 1:00 PM' },
    { partido: 'Huracanes vs Guerreros', hora: 'Domingo 4:30 PM' },
    { partido: 'Toros vs Dragones', hora: 'Lunes 8:00 PM' }
  ];

  noticias = [
    {
      titulo: 'Guerreros logran victoria histórica',
      descripcion: 'Con un ataque demoledor, los Guerreros del Sol vencieron a los Dragones de Fuego en un partido de infarto.',
      imagen: 'assets/img/260870xeva20250513081351.webp',
      tiempo: 'Hace 1 hora'
    },
    {
      titulo: 'Los Toros buscan asegurar playoffs',
      descripcion: 'Con una temporada sólida, los Toros Negros necesitan una victoria más para asegurar su pase.',
      imagen: 'assets/img/partidos-juegos-divisionales-nfl-foto.jpg',
      tiempo: 'Hace 3 horas'
    },
    {
      titulo: 'Los Toros buscan asegurar playoffs',
      descripcion: 'Con una temporada sólida, los Toros Negros necesitan una victoria más para asegurar su pase.',
      imagen: 'assets/img/LmpwZw.webp',
      tiempo: 'Hace 3 horas'
    },
    {
      titulo: 'Los Toros buscan asegurar playoffs',
      descripcion: 'Con una temporada sólida, los Toros Negros necesitan una victoria más para asegurar su pase.',
      imagen: 'assets/img/bD0xJTIwMng.png',
      tiempo: 'Hace 3 horas'
    }
  ];
    sponsors: Sponsor[] = [
    { logo: 'assets/img/Flag_of_FIFA.svg-removebg-preview.png' },
    { logo: 'assets/img/aacb1f5b763ceb73d759de43763d19f2-removebg-preview.png' },
    { logo: 'assets/img/images-removebg-preview.png' }
  ];
}