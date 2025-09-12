import { Component , OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

interface NoticiaDeportiva {
  id: number;
  titulo: string;
  resumen: string;
  imagen: string;
  categoria: string;
  fecha: Date;
  fechaISO: string;
  autor: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Nav, Footer, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit{
  noticias: NoticiaDeportiva[] = [
    {
      id: 1,
      titulo: 'Colombia vs. Bolivia: reviva el minuto a minuto del partido',
      resumen:
        'Rodó la en el estadio Metropolitano de Barranquilla y la Selección Colombia definió su clasificación al Mundial de Estados Unidos, México y Canadá 2026 tras golear 3-0 al combinado nacional de Bolivia en la fecha 17 de las Eliminatorias Conmebol.',
      imagen: 'assets/img/i.jpg',
      categoria: 'Fútbol',
      fecha: new Date('2025-09-04T18:30:00'),
      fechaISO: '2025-09-01T18:30:00Z',
      autor: 'Juan Pérez'
    },
    {
      id: 2,
      titulo: 'NBA: Récord histórico para el mejor jugador',
      resumen:
        'En un partido inolvidable, el jugador estrella logró un récord personal con 62 puntos, superando su marca anterior y guiando a su equipo a una victoria contundente.',
      imagen: 'assets/img/scale.webp',
      categoria: 'Baloncesto',
      fecha: new Date('2025-08-29T20:00:00'),
      fechaISO: '2025-08-29T20:00:00Z',
      autor: 'María López'
    },
    {
      id: 3,
      titulo: 'Tenis: Gran final en Wimbledon',
      resumen:
        'La final de Wimbledon fue un duelo épico que mantuvo a millones de espectadores expectantes, terminando en cinco sets con un sorprendente triunfo del favorito local.',
      imagen: 'assets/img/i (1).jpg',
      categoria: 'Tenis',
      fecha: new Date('2025-07-15T15:00:00'),
      fechaISO: '2025-07-15T15:00:00Z',
      autor: 'Carlos Ramírez'
    },
    {
      id: 4,
      titulo: 'Boxeo: Nuevos récords olímpicos',
      resumen:
        'Los nadadores más destacados rompieron múltiples récords olímpicos en la última competición, demostrando el avance de la natación competitiva a nivel mundial.',
      imagen: 'assets/img/i (2).jpg',
      categoria: 'Boxeo',
      fecha: new Date('2025-08-10T10:00:00'),
      fechaISO: '2025-08-10T10:00:00Z',
      autor: 'Laura Gómez'
    },
    {
      id: 5,
      titulo: 'Atletismo: Promesas emergentes en el mundial',
      resumen:
        'Las nuevas generaciones de atletas están destacando en las pruebas mundiales, con tiempos y marcas que prometen revolucionar el deporte en los próximos años.',
      imagen: 'assets/img/i (3).jpg',
      categoria: 'Atletismo',
      fecha: new Date('2025-09-03T12:00:00'),
      fechaISO: '2025-09-03T12:00:00Z',
      autor: 'Miguel Torres'
    },
    {
      id: 6,
      titulo: 'Béisbol: Promesas emergentes en el mundial',
      resumen:
        'Las nuevas generaciones de atletas están destacando en las pruebas mundiales, con tiempos y marcas que prometen revolucionar el deporte en los próximos años.',
      imagen: 'assets/img/descarga (4).jpg',
      categoria: 'Béisbol',
      fecha: new Date('2025-09-03T12:00:00'),
      fechaISO: '2025-09-03T12:00:00Z',
      autor: 'Miguel Torres'
    }
  ];

   videos = [
    { url: 'assets/video/REAL OVIEDO 1 - 0 REAL SOCIEDAD _ RESUMEN LALIGA EA SPORTS.mp4', descripcion: 'Real oviedo vs Real Sociedad' },
    { url: 'assets/video/REAL OVIEDO 1 - 0 REAL SOCIEDAD _ RESUMEN LALIGA EA SPORTS.mp4', descripcion: 'Liverpool vs Manchester City' },
    { url: 'assets/video/REAL OVIEDO 1 - 0 REAL SOCIEDAD _ RESUMEN LALIGA EA SPORTS.mp4', descripcion: 'PSG vs Lyon' },
    { url: 'assets/video/REAL OVIEDO 1 - 0 REAL SOCIEDAD _ RESUMEN LALIGA EA SPORTS.mp4', descripcion: 'Bayern Munich highlights' }
  ];

   deportes = [
    { nombre: 'Fútbol', imagen: 'assets/img/image (2).webp' },
    { nombre: 'Boxeo', imagen: 'assets/img/image (3).webp' },
    { nombre: 'Nfl', imagen: 'assets/img/image (1).webp' },
  ];

isLoggedIn!: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.loggedIn$;
  }

  showRegisterAlert() {
    const confirmacion = confirm(
      "Debes registrarte primero para poder ver este video. ¿Deseas registrarte ahora?"
    );
    if (confirmacion) {
      this.router.navigate(['/register']);
    }
  }
}