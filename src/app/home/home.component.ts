import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  tekst: string = 'cos mozna wpisac';
  tekst1 = 'cos tam';
  l1: number = 10;
  l2 = 10.22222;
  l3: number;
  tablica: string[] = ['adasdas','dasdasd'];
  listy: Array<number> = [10,11];
  data: Date = new Date();


  constructor() { }

  ngOnInit() {
    this.l3 = this.l2 * this.l1;
  }

}
