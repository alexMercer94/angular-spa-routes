import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/interfaces/heroe';
import { HeroesSevice } from 'src/providers/heroes/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesSevice, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params[`termino`]);
      this.termino = params[`termino`];
      this.heroes = this.heroesService.burcarHeroes(params[`termino`]);
      console.log(this.heroes);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
