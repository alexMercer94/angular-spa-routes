import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/interfaces/heroe';
import { HeroesSevice } from 'src/providers/heroes/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesSevice, private router: Router) {}

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
