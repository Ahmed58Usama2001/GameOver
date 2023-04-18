import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-battle-royal',
  templateUrl: './battle-royal.component.html',
  styleUrls: ['./battle-royal.component.css']
})
export class BattleRoyalComponent {
  constructor(private _GamesService: GamesService) { }


  loading: boolean = false

  ngOnInit(): void {
    this.showGames()
  }

  games: any[] = []

  showGames() {
    this.loading = true
    this._GamesService.getCategorizedGames('Battle-Royale').subscribe({
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
