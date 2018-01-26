export class Candiatas {
    email: String;
    fullname: String;
    titolodistudi: String;
    note: String;
    skill: String;
    telefono: String;
    data: string;
    cv: string;
    id_candidato: string;
    id_offerta: string;
    let_presentazione: string;
    stato: string;

    constructor(email, fullname, titolodistudi, note, skill, telefono, data, cv, id_candidato,
                id_offerta, let_presentazione, stato) {
        this.email = email;
        this.fullname = fullname;
        this.titolodistudi = titolodistudi;
        this.skill = skill;
        this.note = note;
        this.telefono = telefono;
        this.id_offerta = id_offerta;
        this.data = data;
        this.cv = cv;
        this.id_candidato = id_candidato;
        this.let_presentazione = let_presentazione;
        this.stato = stato;
    }
}
