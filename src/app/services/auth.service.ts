import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  private currentUser = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUser.asObservable();

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.loggedIn.next(true);
      this.currentUser.next(user);
    }
  }

  login(username: string) {
    localStorage.setItem('user', username);
    this.loggedIn.next(true);
    this.currentUser.next(username);
  }

  logout() {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.currentUser.next(null);
  }
}