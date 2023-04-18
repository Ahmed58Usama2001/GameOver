import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _HttpClient: HttpClient) {

  }

  headers = new HttpHeaders({
    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  });






  getSortedGames(sortingCriteria: string): Observable<any> {
    let params = new HttpParams().set('sort-by', sortingCriteria);
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sortingCriteria}`, { headers: this.headers, params: params });
  }

  getGameDetails(gameId: number): Observable<any> {
    let params = new HttpParams().set('id', gameId.toString());
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`, { headers: this.headers, params: params });
  }

  getAllGames(): Observable<any> {

    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, { headers: this.headers });
  }

  getCategorizedGames(category: string): Observable<any> {
    let params = new HttpParams().set('category', category);
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, { headers: this.headers, params: params });
  }

  getplatformGames(platform: string): Observable<any> {
    let params = new HttpParams().set('Platform', platform);
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, { headers: this.headers, params: params });
  }

}
