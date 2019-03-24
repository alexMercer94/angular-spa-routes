import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/interfaces/heroe';
import { HeroesSevice } from 'src/providers/heroes/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesSevice) {
    // Obtener el id de la url
    this.activatedRoute.params.subscribe(params => {
      // console.log(params[`id`]);
      this.heroe = this.heroeService.getHeroe(params[`id`]);
    });
  }

  ngOnInit() {}
}
