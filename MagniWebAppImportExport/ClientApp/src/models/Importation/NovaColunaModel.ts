export interface NovaColunaModel {
    linhas: any[],
    novaColuna: {
        nome: string;
        coluna: NovaColuna[]
        formato: string;
    }
}

export interface NovaColuna {
    key: number;
    formato: string;
    valor: string;
}