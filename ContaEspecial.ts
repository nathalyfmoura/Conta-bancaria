
import { ContaBancaria } from "./ContaBancaria";

export class ContaEspecial extends ContaBancaria {
    protected _limite: number;

    constructor(limite: number, correntista: string, saldo: number) {
        super(correntista, saldo);
        this._limite = 1000
        this._correntista = correntista
        this._saldo = saldo
    }

    public get limite(): number {
        return this._limite
    }

    public set limite(limite: number) {
        this._limite = limite;
    }

    public valorDisponivel(): number {
        return this._limite + this._saldo;
    }

    public saque(quantidade: number): string {
        if (quantidade < this._saldo + this._limite) {
            return "Saque seu dinheiro!"
        } else {
            return "Valor ultrapassa o limite disponivel para saque!"
        }
    }
}
