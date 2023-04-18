import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GameDetailsComponent } from './components/game-details/game-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AllComponent } from './components/all/all.component';
import { ReleaseDateComponent } from './components/sortby/release-date/release-date.component';
import { PopularityComponent } from './components/sortby/popularity/popularity.component';
import { AlphabeticalComponent } from './components/sortby/alphabetical/alphabetical.component';
import { RelevanceComponent } from './components/sortby/relevance/relevance.component';
import { RacingComponent } from './components/category/racing/racing.component';
import { SportsComponent } from './components/category/sports/sports.component';
import { SocialComponent } from './components/category/social/social.component';
import { ShooterComponent } from './components/category/shooter/shooter.component';
import { OpenWorldComponent } from './components/category/open-world/open-world.component';
import { ZombieComponent } from './components/category/zombie/zombie.component';
import { FantasyComponent } from './components/category/fantasy/fantasy.component';
import { ActionRpgComponent } from './components/category/action-rpg/action-rpg.component';
import { ActionComponent } from './components/category/action/action.component';
import { FlightComponent } from './components/category/flight/flight.component';
import { BattleRoyalComponent } from './components/category/battle-royal/battle-royal.component';
import { PcComponent } from './components/platform/pc/pc.component';
import { BrowserComponent } from './components/platform/browser/browser.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    GameDetailsComponent,
    AllComponent,
    ReleaseDateComponent,
    PopularityComponent,
    AlphabeticalComponent,
    RelevanceComponent,
    RacingComponent,
    SportsComponent,
    SocialComponent,
    ShooterComponent,
    OpenWorldComponent,
    ZombieComponent,
    FantasyComponent,
    ActionRpgComponent,
    ActionComponent,
    FlightComponent,
    BattleRoyalComponent,
    PcComponent,
    BrowserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
