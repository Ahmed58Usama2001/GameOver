import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _GamesService: GamesService) { }

  mostPopular3: any[] = []

  ngOnInit(): void {
    this.getHomeRecommendations()
  }

  loading: boolean = false

  getHomeRecommendations() {
    this.loading = true
    this._GamesService.getSortedGames('popularity').subscribe({
      next: (response) => {
        if (response && response.length > 0) {
          this.mostPopular3 = response.slice(0, 3);
        }
        this.loading = false
      },
      error: (err) => {
        this.loading = false
        console.log(err);
      }
    })


  }


}
