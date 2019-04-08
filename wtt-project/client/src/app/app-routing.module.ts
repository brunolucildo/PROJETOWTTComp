import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutosListagemComponent } from './produtos-listagem/produtos-listagem.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [  
  { path : 'login' , component: LoginComponent},
  { path : 'produtos' , component: ProdutosListagemComponent, canActivate:[AuthGuard]},
  { path : '' , component: HomeComponent, canActivate:[AuthGuard]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
