import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Utiliser le localStorage pour récupérer la donnée d'authentification de l'utilisateur connecté.
  isAuth$ = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('loggedIn')));
  token: string;
  userId: string;

  constructor(private http: HttpClient) { }

  createNewUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        environment.URL + '/auth/signup',
        { email: email, password: password })
        .subscribe(
          () => {
            this.signInUser(email, password).then(
              () => {
                resolve();
              }
            ).catch(
              (error) => {
                reject(error);
              }
            );
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        environment.URL + '/auth/login',
        { email: email, password: password })
        .subscribe(
          (authData: { token: string, userId: string }) => {
            this.token = authData.token;
            console.log(this.token);
            this.userId = authData.userId;
            this.isAuth$.next(true);
            localStorage.setItem('loggedIn', 'true');
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  signOut() {
    this.isAuth$.next(false);
    this.userId = null;
    this.token = null;
    localStorage.setItem('loggedIn', 'false');
    console.log('Déconnexion de l utilisateur');
  }
  
}
