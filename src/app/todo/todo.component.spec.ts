import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;


 beforeEach(()=>{
  component = new TodoComponent();
  component.inputTekst = "testujemy";
    component.dodaj();

  });

  it('czy dodało', () => {
      let x = component.listaToDo.filter(e => e == "testujemy").length == 1;
      console.log(x);
      expect(x).toBeTruthy();
  });

});
