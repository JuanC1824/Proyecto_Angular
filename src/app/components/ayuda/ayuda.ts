import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [RouterModule, Nav],
  templateUrl: './ayuda.html',
  styleUrl: './ayuda.css'
})
export class Ayuda {

}