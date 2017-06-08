import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
 styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	ngOnInit(): void {
		this.getHeroes();
	}

	constructor(
		private router: Router,
		private heroService: HeroService
	) { }

	heroes: Hero[];
	selectedHero: Hero;

	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
