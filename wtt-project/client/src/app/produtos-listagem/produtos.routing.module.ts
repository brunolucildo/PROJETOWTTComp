import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProdutosListagemComponent } from './produtos-listagem.component';
import { ProdutosDetalheComponent } from './produtos-detalhe/produtos-detalhe.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { AuthGuard } from '../guards/auth.guard';

const produtosRoutes = [
    {path: 'produtos', component: ProdutosListagemComponent , canActivate:[AuthGuard], children:[
        {path: 'novo', component: ProdutosFormComponent},
        {path: ':id', component: ProdutosDetalheComponent},
        {path: ':id/editar', component: ProdutosFormComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(produtosRoutes)],
    exports: [RouterModule]
})
export class ProdutosRoutingModule {}