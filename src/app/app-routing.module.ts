import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { AllComponent } from './components/all/all.component';
import { ReleaseDateComponent } from './components/sortby/release-date/release-date.component';
import { PopularityComponent } from './components/sortby/popularity/popularity.component';
import { AlphabeticalComponent } from './components/sortby/alphabetical/alphabetical.component';
import { RelevanceComponent } from './components/sortby/relevance/relevance.component';
import { ActionComponent } from './components/category/action/action.component';
import { ActionRpgComponent } from './components/category/action-rpg/action-rpg.component';
import { BattleRoyalComponent } from './components/category/battle-royal/battle-royal.component';
import { FantasyComponent } from './components/category/fantasy/fantasy.component';
import { FlightComponent } from './components/category/flight/flight.component';
import { OpenWorldComponent } from './components/category/open-world/open-world.component';
import { RacingComponent } from './components/category/racing/racing.component';
import { ShooterComponent } from './components/category/shooter/shooter.component';
import { SocialComponent } from './components/category/social/social.component';
import { SportsComponent } from './components/category/sports/sports.component';
import { ZombieComponent } from './components/category/zombie/zombie.component';
import { PcComponent } from './components/platform/pc/pc.component';
import { BrowserComponent } from './components/platform/browser/browser.component';


const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'games/:id', canActivate: [AuthGuard], component: GameDetailsComponent },
  { path: 'sortby/release-date', canActivate: [AuthGuard], component: ReleaseDateComponent },
  { path: 'sortby/popularity', canActivate: [AuthGuard], component: PopularityComponent },
  { path: 'sortby/alphabetical', canActivate: [AuthGuard], component: AlphabeticalComponent },
  { path: 'sortby/relevance', canActivate: [AuthGuard], component: RelevanceComponent },
  { path: 'category/action', canActivate: [AuthGuard], component: ActionComponent },
  { path: 'category/action-rpg', canActivate: [AuthGuard], component: ActionRpgComponent },
  { path: 'category/Battle-Royal', canActivate: [AuthGuard], component: BattleRoyalComponent },
  { path: 'category/fantasy', canActivate: [AuthGuard], component: FantasyComponent },
  { path: 'category/flight', canActivate: [AuthGuard], component: FlightComponent },
  { path: 'category/open-world', canActivate: [AuthGuard], component: OpenWorldComponent },
  { path: 'category/racing', canActivate: [AuthGuard], component: RacingComponent },
  { path: 'category/shooter', canActivate: [AuthGuard], component: ShooterComponent },
  { path: 'category/social', canActivate: [AuthGuard], component: SocialComponent },
  { path: 'category/sports', canActivate: [AuthGuard], component: SportsComponent },
  { path: 'category/zombie', canActivate: [AuthGuard], component: ZombieComponent },
  { path: 'platform/pc', canActivate: [AuthGuard], component: PcComponent },
  { path: 'platform/browser', canActivate: [AuthGuard], component: BrowserComponent },
  { path: 'all', canActivate: [AuthGuard], component: AllComponent },


  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
