import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuth: boolean;

  constructor( private authservice: AuthService ) {

  }

  ngOnInit(): void {
    this.isAuth = false;
  }

  

}
