export class Caminhao{
    id: number;
    cnpj : string;
    placa: string;
    prefixo: string;
    constructor(values: Object ={}) {
        Object.assign(this, values);
    }
}