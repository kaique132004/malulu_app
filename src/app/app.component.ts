import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Produtos', url: 'produtos', icon: 'paper-plane' },
    { title: 'Perfil', url: 'perfil', icon: 'person' },
    { title: 'Favoritos', url: 'favoritos', icon: 'heart' },
    { title: 'Carrinho', url: 'carrinho', icon: 'cart' },
   
  ];
  constructor() {}
}
