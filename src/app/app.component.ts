import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public name = 'RafaelSama';
  public age = 26;
  public img = 'https://source.unsplash.com/random';
  public btnDisabled = true;

  person = {
    name: 'RafaelSama',
    age: 26,
    avatar: 'https://source.unsplash.com/random'
  }

  toggleButton () {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge() {
    this.person.age+=1;
  }
}
