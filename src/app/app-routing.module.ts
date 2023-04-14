import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pg/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pg/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pg/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pg/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pg/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'dados',
    loadChildren: () => import('./pg/dados/dados.module').then( m => m.DadosPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pg/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./pg/carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'red-senha',
    loadChildren: () => import('./pg/red-senha/red-senha.module').then( m => m.RedSenhaPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pg/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'detalhe/:id',
    loadChildren: () => import('./pg/detalhe/detalhe.module').then( m => m.DetalhePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
