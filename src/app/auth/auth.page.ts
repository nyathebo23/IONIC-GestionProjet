import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss']
})
export class AuthPage {

  constructor() {}
  todo = {}
  logForm() {
    console.log(this.todo)
  }

}
