import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome: any;
  email: any;
  senha: any;
  cpf: any;

  userData: any;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private nav: NavController, public formConst: FormBuilder,
  ) { }

  ngOnInit() {
  }

  cadastro() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.senha).then((res) => {
      console.log(res);

      this.afAuth.signInWithEmailAndPassword(this.email, this.senha).then(() => {
        this.nav.navigateBack('perfil');


        this.afAuth.authState.subscribe((user) => {
          if(user){
            this.userData = user;
            localStorage.setItem('user', JSON.stringify(this.userData));
            JSON.parse(localStorage.getItem('user')!);
          }
        })

        
      }).catch(() => {
        this.nav.navigateBack('login');
      });
    }).catch((res) => {
      console.error("erro : ", res);
    });
  }

}
