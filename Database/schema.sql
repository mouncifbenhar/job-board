CREATE TABLE entreprise (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL
);

CREATE TABLE technologie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    technologie_name VARCHAR(255) NOT NULL
);

CREATE TABLE offre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    ville VARCHAR(255),
    type_contrat VARCHAR(100),
    date_publication DATE,
    description_courte TEXT,
    description_longue TEXT,
    profil_recherche TEXT,
    lien_candidature VARCHAR(500),
    email_contact VARCHAR(255),

    entreprise_id INT NOT NULL,

    CONSTRAINT fk_offre_entreprise
        FOREIGN KEY (entreprise_id)
        REFERENCES entreprise(id)
        ON DELETE CASCADE
        
);


CREATE TABLE offre_technologie (
    offre_id INT NOT NULL,
    technologie_id INT NOT NULL,

    PRIMARY KEY (offre_id, technologie_id),

    CONSTRAINT fk_offre_technologie_offre
        FOREIGN KEY (offre_id)
        REFERENCES offre(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_offre_technologie_technologie
        FOREIGN KEY (technologie_id)
        REFERENCES technologie(id)
        ON DELETE CASCADE
)