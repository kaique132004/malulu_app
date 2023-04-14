import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/srv/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  senha: any;


  constructor(private auth: AuthenticationService, private nav: NavController) {
   }

  ngOnInit() {
  }

  async Login(){
    const token = await this.auth.login(this.email, this.senha).then(() => {
      this.nav.navigateBack('perfil');
    }).catch((res) => {
      console.error("Erro ao Logar na conta ", res);
      this.senha = '';
    });
    console.log('Token de acesso:', token);
  }

  async GoogleAuth(){
    const token = await this.auth.loginWithGoogle().then(() => {
      this.nav.navigateBack('perfil');
    }).catch((res) => {
      console.error("Erro ao logar com google, COD ERROR: ", res)
    });
    console.log('Token de acesso:', token);

  }

}
