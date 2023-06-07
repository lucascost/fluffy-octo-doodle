import { Component } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.sass']
})
export class MatrizComponent {
  matriz: number[][] = [];
  prox_geracao: number[][] = [];

  constructor(){
    this.limpar();
  }

  alterarValor(linha: number, coluna: number): void {
    let valor = this.matriz[linha][coluna];
    this.matriz[linha][coluna] = valor === 1 ? 0 : 1;
  }

  limpar(){
    this.matriz=[]
    for (let i = 0; i < 10; i++) {
      this.matriz.push(Array(10).fill(0));
    }
  }

  contarVizinhos(linha:number, coluna:number){
    let vizinhos = 0
    //vizinhos em cima
    if( linha != 0 ){ //se a celula não esta na linha superior
      vizinhos += this.matriz[linha-1][coluna];

      if(coluna < 9)
        vizinhos += this.matriz[linha-1][coluna+1]


      if(coluna > 0)
        vizinhos += this.matriz[linha-1][coluna-1]
    }
    //vizinhos ao lado
    if( coluna !== 9 )
      vizinhos += this.matriz[linha][coluna+1]
    if( coluna !== 0 )
      vizinhos += this.matriz[linha][coluna-1]

    //vizinhos em baixo
    if( linha !== 9 ){ //se a celula não esta na linha inferior
      vizinhos += this.matriz[linha+1][coluna];

      if(coluna < 9)
        vizinhos += this.matriz[linha+1][coluna+1]

      if(coluna > 0)
        vizinhos += this.matriz[linha+1][coluna-1]
    }
    return vizinhos;
  }

  prepararGeracao(){

    this.prox_geracao = this.matriz.map((linha: number[]) => [...linha]);
    
    for(let i=0; i < this.matriz.length; i++){
      for(let j=0; j < this.matriz[i].length; j++){
        let vizinhos:number = Number(this.contarVizinhos(i,j));
        if(this.matriz[i][j] === 1){
          if(vizinhos < 2 || vizinhos >=4)
            this.prox_geracao[i][j] = 0;
        }
        else{
          if(vizinhos === 3)
            this.prox_geracao[i][j] = 1;
        }
      }
    }

    this.matriz = this.prox_geracao;
  }


}
