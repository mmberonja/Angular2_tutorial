import { Component } from '@angular/core';

import { Hero } from './hero/hero';

@Component({
  selector: 'my-app',
  templateUrl: 'app/template/home.html',
  styles: [`
      .heroesCl li{
        cursor: pointer;
        color: seagreen;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 100%;
      } 
  `]
})
export class AppComponent  { 

    //brojac: number;
    brojac:number = 20;
    selectedHero: any;
    title:string; 
    myHeroArray:string[];
    myHero:string;
    broj:number;
    heroesClass = [
       new Hero(1,'Windstorm'),
       new Hero(13,'Bombasto'),
       new Hero(15,'Magneta'),
       new Hero(20,'Tornado'),
    ];

    addHero(newHero: string){

      if(newHero){

        this.brojac++;
        this.heroesClass.push(new Hero(this.brojac,newHero))

      }

    }

    delete(hero : Hero)
    {
        if(hero){

            console.log("Mickoko" + this.heroesClass.indexOf(hero))
            this.heroesClass.splice(this.heroesClass.indexOf(hero), 1);
        }

    }
    onSelect(hero : Hero){

         //console.log("Mickoko")
         //console.log("Mickoko" + hero.id)
         this.selectedHero = hero;
    }

    constructor(){

      this.title = 'Tour of Heroes';
      this.myHero = 'Windstorm';
      this.myHeroArray = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
      this.broj = 11;
    }
}

