import prompt from "prompt-sync";
import { ContaBancaria } from "./ContaBancaria";
import { Agencia } from "./agencia";
import { ContaEspecial } from "./ContaEspecial";
import { ContaNormal } from "./contaNormal";

let agencia = new Agencia(1)
let correntista: ContaBancaria
let saldo: ContaBancaria
let teclado = prompt();
let option: number = 0;
let option01: number = 0

while (option != 9) {
    console.log(`+===============Bem vindo===================+`);
    console.log(`|1. Adicionar conta Bancária                |`);
    console.log(`|2. Excluir conta Bancária                  |`);
    console.log(`|3. Listar Contas                           |`);
    console.log(`|4. Valor disponivel                        |`);
    console.log(`|5. Saque                                   |`);
    console.log(`|                                           |`);
    console.log(`|9. Sair                                    |`);
    console.log(`|===========================================+`);
    option = +teclado("Escolha uma ação: ");

    switch (option) {
        case 1:
            console.log(`+========== Adicionar Conta  ================+`);
            console.log(`|1. Conta especial                          |`);
            console.log(`|2. Conta normal                            |`);
            console.log(`|                                           |`);
            console.log(`|9. Sair                                    |`);
            console.log(`|===========================================+`);
            option01 = +teclado("Escolha uma ação: ");

            let correntista = teclado("Digite seu nome: ")

            let saldo = +teclado("Digite seu valor de deposito: ")

            if (option01 == 1) {
                let conta = new ContaEspecial(1000, correntista, saldo);
                agencia.adicionarContaBancaria(conta);
            } else if (option01 == 2) {
                let conta = new ContaNormal(correntista, saldo);
                agencia.adicionarContaBancaria(conta);
            }

            break;

        case 2:
            let selecao = teclado("digite o seu nome para excluir a conta: ")
            let contas = agencia.listarContas()
            for (let conta of contas) {
                if (selecao == conta.correntista)
                    agencia.excluirContaBancaria(conta)
                else
                    console.log(`Não possui o cliente ${selecao} na lista de contas`);
            }
             
            break;

        case 3:
            console.log(agencia.listarContas())

            break;

        case 4:
            let disponivel = teclado("digite o seu nome para ver seu saldo: ")
            let conta1 = agencia.listarContas()
            for (let conta of conta1) {
                if (disponivel == conta.correntista)

                    console.log(`Você possui ${conta.valorDisponivel()} de saldo disponivel`)
                else
                    console.log(`Não possui o cliente ${disponivel} na lista de contas`);
            }

            break;

        case 5:
            let saque = teclado("digite o seu nome para ver seu saldo: ")
            let conta2 = agencia.listarContas()

            for (let conta of conta2) {
                if (saque == conta.correntista)
                    console.log(`Você possui ${conta.valorDisponivel()} de saldo disponivel`)
                console.log("=====================================================")
                
                let sacar = +teclado("Digite o valor a ser sacado: ")
                
                if (sacar <= conta.valorDisponivel()) {
                    console.log("Você pode sacar seu dinheiro")
                    console.log(`Seu novo saldo disponivel ${conta.valorDisponivel() - sacar} !`)
                } else {
                    console.log("Saldo insuficiente !!")
                }
            }
            break;

        default:
            break;
    }
}

