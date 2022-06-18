const funcionario = {
    codigo: 25,
    nome: 'Pedro'
};


const funcionario2: {codigo: number, nome: string} = {
    codigo: 25,
    nome: 'Pedro'
}

interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 25;
funcionarioObj.nome = 'Pedro';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}
