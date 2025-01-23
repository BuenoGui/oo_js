

function Funcionarios (nome, salario, notaEnem) {
    let _salario = salario;

    this.nome = nome;
    this.notaEnem = notaEnem; 

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        } else {
            alert("FODEU")
        }
    }

    this.retornaAumento = function() {
        console.log(this._salario * (this.notaEnem * 0.015));
    }
}

function Cargos (nome, notaEnem, cargo) {
    let _cargo = cargo;

    Funcionarios.call(this, nome, null ,notaEnem);

    this.setCargo = function() {
        if (this.notaEnem < 380) {
            _cargo = "Faxineiro/a";
        } else if (this.notaEnem >= 380 && this.notaEnem <= 600) {
            _cargo = "Administrativo";
        } else {
            _cargo = "Gerente";
        }
    
        return `O cargo do ${this.nome} é de ${_cargo}`;
    }
}


const id00001 = new Funcionarios('Carlos alberto de souza pinto', 3200, 720);

console.log(id00001.setCargo());
