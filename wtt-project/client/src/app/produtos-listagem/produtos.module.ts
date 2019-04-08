import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { ProdutosListagemComponent } from './produtos-listagem.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosDetalheComponent } from './produtos-detalhe/produtos-detalhe.component'
import { ProdutosRoutingModule } from './produtos.routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports:[CommonModule,ProdutosRoutingModule,FormsModule],
    exports: [],
    declarations: [ProdutosListagemComponent, ProdutosFormComponent, ProdutosDetalheComponent],
    providers: [],
})

export class ProdutosModule {}