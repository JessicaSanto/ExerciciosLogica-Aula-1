var pesoPeca = 200;

if (pesoPeca < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça possui peso adequado")
}

var listadePecas = ["Amortecedor", "Motor", "Filtro de Ar", "Disco de Freio"]

if (listadePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não tem mais espaço na lista")
}

var nomePeca = "Volante"

if (nomePeca.length > 3) {
    console.log("Nome da peça está adequado para o cadastro!")
} else if (nomePeca.length == 0) {
    console.log("O nome da peça não pode ser vazio!")
} else {
    console.log("O nome inválido. Cadastre um nome correto!")
}

// = -> atribuição de valor -> RECEBE 
// == -> verificação se o valores são iguais -> É IGUAL? 
// === -> verificação se os valores e o tipo são igual 
// var idade = "20";
// if(idade === 20);


switch (nomePeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio!");
        break;
    case 1:
    case 2:
    case 3:
        console.log("O nome inválido. Cadastre um nome correto!");
        break;
    default:
        console.log("Nome da peça está adequado para o cadastro!");
        break;
}