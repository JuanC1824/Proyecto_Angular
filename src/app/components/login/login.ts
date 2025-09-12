import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer/footer';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, Nav, FormsModule, CommonModule, Footer],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  constructor(private router: Router, private authService: AuthService) {}

  loginData = {
    email: '',
    password: ''
  };

  onLogin() {
    if (!this.loginData.email || !this.loginData.password) {
      Swal.fire('Error', 'Por favor completa todos los campos', 'error');
      return;
    }

    const fullName = localStorage.getItem('user_' + this.loginData.email);

    if (fullName) {
      this.authService.login(fullName);

      Swal.fire({
        title: `Bienvenido, ${fullName}!`,
        text: 'Redirigiéndote...',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      }).then(() => this.router.navigate(['/home']));
    } else {
      Swal.fire('Error', 'Usuario no encontrado. Por favor regístrate primero.', 'error');
    }
  }
}