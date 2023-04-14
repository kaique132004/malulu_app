import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/srv/authentication.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private nav: NavController, private auth: AuthenticationService) { }

  ngOnInit() {
    if(localStorage.getItem('user') == null){
      this.nav.navigateBack('login');
    }
  }

  logout(){
    this.auth.logout();
    this.nav.navigateBack('login');
  }

  dados(){
    this.nav.navigateBack('dados');
  }

}
