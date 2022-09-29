import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter';
  counter = 0
  incr(){
    this.counter--
  }
  returning(){
    this.counter = 0
  }
  decr(){
    this.counter++
  }
}
