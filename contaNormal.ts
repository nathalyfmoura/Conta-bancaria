import { ContaBancaria } from "./ContaBancaria";

export class ContaNormal extends ContaBancaria {
    constructor(correntista: string, saldo: number) {
        super(correntista, saldo);
        this._correntista = correntista
        this._saldo = saldo
    }
    
    public valorDisponivel(): number {
        return this._saldo
    }

    public saque(quantidade: number): string {
        if (quantidade < this._saldo) {
            return "Saque seu dinheiro!"
        } else {
            return "Valor ultrapassa o limite disponivel para saque!"
        }
    }
}