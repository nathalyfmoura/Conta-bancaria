
export abstract class ContaBancaria {
    protected _correntista: string;
    protected _saldo: number;


    constructor(correntista: string, saldo: number) {
        this._correntista = correntista
        this._saldo = saldo
    }

    public get correntista(): string {
        return this._correntista
    }

    public set correntista(correntista: string) {
        this._correntista = correntista;
    }
    
    public get saldo(): number {
        return this._saldo
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }

    public abstract valorDisponivel(): number

    public abstract saque(quantidade: number): string
}

