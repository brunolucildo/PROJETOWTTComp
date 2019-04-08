import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-detalhe',
  templateUrl: './produtos-detalhe.component.html',
  styleUrls: ['./produtos-detalhe.component.scss']
})
export class ProdutosDetalheComponent implements OnInit {

  produto: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtosService: ProdutosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.produtosService.getProduto(id).subscribe(dados => {
          dados.forEach(produto => {
            if (produto.id == id ) {
              this.produto = produto
            }
          })
        })
        
        
      }
    );
  }

  editarProduto(){
    this.router.navigate(['/produtos', this.produto.id, 'editar']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
