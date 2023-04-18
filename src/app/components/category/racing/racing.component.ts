import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-racing',
  templateUrl: './racing.component.html',
  styleUrls: ['./racing.component.css']
})
export class RacingComponent {
  constructor(private _GamesService: GamesService) { }


  loading: boolean = false

  ngOnInit(): void {
    this.showGames()
  }

  games: any[] = []

  showGames() {
    this.loading = true
    this._GamesService.getCategorizedGames('racing').subscribe({
      next: (response) => {

        this.games = response
        this.loading = false
      },
      error: (err) => {
        console.log(err);
        this.loading = true

      }
    })
  }
}
