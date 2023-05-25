import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

 
    username!: string;
    password!: string;
  
    constructor(private router: Router) {}
  ngOnInit(): void {
    
  }
  
    login() {
      // Ici, vous pouvez implémenter la logique de vérification des informations d'identification,
      // par exemple, en utilisant un service d'authentification ou en effectuant une requête HTTP.
  
      // Si les informations d'identification sont valides, vous pouvez rediriger l'utilisateur vers une autre page.
      // Par exemple, pour rediriger vers une page "Accueil" après la connexion :
      this.router.navigateByUrl('/home');
    }
  

}
