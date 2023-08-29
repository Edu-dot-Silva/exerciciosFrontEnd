// Chame o método calcularPrecoComDesconto do objeto produto e exiba o valor calculado no console.

function Produto (nome,preco,desconto){
    this.nome = nome
    this.preco = preco
    this.desconto10pc = desconto
    this.calculaPrecoComDesconto = function(){
        console.log(`${this.nome} por R$ ${this.preco} com 10% de desconto sai por ${this.preco - this.desconto10pc}`);
    }
}

const produto1 = new Produto("Smart TV 32'",2500,250)

produto1.calculaPrecoComDesconto();