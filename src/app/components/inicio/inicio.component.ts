import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }
  
    ngOnInit() {
      this.auth.isAuthenticated$.subscribe(isAuthenticated => {
        if(isAuthenticated) {
          this.router.navigate(['/dashboard']);
        }
      })
    }

    login(){
      this.auth.loginWithRedirect()
    }

}
