// Digite um salario, até mil + 20%, entre mil e 3mil +15%, acima de 3mil+10%s

let salariousuario = 3500;

if(salariousuario <=1000){
    console.log(`O salario fornecido foi: R$${salariousuario}, com aumento de 20%: R$ ${salariousuario*0.20 + salariousuario}`);
}
else if (salariousuario >1000 && salariousuario<=3000){
    console.log(`O salario fornecido foi: R$${salariousuario}, com aumento de 15%: R$${salariousuario*0.15 + salariousuario}`);
}
if (salariousuario >3000){
    console.log(`O salario fornecido foi: R$${salariousuario}, com aumento de 10%: R$${salariousuario*0.10 + salariousuario}`);
}
