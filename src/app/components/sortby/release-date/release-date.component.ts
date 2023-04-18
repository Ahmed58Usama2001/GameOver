import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-release-date',
  templateUrl: './release-date.component.html',
  styleUrls: ['./release-date.component.css']
})
export class ReleaseDateComponent {
  constructor(private _GamesService: GamesService) { }


  loading: boolean = false

  ngOnInit(): void {
    this.showGames()
  }

  games: any[] = []

  showGames() {
    this.loading = true
    this._GamesService.getSortedGames('release-date').subscribe({
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
