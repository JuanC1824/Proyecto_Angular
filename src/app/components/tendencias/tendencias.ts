import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';

interface Tendencia {
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen: string;
}

@Component({
  selector: 'app-tendencias',
  standalone: true,
  imports: [CommonModule, RouterModule, Nav, Footer],
  templateUrl: './tendencias.html',
  styleUrls: ['./tendencias.css']
})
export class TendenciasComponent {
  tendencias: Tendencia[] = [
    { titulo:'Golazo de Luis Díaz', descripcion:'Luis Díaz marca un golazo para Liverpool', categoria:'Fútbol', imagen:'assets/img/i.jpg' },
    { titulo:'Copa Colombia emocionante', descripcion:'Partidos llenos de sorpresas y emoción', categoria:'Liga Colombiana', imagen:'assets/img/529225505_1197457019089989_4616803724411810624_n.jpg' },
    { titulo:'Junior clasifica a final', descripcion:'Junior asegura su paso a la final con gran actuación', categoria:'Liga BetPlay', imagen:'assets/img/https___cloudfront-us-east-1.images.arcpublishing.com_prisaradioco_DMBY3T2GMZBEXPZQO2J3KP5PWE.avif' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/XZX2Q5BSTRMSXEVQA3ZGKR4TDA.jpg' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/KAKXFMJIEFCMRLCBQWL6QAXFA4.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/NDA3MWYuanBlZw.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/SZZXUT2PZJEKBI567OSVECSIKU.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/DDDD-1.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/PTY4OSw0MDU.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/Junior-2021-3.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/Bucaramanga-pierde-a-una-pieza-clave-por-lesion-AFP.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/NTAyZDEuanBlZw (1).webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/637c40557952b.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/imagen-12416186-2.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/WTQSORLLXVF7HHHFM2XDKQJY34.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/ZTRASI2DR5EULJWMEZWVZ2PZRM.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/TBGIUIYYN5G5VEJYQEU4Z7YNBE.webp' },
    { titulo:'Análisis táctico Millonarios', descripcion:'Millonarios domina en posesión y efectividad', categoria:'Análisis', imagen:'assets/img/5dabbf5f335be.webp' }
  ];

  hoverIndex: number | null = null;

  Listatendencias = [
    {
      imagen: 'assets/imagen1.jpg',
      titulo: 'Trend 1',
      descripcion: 'Descripción de la tendencia 1',
      categoria: 'Moda'
    },
    {
      imagen: 'assets/imagen2.jpg',
      titulo: 'Trend 2',
      descripcion: 'Descripción de la tendencia 2',
      categoria: 'Tecnología'
    },
    {
      imagen: 'assets/imagen3.jpg',
      titulo: 'Trend 3',
      descripcion: 'Descripción de la tendencia 3',
      categoria: 'Entretenimiento'
    }
  ];

  obtenerEstilo(index: number) {
    return this.hoverIndex === index
      ? {
          backgroundColor: '#519ee5ff',
          color: '#1a1a1a',
          transform: 'translateY(-5px) scale(1.05)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
          transition: '0.3s'
        }
      : {
          backgroundColor: '#1a1a1a',
          color: '#fff',
          transform: 'translateY(0) scale(1)',
          transition: '0.3s'
        };
  }
}