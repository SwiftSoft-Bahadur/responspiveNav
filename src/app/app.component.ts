import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'bootstrapingAngApp';
  status = 'You haven\'t signed up yet';
  name = '';

  ontyping(event: Event) {

    this.name = (<HTMLInputElement>event.target).value;
  }
  signup() {

    this.status = 'Oops! We are working on it!';

  }
}
