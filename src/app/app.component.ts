import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class CounterComponent {
  title = 'counter';
  max =  localStorage.getItem('max')||10

  counter = 0
  firstValue = localStorage.getItem('firstValue')||0
  min = localStorage.getItem('max')||-10
  incr(){
    this.counter--
  }
  returning(){
    this.counter = Number(this.firstValue)
    this.max = 10
    this.min = -10
  }
  decr(){
    this.counter++
  }
  saving(){
    
    Number(localStorage.setItem('max', this.max+''));
    Number(localStorage.setItem('min', this.min+''));
    Number(localStorage.setItem('firstValue', this.firstValue+''));
  }
  maximum(){
    this.max = this.counter
    this.max = Number(localStorage.setItem('max', this.max+''));
  }
  minimum(){
    this.min = this.counter
    this.min = Number(localStorage.setItem('min', this.min+''));
  }

}
