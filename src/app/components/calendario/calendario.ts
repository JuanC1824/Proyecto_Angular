import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-calendario',
  imports: [RouterModule, Nav, Footer],
  templateUrl: './calendario.html',
  styleUrls: ['./calendario.css']
})
export class Calendario {

}