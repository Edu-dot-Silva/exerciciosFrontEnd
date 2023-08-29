// Chame o método apresentacao do objeto pessoa e exiba a mensagem no console.

const pessoa = {
    nome:"Eduardo",
    idade:23,
    porfissao:"Desenvolvedor Front End",
    apresentacao:function(){
        console.log(`Olá ${this.nome},você tem ${this.idade} e é ${this.porfissao}`);
    }
 }
pessoa.apresentacao();