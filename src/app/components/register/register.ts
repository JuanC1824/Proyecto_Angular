import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Nav } from '../nav/nav';
import { FormsModule } from '@angular/forms';
import { Footer } from '../footer/footer';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, Nav, FormsModule, Footer, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  constructor(private router: Router, private authService: AuthService) {}

  registerData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onRegister() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!this.registerData.fullName || !this.registerData.email || !this.registerData.password) {
      alert('Por favor completa todos los campos');
      return;
    }

    localStorage.setItem('user_' + this.registerData.email, this.registerData.fullName);

    this.authService.login(this.registerData.fullName);

    Swal.fire({
      title: `Bienvenido, ${this.registerData.fullName}!`,
      text: 'Redirigiéndote...',
      icon: 'success',
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 2000,
      didOpen: () => Swal.showLoading()
    }).then(() => {
      this.router.navigate(['/home']);
    });
  }
}