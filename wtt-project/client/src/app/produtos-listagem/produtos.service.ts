import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = 'http://localhost:4000/api/v1'
  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get<any[]>(`${this.url}/produto`)

  }

  getProduto(id: number) {
    return this.getProdutos()

    // for (let i=0; i<produtosArray.length; i++){
    //   let produto = produtosArray[i];
    //   console.log(produto);

    //   if (produto.id == id){
    //     return produto;
    //   }
    // }    
    // // return null;
  }

}
