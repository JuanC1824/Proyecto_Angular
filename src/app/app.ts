import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { ScrollTopComponent } from './scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollTopComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('pagina');

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
}
