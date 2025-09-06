let pessoa = {
nome : " wilson ",
idade : 35,
profissao : "Vigilante",

}
console.log(pessoa);


const produtos = [
  {nome: "biscoito", preco:2.95 },
  {nome: "cafe", preco:15},
  {nome: "refrigerante", preco:8},
]
let maisCaro = produtos[0]
for(let i = 1 ; i < produtos.length; i++){
  const produtoAtual = produtos[i]{
    if(produtoAtual.preco > maisCaro.preco){
      maisCaro = produtoAtual
    }
  }
}console.log(maisCaro)