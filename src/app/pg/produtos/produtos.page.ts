import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthenticationService } from '../../srv/authentication.service';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {



  produto: any;

  id: any;
  nome: any;
  preco: any;
  descricao: any;
  img: any;

  myForm: any;

  produtos: Array<{
    id: any,
    nome: any,
    preco: any,
    img: any,
    descricao: any,
  }>

  constructor(private db: AngularFireDatabase, private produtcs: AuthenticationService, private nav: NavController, private afAuth: AngularFireAuth) {
    this.listarProdutos();
    this.produtos = [];

  }

  ngOnInit() {
  }

  listarProdutos() {
    this.produtcs.getProducts().subscribe((_prod) => {

      this.produto = _prod;
      console.log(this.produto);

      for (let i = 0; i < this.produto.length; i++) {
        this.produtos.push({
          id: _prod[i]['id'],
          nome: _prod[i]['nome'],
          preco: _prod[i]['preco'],
          img: _prod[i]['preco'],
          descricao: _prod[i]['descricao'],
        })
      }

      this.produtos = _prod;
      console.log(this.produtos);
      console.log(_prod);
    })
  }

  onSubmit() {

    const _detalhe = {
      id: this.id,
      nome: this.nome,
      preco: this.preco,
      img: this.img,
      descricao: this.descricao,
    }

    const det_json = JSON.stringify(_detalhe)

    localStorage.setItem('detalhe', det_json)
    this.nav.navigateBack('detalhe/' + this.id);
    alert(JSON.parse(localStorage.getItem('detalhe')!));
  }


}
