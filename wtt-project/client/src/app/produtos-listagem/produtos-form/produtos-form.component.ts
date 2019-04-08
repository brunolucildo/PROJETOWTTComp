import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutosFormComponent implements OnInit {

  produto: any = {};
  inscricao: Subscription;

  onSubmit(form){
    console.log(form);
  }

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.produto = this.produtosService.getProduto(id);

        if (this.produto === null){
          this.produto = {};
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
