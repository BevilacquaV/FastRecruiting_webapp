export class Recruiter {
    nome: string;
    email: string;
    telefono: string;
    password: string;
    nuovapassword: string;
    constructor(nome, email, telefono, password, nuovapassword) {
        this.nome = nome;
        this.email = email;
        this.telefono = telefono;
        this.password = password;
        this.nuovapassword = nuovapassword;
    }
}
