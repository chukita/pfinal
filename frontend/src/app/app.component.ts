import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = "Prueba";
  ulogged:string = "";

  constructor(public LoginService: LoginService) {}

  ngOnInit() {
    this.ulogged = this.LoginService.getUserLogged();
  }

  /*getUserLogged() {
    this.LoginService.getUser().subscribe(user => {
      console.log(user);
    });
  }*/

}
