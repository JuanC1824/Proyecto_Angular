import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';

interface Noticia {
  titulo: string;
  fecha: Date;
  resumen: string;
  categoria: string;
  imagen: string;
}

interface Partido {
  equipo1: string;
  equipo2: string;
  fecha: Date;
  estadio: string;
  estado: string;
  poster?: string;
  url?: string;
  imagen?: string;
}

interface Video {
  titulo: string;
  url: string;
  poster?: string;
}

interface Resultado {
  equipo1: string;
  equipo2: string;
  goles1: number;
  goles2: number;
  fecha: Date;
  imagen: string;
}

interface Estadistica {
  nombre: string;
  valor: string;
}

interface PartidoCalendario {
  local: string;
  visitante: string;
  golesLocal: number;
  golesVisitante: number;
  localLogo: string;
  visitanteLogo: string;
  fecha: Date;
}

interface Jornada {
  nombre: string;
  fecha: Date;
  partidos: PartidoCalendario[];
}

interface Analisis {
  titulo: string;
  resumen: string;
  imagen: string;
}

interface Sponsor {
  logo: string;
}

@Component({
  selector: 'app-soccer-sport',
  standalone: true,
  imports: [RouterModule, Nav, Footer, CommonModule],
  templateUrl: './soccer-sport.html',
  styleUrls: ['./soccer-sport.css']
})
export class SoccerSport {

  noticias: Noticia[] = [
    { titulo: 'Junior gana en Barranquilla', fecha: new Date(), resumen: 'Junior venció 2-1 a Santa Fe en un partido emocionante.', categoria: 'Liga BetPlay', imagen: 'assets/img/TBGIUIYYN5G5VEJYQEU4Z7YNBE.webp' },
    { titulo: 'Millonarios a la final', fecha: new Date(), resumen: 'Millonarios se clasifica a la final tras vencer a Nacional.', categoria: 'Liga BetPlay', imagen: 'assets/img/674a6f981035e.webp' },
    { titulo: 'Atlético Nacional sorprende', fecha: new Date(), resumen: 'Nacional golea 4-0 a América en Medellín.', categoria: 'Liga BetPlay', imagen: 'assets/img/5dabbf5f335be.webp' },
    { titulo: 'Atlético Nacional sorprende', fecha: new Date(), resumen: 'Nacional golea 4-0 a América en Medellín.', categoria: 'Liga BetPlay', imagen: 'assets/img/Deportes-Quindio-derrota-scaled.webp' },
    { titulo: 'Atlético Nacional sorprende', fecha: new Date(), resumen: 'Nacional golea 4-0 a América en Medellín.', categoria: 'Liga BetPlay', imagen: 'assets/img/Millonario-vencio-0-1-a-Nacional-en-el-Atanasio.webp' },
    { titulo: 'Atlético Nacional sorprende', fecha: new Date(), resumen: 'Nacional golea 4-0 a América en Medellín.', categoria: 'Liga BetPlay', imagen: 'assets/img/deportivo-pereira-juan-sebastian-quintero-podria-llegar-a-independiente-de-avellaneda-1176366.webp' }
  ];

  partidosEnVivo: Partido[] = [
    { equipo1: 'Santa Fe', equipo2: 'Junior', fecha: new Date(), estadio: 'El Campín', estado: 'En Vivo', url: 'assets/video/REAL OVIEDO 1 - 0 REAL SOCIEDAD _ RESUMEN LALIGA EA SPORTS.mp4' },
    { equipo1: 'Nacional', equipo2: 'Millonarios', fecha: new Date(), estadio: 'Atanasio Girardot', estado: 'En Vivo', url: 'assets/video/inter.mp4' }
  ];

  videos: Video[] = [
    { titulo: 'Resumen Junior vs Santa Fe', url: 'assets/video/REAL OVIEDO 1 - 0 REAL SOCIEDAD _ RESUMEN LALIGA EA SPORTS.mp4'},
    { titulo: 'Mejores goles de la jornada', url: 'assets/video/inter.mp4'},
    { titulo: 'Análisis táctico Millonarios', url: 'assets/video/LEVANTE UD 2 - 3 FC BARCELONA _ RESUMEN LALIGA EA SPORTS.mp4'}
  ];

  proximosPartidos: Partido[] = [
    { equipo1: 'América', equipo2: 'Independiente Medellín', fecha: new Date('2025-09-20'), estadio: 'Cali', estado: 'Próximo', poster: '', imagen: 'assets/img/partido.webp'},
    { equipo1: 'Once Caldas', equipo2: 'Atlético Nacional', fecha: new Date('2025-09-21'), estadio: 'Manizales', estado: 'Próximo', poster: 'assets/partido2.jpg', imagen: 'assets/img/naccaldas.webp' },
    { equipo1: 'DP Pereira', equipo2: 'La Equidad', fecha: new Date('2025-09-21'), estadio: 'Manizales', estado: 'Próximo', poster: 'assets/partido2.jpg', imagen: 'assets/img/1 (1).png' },
    { equipo1: 'Once Caldas', equipo2: 'Atlético Nacional', fecha: new Date('2025-09-21'), estadio: 'Manizales', estado: 'Próximo', poster: 'assets/partido2.jpg', imagen: 'assets/img/1 (2).png' }
  ];

  resultados: Resultado[] = [
    { equipo1: 'Equidad', equipo2: 'Santa Fe', goles1: 0, goles2: 0, fecha: new Date(), imagen: 'assets/img/la-equidad-fortaleza-fc-resultado-y-resumen-del-partido_862x485.webp' },
    { equipo1: 'Millonarios', equipo2: 'Nacional', goles1: 3, goles2: 2, fecha: new Date(), imagen: 'assets/img/Millonarios-vs.-Nacional.webp' }
  ];

  estadisticas: Estadistica[] = [
    { nombre: 'Máximos Goleadores', valor: 'Luis Díaz - 15 goles', },
    { nombre: 'Asistencias', valor: 'Jorman Campuzano - 8 asistencias' },
    { nombre: 'Porteros menos vencidos', valor: 'Camilo Vargas - 3 goles recibidos' }
  ];

  jornadas: Jornada[] = [
  {
    nombre: 'Jornada 1',
    fecha: new Date('2025-09-10'),
    partidos: [
      {
        local: 'Atlético Nacional',
        visitante: 'Millonarios',
        golesLocal: 2,
        golesVisitante: 1,
        localLogo: 'assets/img/3855.png',
        visitanteLogo: 'assets/img/4196.png',
        fecha: new Date('2025-09-10')
      },
      {
        local: 'América de Cali',
        visitante: 'Junior FC',
        golesLocal: 0,
        golesVisitante: 0,
        localLogo: 'assets/img/3952.png',
        visitanteLogo: 'assets/img/3851.png',
        fecha: new Date('2025-09-10')
      },
      {
        local: 'Deportivo Cali',
        visitante: 'Independiente Medellín',
        golesLocal: 1,
        golesVisitante: 1,
        localLogo: 'assets/img/4201.png',
        visitanteLogo: 'assets/img/4200.png',
        fecha: new Date('2025-09-10')
      },
      {
        local: 'Once Caldas',
        visitante: 'La Equidad',
        golesLocal: 0,
        golesVisitante: 2,
        localLogo: 'assets/img/4202.png',
        visitanteLogo: 'assets/img/3849.png',
        fecha: new Date('2025-09-10')
      },
      {
        local: 'Patriotas Boyacá',
        visitante: 'Alianza Petrolera',
        golesLocal: 1,
        golesVisitante: 3,
        localLogo: 'assets/img/descarga (9).png',
        visitanteLogo: 'assets/img/4199.png',
        fecha: new Date('2025-09-10')
      },
      {
        local: 'Cúcuta Deportivo',
        visitante: 'Atlético Huila',
        golesLocal: 3,
        golesVisitante: 3,
        localLogo: 'assets/img/cucuta.png',
        visitanteLogo: 'assets/img/huila.png',
        fecha: new Date('2025-09-10')
      },
      {
        local: 'Deportivo  Cali',
        visitante: 'Union Magdalena',
        golesLocal: 3,
        golesVisitante: 1,
        localLogo: 'assets/img/4201.png',
        visitanteLogo: 'assets/img/4229.png',
        fecha: new Date('2025-09-10')
      },
      {
        local: 'Deportivo Pereira',
        visitante: 'America de Cali',
        golesLocal: 2,
        golesVisitante: 1,
        localLogo: 'assets/img/3951.png',
        visitanteLogo: 'assets/img/3952.png',
        fecha: new Date('2025-09-10')
      },
      {
        local: 'Alianza FC',
        visitante: 'Once Caldas',
        golesLocal: 0,
        golesVisitante: 0,
        localLogo: 'assets/img/4199.png',
        visitanteLogo: 'assets/img/4202.png',
        fecha: new Date('2025-09-10')
      },
      {
        local: 'La Equidad',
        visitante: 'Llaneros',
        golesLocal: 2,
        golesVisitante: 1,
        localLogo: 'assets/img/3849.png',
        visitanteLogo: 'assets/img/4233.png',
        fecha: new Date('2025-09-10')
      }
    ]
  },
    {
      nombre: 'Jornada 2',
      fecha: new Date('2025-09-17'),
      partidos: [
        {
          local: 'Independiente Medellín',
          visitante: 'Deportivo Cali',
          golesLocal: 1,
          golesVisitante: 3,
          localLogo: 'assets/img/4200.png',
          visitanteLogo: 'assets/img/4201.png',
          fecha: new Date('2025-09-17')
        },
        {
          local: 'Llaneros',
          visitante: 'La Equidad',
          golesLocal: 3,
          golesVisitante: 1,
          localLogo: 'assets/img/4233.png',
          visitanteLogo: 'assets/img/3849.png',
          fecha: new Date('2025-09-17')
        },
        {
          local: 'Envigado',
          visitante: 'Deportivo Pereira',
          golesLocal: 1,
          golesVisitante: 1,
          localLogo: 'assets/img/3841.png',
          visitanteLogo: 'assets/img/3951.png',
          fecha: new Date('2025-09-17')
        },
        {
          local: 'Fortaleza',
          visitante: 'Santa Fe',
          golesLocal: 2,
          golesVisitante: 0,
          localLogo: 'assets/img/4197.png',
          visitanteLogo: 'assets/img/4194.png',
          fecha: new Date('2025-09-17')
        },
        {
          local: 'Millonarios',
          visitante: 'Junior',
          golesLocal: 3,
          golesVisitante: 0,
          localLogo: 'assets/img/4196.png',
          visitanteLogo: 'assets/img/3851.png',
          fecha: new Date('2025-09-17')
        },
        {
          local: 'Once Caldas',
          visitante: 'Tolima',
          golesLocal: 0,
          golesVisitante: 1,
          localLogo: 'assets/img/4202.png',
          visitanteLogo: 'assets/img/3840.png',
          fecha: new Date('2025-09-17')
        },
        {
          local: 'Union Magdalena',
          visitante: 'Alianza FC',
          golesLocal: 2,
          golesVisitante: 3,
          localLogo: 'assets/img/4229.png',
          visitanteLogo: 'assets/img/4197.png',
          fecha: new Date('2025-09-17')
        },
        {
          local: 'America de Cali',
          visitante: 'Nacional',
          golesLocal: 1,
          golesVisitante: 1,
          localLogo: 'assets/img/3952.png',
          visitanteLogo: 'assets/img/3855.png',
          fecha: new Date('2025-09-17')
        },
        {
          local: 'Atletico Bucaramanga',
          visitante: 'Rionegro Aguilas',
          golesLocal: 4,
          golesVisitante: 0,
          localLogo: 'assets/img/4227.png',
          visitanteLogo: 'assets/img/3850.png',
          fecha: new Date('2025-09-17')
        },
        {
          local: 'Chico',
          visitante: 'Deportivo Cali',
          golesLocal: 0,
          golesVisitante: 0,
          localLogo: 'assets/img/3848.png',
          visitanteLogo: 'assets/img/4201.png',
          fecha: new Date('2025-09-17')
        }
      ]
    }
  ];
  get equipos(): string[] {
    const allTeams = this.jornadas.flatMap(j => j.partidos.flatMap(p => [p.local, p.visitante]));
    return Array.from(new Set(allTeams));
  }

  resumenes: Analisis[] = [
    { titulo: 'Resumen Junior vs Santa Fe', resumen: 'Junior dominó la mayor parte del partido y logró mantener la ventaja hasta el final.', imagen: 'assets/img/TBGIUIYYN5G5VEJYQEU4Z7YNBE.webp' },
    { titulo: 'Análisis Nacional vs Millonarios', resumen: 'Millonarios mostró superioridad en la primera mitad, pero Nacional remontó en el segundo tiempo.', imagen: 'assets/img/UUVKVPYQLRBSLBEBRPZJQEAG2A.avif' }
  ];

  sponsors: Sponsor[] = [
    { logo: 'assets/img/Flag_of_FIFA.svg-removebg-preview.png' },
    { logo: 'assets/img/aacb1f5b763ceb73d759de43763d19f2-removebg-preview.png' },
    { logo: 'assets/img/images-removebg-preview.png' }
  ];
}