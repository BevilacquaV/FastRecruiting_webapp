export class Candidatura {
    number;
    fullname: String;
    data: String;
    key_candidatura: String;
    offerta: String;

    constructor(number, fullname, offerta, data, key_candidatura) {
        this.data = data;
        this.fullname = fullname;
        this.key_candidatura = key_candidatura;
        this.number = number;
        this.offerta = offerta;
    }
}
