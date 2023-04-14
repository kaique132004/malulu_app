import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  nome: any;
  cpf: any;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  ngOnInit() {
  }

  async alterar() {
    const user = JSON.parse(localStorage.getItem('user')!)


    this.afs.collection('users').doc(user.uid).set({
      nome: this.nome,
      cpf: this.cpf,
    }).then(() =>{
      console.log('SUCESSO');
    }).catch((res) => {
      console.error("Erro : ", res);
    })
  }

}
