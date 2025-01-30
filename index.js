

function mamiferos (nome, idade) {
    this.nome = nome;
    this.idade = idade; 

    this.FazerSom = function() {
        console.log(`${this.nome} faz o som de: QUERO MAMA`);
    }
    

    this.MostrarIdade = function () {
        console.log(`Esse animal com nome: ${this.nome} tem ${this.idade} anos de idade`);
    }

}

class Ornitorrinco extends mamiferos {
    constructor(nome, idade, peso) {
        super(nome, idade);
        this.peso = peso;
    }

    FazerSom() {
        console.log(`${this.nome} faz o som de: Krrr`);
    }

    MostrarPeso() {
        console.log(`Esse Ornitorrinco de nome: ${this.nome} tem o peso de ${this.peso}kg`);
    }
}

class Golfinho extends mamiferos {
    constructor(nome, idade, drogado) {
        super(nome, idade);
        this.drogado = drogado;
    }

    FazerSom() {
        console.log(`${this.nome} faz o som de: Assobio`);
    }

    TaDrogado() {
        console.log(`A respostá pra pergunta se o golfinho está drogado é: ${this.drogado}`);
    }
}


const Perry = new Ornitorrinco("Perry", 8, "6,57");
const Willy = new Golfinho ("Willy", 17, true);

Perry.FazerSom();
Perry.MostrarPeso();
Perry.MostrarIdade();

Willy.FazerSom();
Willy.TaDrogado();
Willy.MostrarIdade();
