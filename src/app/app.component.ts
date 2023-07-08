import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'chapter-7';

  constructor() {}

  username: string = '';
  password: string = '';

  Check() {
    console.log(
      'username' + ' ' + this.username + ' ' + ' Password ' + this.password
    );
  }
  Enter() {
    if (this.username === 'K' && this.password === '123456') {
      alert('match');
    } else {
      alert('not match');
    }
  }

  ngOnInit(): void {}
}
