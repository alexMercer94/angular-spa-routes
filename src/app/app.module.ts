import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesSevice } from 'src/providers/heroes/heroes.service';
import { AboutComponent } from '../components/about/about.component';
import { BuscadorComponent } from '../components/buscador/buscador.component';
import { HeroeTarjetaComponent } from '../components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroeComponent } from '../components/heroe/heroe.component';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { HomeComponent } from '../components/home/home.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HeroesSevice],
  bootstrap: [AppComponent]
})
export class AppModule {}
