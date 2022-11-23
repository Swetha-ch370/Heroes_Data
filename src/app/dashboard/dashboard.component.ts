import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})


export class DashboardComponent implements OnInit {
  Hero:any;
  //hi = "hello"
  heroes: Hero[] = [];
  constructor(private httpClient:HttpClient) {
    this.Hero=[];
   }

  // constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
   
  }

  getHeroes(): void {
    // var bye = "bye"
    // this.heroService.getHeroes()
    //   .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    this.httpClient.get('http://localhost:3000/details/ ').subscribe((result:any)=>
    {
      this.Hero=result;
     console.log(result);
    });
  }
}