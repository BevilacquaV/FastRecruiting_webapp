export class Candidatura {
    number;
    fullname: String;
    data: String;
    key_candidatura: String;
    offerta: String;

    titolodistudio: String;
    pathCV: String;
    dataCandidatura: String;
    dataColloquio: String;
    linkGoogleMaps: String;
    idCandidato: String;
    idOfferta: String;
    idTecnico: String;
    pathLettPresent: String;
    noteCandidato: String;
    luogoColloquio: String;
    noteRecruiter: String;
    noteTecnico: String;
    orarioColloquio: String;
    skillCandidato: String;
    constructor(number, fullname, offerta, data, key_candidatura) {
        this.data = data;
        this.fullname = fullname;
        this.key_candidatura = key_candidatura;
        this.number = number;
        this.offerta = offerta;
    }

    public setTitoloDiStudio(titolodistudio) {
        this.titolodistudio = titolodistudio;
    }

    public setPathCV(pathCV) {
        this.pathCV = pathCV;
    }

    public setDataCandidatura(dataCandidatura) {
        this.dataCandidatura = dataCandidatura;
    }

    public setDataColloquio(dataColloquio) {
        this.dataColloquio = dataColloquio;
    }

    public setLinkGoogleMaps(linkGoogleMaps) {
        this.linkGoogleMaps = linkGoogleMaps;
    }

    public setIdCandidato(idCandidato) {
        this.idCandidato = idCandidato;
    }

    public setIdOfferta(idOfferta) {
        this.idOfferta = idOfferta;
    }

    public setIdTecnico(idTecnico) {
        this.idTecnico = idTecnico;
    }

    public setPathLettPresent(pathLettPresent) {
        this.pathLettPresent = pathLettPresent;
    }

    public setLuogoColloquio(luogoColloquio) {
        this.luogoColloquio = luogoColloquio;
    }

    public setNoteCandidato(noteCandidato) {
        this.noteCandidato = noteCandidato;
    }

    public setNoteRecruiter(noteRecruiter) {
        this.noteRecruiter = noteRecruiter;
    }

    public setNoteTecnico(noteTecnico) {
        this.noteTecnico = noteTecnico;
    }

    public setOrarioColloquio(orarioColloquio) {
        this.orarioColloquio = orarioColloquio;
    }

    public setSkillCandidato(skillCandidato) {
        this.skillCandidato = skillCandidato;
    }
}
