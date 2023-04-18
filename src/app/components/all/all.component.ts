import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {

  constructor(private _GamesService: GamesService) { }

  loading: boolean = false

  ngOnInit(): void {
    this.showAllGames()
  }

  allGames: any[] = []



  showAllGames() {
    this.loading = true
    this._GamesService.getAllGames().subscribe({
      next: (response) => {
        this.allGames = response
        this.loading = false
      },
      error: (err) => {
        console.log(err);
        this.loading = false
      }
    }
    )
  }


}
