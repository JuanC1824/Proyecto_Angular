import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';

interface Noticia { titulo: string; fecha: Date; lugar: string; resumen?: string; categoria?: string; imagen?: string; }
interface Combate { luchador1: string; luchador2: string; fecha: Date; lugar: string; imagen?: string; estado?: string; url?: string; poster?: string; }
interface Video { titulo: string; url: string; poster?: string; }
interface Resultado { luchador1: string; luchador2: string; puntaje1: number; puntaje2: number; fecha: Date; imagen?: string; }
interface Estadistica { nombre: string; valor: string; detalle?: string; }
interface Ranking { nombre: string; pais: string; record: string; img: string; }
interface Analisis { titulo: string; resumen: string; imagen?: string; }
interface Sponsor { logo: string; }

@Component({
  selector: 'app-boxeo-sport',
  standalone: true,
  imports: [RouterModule, Nav, Footer, CommonModule],
  templateUrl: './boxeo-sport.html',
  styleUrls: ['./boxeo-sport.css']
})
export class BoxeoSport implements AfterViewInit {

  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

  cardWidth: number = 0;
  currentScroll: number = 0;

  noticias: Noticia[] = [
    { titulo:'Pelea de campeonato', fecha:new Date(), lugar:'Madison Square Garden', resumen:'Combate histórico', categoria:'Campeonato', imagen:'assets/img/canelo-vs-golovkin-las-mejores-imagenes-de-la-pelea-de-trilogia-4.jpg' }
  ];

  combates: Combate[] = [
    { luchador1:'Canelo Álvarez', luchador2:'Gennady Golovkin', fecha:new Date(), lugar:'T-Mobile Arena', imagen:'assets/img/Golovkin-Canelo_fight_poster.jpg', estado:'Próximo', url:'assets/video/videoplayback.mp4', poster:'assets/img/Growth_Home_of_Boxing_Spotlight_Desktop_2x.webp' },
    { luchador1:'Canelo Álvarez', luchador2:'Gennady Golovkin', fecha:new Date(), lugar:'T-Mobile Arena', imagen:'assets/img/66eaa773b8204.jpeg', estado:'Próximo', url:'assets/video/videoplayback.mp4', poster:'assets/img/Growth_Home_of_Boxing_Spotlight_Desktop_2x.webp' },
    { luchador1:'Canelo Álvarez', luchador2:'Gennady Golovkin', fecha:new Date(), lugar:'T-Mobile Arena', imagen:'assets/img/17240889940000.jpg', estado:'Próximo', url:'assets/video/videoplayback.mp4', poster:'assets/img/Growth_Home_of_Boxing_Spotlight_Desktop_2x.webp' },
    { luchador1:'Canelo Álvarez', luchador2:'Gennady Golovkin', fecha:new Date(), lugar:'T-Mobile Arena', imagen:'assets/img/images (1).jpg', estado:'Próximo', url:'assets/video/Cruz vs Gamboa FULL FIGHT_ April 16, 2022 _ PBC on Showtime PPV (1).mp4', poster:'assets/img/Growth_Home_of_Boxing_Spotlight_Desktop_2x.webp' },
    { luchador1:'Canelo Álvarez', luchador2:'Gennady Golovkin', fecha:new Date(), lugar:'T-Mobile Arena', imagen:'assets/img/peleas-box-agosto-horarios-cartelera.jfif', estado:'Próximo', url:'assets/video/Cruz vs Gamboa FULL FIGHT_ April 16, 2022 _ PBC on Showtime PPV (1).mp4', poster:'assets/img/Growth_Home_of_Boxing_Spotlight_Desktop_2x.webp' },
    { luchador1:'Canelo Álvarez', luchador2:'Gennady Golovkin', fecha:new Date(), lugar:'T-Mobile Arena', imagen:'assets/img/17184869062029.jpg', estado:'Próximo', url:'assets/video/Cruz vs Gamboa FULL FIGHT_ April 16, 2022 _ PBC on Showtime PPV (1).mp4', poster:'assets/img/Growth_Home_of_Boxing_Spotlight_Desktop_2x.webp' }
  ];

  combatesEnVivo: Combate[] = [
    { luchador1:'Jake Paul', luchador2:'Tommy Fury', fecha:new Date(), lugar:'Las Vegas', imagen:'assets/live1.jpg', estado:'En Vivo', url:'assets/video/videoplayback.mp4',  },
    { luchador1:'Jake Paul', luchador2:'Tommy Fury', fecha:new Date(), lugar:'Las Vegas', imagen:'assets/live1.jpg', estado:'En Vivo', url:'assets/video/videoplayback.mp4',  }
  ];

  videos: Video[] = [
    { titulo:'Cruz VS Gamboa Pelea completa', url:'assets/video/Cruz vs Gamboa FULL FIGHT_ April 16, 2022 _ PBC on Showtime PPV (1).mp4'},
    { titulo:'Canelo Álvarez (Mexico) vs Edgar Berlanga (Puerto Rico)', url:'assets/video/Canelo Álvarez (Mexico) vs Edgar Berlanga (Puerto Rico) BOXING HIGHLIGHTS - The Boxing Round Up (1080p, h264).mp4'},
    { titulo:'Daniel Dubois (England) vs Kevin Lerena (South Africa)', url:'assets/video/Daniel Dubois (England) vs Kevin Lerena (South Africa) BOXING KNOCKOUT HIGHLIGHTS - The Boxing Round Up (1080p, h264).mp4'},
    { titulo:'Manny Pacquiao (Philippines) vs Adrien Broner (USA)', url:'assets/video/Manny Pacquiao (Philippines) vs Adrien Broner (USA) BOXING HIGHLIGHTS - The Boxing Round Up (1080p, h264).mp4'},
    { titulo:'Naoya Inoue (Japan) vs Paul Butler (England)', url:'assets/video/Naoya Inoue (Japan) vs Paul Butler (England) BOXING KNOCKOUT HIGHLIGHTS - The Boxing Round Up (1080p, h264).mp4'},
    { titulo:'David Benavidez (USA) vs David Lemieux (Canada)', url:'assets/video/David Benavidez (USA) vs David Lemieux (Canada) BOXING KNOCKOUT HIGHLIGHTS - The Boxing Round Up (1080p, h264).mp4'},
    { titulo:'Terence Crawford (USA) vs John Molina Jr (USA)', url:'assets/video/Terence Crawford (USA) vs John Molina Jr (USA) BOXING KNOCKOUT HIGHLIGHTS - The Boxing Round Up (1080p, h264).mp4'},
    { titulo:'Lo mejor del combate', url:'assets/video/videoplayback.mp4'},
    { titulo:'Luis Alberto Lopez (Mexico) vs Angelo Leo (USA)', url:'assets/video/Luis Alberto Lopez (Mexico) vs Angelo Leo (USA) BOXING KNOCKOUT HIGHLIGHTS - The Boxing Round Up (1080p, h264).mp4'},
    { titulo:'Vasyl Lomachenko (Ukraine) vs Teofimo Lopez (USA)', url:'assets/video/Vasyl Lomachenko (Ukraine) vs Teofimo Lopez (USA) BOXING HIGHLIGHTS - The Boxing Round Up (1080p, h264).mp4'}
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.carousel?.nativeElement?.children.length > 0) {
        this.cardWidth = this.carousel.nativeElement.children[0].clientWidth + 20;
      }
    }, 0);
  }

  scrollLeft() {
    this.currentScroll -= this.cardWidth;
    if (this.currentScroll < 0) {
      this.currentScroll = this.cardWidth * (this.videos.length - 1);
    }
    this.scrollToCurrent();
  }

  scrollRight() {
    this.currentScroll += this.cardWidth;
    if (this.currentScroll > this.cardWidth * (this.videos.length - 1)) {
      this.currentScroll = 0;
    }
    this.scrollToCurrent();
  }

  private scrollToCurrent(): void {
    if (this.carousel?.nativeElement) {
      this.carousel.nativeElement.scrollTo({
        left: this.currentScroll,
        behavior: 'smooth'
      });
    }
  }

  onVideoPlay(event: Event): void {
    if (!this.carousel) return;
    const currentVideo = event.target as HTMLVideoElement;
    const allVideos = this.carousel.nativeElement.querySelectorAll('video');
    allVideos.forEach((video: HTMLVideoElement) => {
      if (video !== currentVideo) {
        video.pause();
      }
    });
  }

  resultados: Resultado[] = [
    { luchador1:'Fighter A', luchador2:'Fighter B', puntaje1:120, puntaje2:115, fecha:new Date(), imagen:'assets/img/barrera-vs-marquez-especial.webp' }
  ];

  estadisticas: Estadistica[] = [
    { nombre: 'Knockouts', valor: '15', detalle: '75% KO rate' },
    { nombre: 'Victorias', valor: '20', detalle: 'Última victoria en 2025' },
    { nombre: 'Derrotas', valor: '2', detalle: 'Ambas por decisión' },
    { nombre: 'Empates', valor: '1', detalle: 'Contra un invicto' },
  ];

  ranking: Ranking[] = [
    { nombre: 'Terence Crawford', pais: '🇺🇸 USA', record: '40-0-0', img: 'assets/img/terrence.png' },
    { nombre: 'Naoya Inoue', pais: '🇯🇵 Japón', record: '27-0-0', img: 'assets/img/200px-628407.jpeg' },
    { nombre: 'Oleksandr Usyk', pais: '🇺🇦 Ucrania', record: '22-0-0', img: 'assets/img/Oleksandr_Usyk_in_Kyiv,_Ukraine_on_31_December_2024_(cropped).jpg' },
    { nombre: 'Canelo Álvarez', pais: '🇲🇽 México', record: '60-2-2', img: 'assets/img/Saúl_Álvarez.png' },
    { nombre: 'Gervonta Davis', pais: '🇺🇸 USA', record: '30-0-0', img: 'assets/img/Gervonta_Icebox_2018.jpg' },
  ];

  resumenes: Analisis[] = [
    { titulo:'Analisis del combate', resumen:'Detalles del combate reciente', imagen:'assets/img/floyd_maidana.jpg' }
  ];

  sponsors: Sponsor[] = [
    { logo: 'assets/img/Flag_of_FIFA.svg-removebg-preview.png' },
    { logo: 'assets/img/aacb1f5b763ceb73d759de43763d19f2-removebg-preview.png' },
    { logo: 'assets/img/images-removebg-preview.png' }
  ];
}