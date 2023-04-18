import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-alphabetical',
  templateUrl: './alphabetical.component.html',
  styleUrls: ['./alphabetical.component.css']
})
export class AlphabeticalComponent {

  constructor(private _GamesService: GamesService) { }


  loading: boolean = false

  ngOnInit(): void {
    this.showGames()
  }

  games: any[] = []

  showGames() {
    this.loading = true
    this._GamesService.getSortedGames('alphabetical').subscribe({
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
