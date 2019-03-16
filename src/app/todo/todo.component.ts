import { Component, OnInit } from '@angular/core';

interface elementToDo
{
  nazwa: string;
  wykonane: boolean;
  czasWykonania: Date;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})

export class TodoComponent implements OnInit {

  public listaToDo: Array<elementToDo> = [];
  public inputTekst: string;
  constructor() { }

  dodaj()
  {
    let nowy: elementToDo = {nazwa: this.inputTekst, wykonane: false, czasWykonania: null};

    this.listaToDo.push(nowy);
    this.inputTekst = '';
  }

  usun(element)
  {
    this.listaToDo = this.listaToDo.filter(e => e !== element);
  }

  ngOnInit() {
  }

}
