import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  constructor(private _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute) { }
  loading: boolean = false
  gameId: any = null


  ngOnInit(): void {
    this.gameId = this._ActivatedRoute.snapshot.params['id']
    this.showGameDetails(this.gameId)
  }

  gameData: any = null

  showGameDetails(gameId: any) {
    this.loading = true
    this._GamesService.getGameDetails(gameId).subscribe({
      next: (response) => {
        this.gameData = response
        console.log(response);

        this.loading = false
      },
      error: (err) => {
        console.log(err);
        this.loading = false
      }
    })
  }


}
