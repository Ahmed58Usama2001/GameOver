import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.css']
})
export class PopularityComponent {
  constructor(private _GamesService: GamesService) { }


  loading: boolean = false

  ngOnInit(): void {
    this.showGames()
  }

  games: any[] = []

  showGames() {
    this.loading = true
    this._GamesService.getSortedGames('popularity').subscribe({
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
