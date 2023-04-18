import { GamesService } from 'src/app/services/games.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private _AuthService: AuthService, private _Router: Router, private _GamesService: GamesService) { }

  isLogin: boolean = false;

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() != null)
          this.isLogin = true
        else
          this.isLogin = false
      }
    })
  }


  logout() {
    this._AuthService.signout()
  }



}
