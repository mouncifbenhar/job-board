class Offre {
    constructor(
        id,
        title,
        ville,
        type_contrat,
        date_publication,
        description_courte,
        description_longue,
        profil_recherche,
        lien_candidature,
        email_contact,
        entreprise_id
    ) {
        this.id = id;
        this.title = title;
        this.ville = ville;
        this.type_contrat = type_contrat;
        this.date_publication = date_publication;
        this.description_courte = description_courte;
        this.description_longue = description_longue;
        this.profil_recherche = profil_recherche;
        this.lien_candidature = lien_candidature;
        this.email_contact = email_contact;
        this.entreprise_id = entreprise_id;
    }
}

export default Offre;