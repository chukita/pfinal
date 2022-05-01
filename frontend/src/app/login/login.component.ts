import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';  
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string = "probando cualquier valor";
  password: string = "";

  loginerror:string = "";

  constructor(private router:Router,private LoginService:LoginService,private route: ActivatedRoute) {}

  login() {
    //console.log(this.username);
    //console.log(this.password);

    const user = {username: this.username, password: this.password};

    this.LoginService.login(user).subscribe( data => {
      //console.log(data);
      if(data==null) this.loginerror = "Error!!";
      
      
      else {
        this.loginerror = "";
        this.LoginService.setToken(data.id);
        this.router.navigate(['/productos'])
      }

    });

  }

  ngOnInit(): void {
    
  }

}
