import { ContaBancaria } from "./ContaBancaria";

export class Agencia {
    private _codigo: number;
    private _contas = new Array<ContaBancaria>()

    constructor(codigo: number) {
        this._codigo = codigo;
    }

    public adicionarContaBancaria(conta: ContaBancaria): void {
        if (this._contas.length == 0)
            this._contas[0] = conta;
        else
            this._contas[this._contas.length + 1] = conta;
    }

    public excluirContaBancaria(conta: ContaBancaria): void {
        var indice = this._contas.indexOf(conta);
        this._contas.splice(indice, 1);
    }

    public listarContas(): Array<ContaBancaria> {
        return this._contas
 }



}