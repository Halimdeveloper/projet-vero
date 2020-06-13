import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private isAuthSub: Subscription;
  isAuth: boolean;

  constructor( private router: Router,
                private authService: AuthService ) {}

  ngOnInit(): void {
    this.isAuthSub = this.authService.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
        console.log(this.isAuth);
      }
    );

    if (this.isAuth) {
      this.router.navigate(['dashboard']);
    } else {
      // this.router.navigate(['auth/signup']);
      console.log("pas connecté");
    }
  }


  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['auth/signin']);
  }

  ngOnDestroy() {
    this.isAuthSub.unsubscribe();
  }

}
