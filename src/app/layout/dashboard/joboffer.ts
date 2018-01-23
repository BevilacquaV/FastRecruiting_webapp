export class Joboffer {
    titolo: String;
    luogodilavoro: String;
    skill: String;
    annuncio: String;
    titolodistudio: String;
    key: String;

    constructor(titolo, luogodilavoro, skill, annuncio, titolodistudio, key) {
       this.titolo = titolo;
       this.luogodilavoro = luogodilavoro;
       this.annuncio = annuncio;
       this.skill = skill;
       this.titolodistudio = titolodistudio;
       this.key = key;
    }
}
