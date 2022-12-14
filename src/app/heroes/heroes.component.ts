import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  showInputField = false;
  updateHero: any;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    console.log(name)
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        // this.heroes.push(hero);
        console.log(this.heroes)
        this.getHeroes();
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  update(hero: Hero, hname: string): void {
    this.heroService.updateHero(hname, hero.id)
      .subscribe(hero => {
        console.log(this.heroes);
        this.getHeroes();
      });
  }

  showFields(event: any, hero: any) {
    console.log("event", event);
    this.updateHero = hero;
    this.showInputField = true;
  }

}