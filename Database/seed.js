
import db from "../config/db.js";

try {

    await db.query("DELETE FROM offre_technologie");
    await db.query("DELETE FROM offre");
    await db.query("DELETE FROM technologie");
    await db.query("DELETE FROM entreprise");

    await db.query("ALTER TABLE entreprise AUTO_INCREMENT = 1");
    await db.query("ALTER TABLE technologie AUTO_INCREMENT = 1");
    await db.query("ALTER TABLE offre AUTO_INCREMENT = 1");

    console.log("Old data deleted successfully");

    const entreprises = [
        ["Tech Maroc"],
        ["Web Agency"],
        ["Digital Solutions"],
        ["Morocco Digital"],
        ["Atlas Software"]
    ];

    for (const entreprise of entreprises) {
        await db.query(
            "INSERT INTO entreprise (company_name) VALUES (?)",
            entreprise
        );
    }

    console.log("Entreprises inserted successfully");

    const technologies = [
        ["JavaScript"],
        ["React"],
        ["Node.js"],
        ["PHP"],
        ["Laravel"],
        ["MySQL"],
        ["HTML"],
        ["CSS"]
    ];

    for (const technologie of technologies) {
        await db.query(
            "INSERT INTO technologie (technologie_name) VALUES (?)",
            technologie
        );
    }

    console.log("Technologies inserted successfully");

    const offres = [
        [
            "Développeur React",
            "Casablanca",
            "Stage",
            "2026-09-24",
            "Développement d'interfaces React",
            "Participation au développement de nouvelles fonctionnalités.",
            "Connaissances en JavaScript et React",
            "https://example.com/apply",
            "contact@techmaroc.com",
            1
        ],

        [
            "Développeur Laravel",
            "Rabat",
            "Alternance",
            "2026-09-24",
            "Développement backend avec Laravel",
            "Participation à la conception et au développement des applications.",
            "Connaissances en PHP et Laravel",
            "https://example.com/apply",
            "recrutement@webagency.com",
            2
        ],
        [ "Développeur Node.js", "Marrakech", "Stage", "2026-09-23", "Développement backend avec Node.js", "Participation au développement des APIs et services backend.", "JavaScript et Node.js", "https://example.com/apply", "contact@digitalsolutions.com", 3 ],
        [ "Développeur Frontend", "Casablanca", "Stage", "2026-09-22", "Création d'interfaces web", "Développement de pages web modernes et responsives.", "HTML, CSS et JavaScript", "https://example.com/apply", "contact@moroccodigital.com", 4 ],
        [ "Développeur PHP", "Agadir", "Alternance", "2026-09-21", "Développement d'applications PHP", "Participation au développement et à la maintenance des applications.", "PHP et MySQL", "https://example.com/apply", "jobs@atlassoftware.com", 5 ],
        [ "Développeur Full Stack", "Rabat", "Stage", "2026-09-20", "Développement Full Stack", "Participation au développement frontend et backend.", "JavaScript, React et Node.js", "https://example.com/apply", "contact@techmaroc.com", 1 ],
        [ "Développeur Web", "Tanger", "Alternance", "2026-09-19", "Développement de sites web", "Création et amélioration de solutions web.", "HTML, CSS et JavaScript", "https://example.com/apply", "recrutement@webagency.com", 2 ],
        [ "Développeur React Junior", "Fès", "Stage", "2026-09-18", "Développement avec React", "Participation à la création d'interfaces utilisateur.", "React et JavaScript", "https://example.com/apply", "contact@digitalsolutions.com", 3 ],
        [ "Développeur Backend", "Casablanca", "Alternance", "2026-09-17", "Développement backend", "Développement des services et APIs de l'application.", "Node.js, PHP et MySQL", "https://example.com/apply", "contact@moroccodigital.com", 4 ],
        [ "Développeur Laravel Junior", "Meknès", "Stage", "2026-09-16", "Développement avec Laravel", "Participation au développement de nouvelles fonctionnalités.", "PHP, Laravel et MySQL", "https://example.com/apply", "jobs@atlassoftware.com", 5 ],
        [ "Frontend Developer", "Rabat", "Stage", "2026-09-15", "Développement frontend", "Création d'interfaces modernes et accessibles.", "HTML, CSS, JavaScript", "https://example.com/apply", "contact@techmaroc.com", 1 ],
        [ "Full Stack Developer", "Casablanca", "Alternance", "2026-09-14", "Développement d'applications Full Stack", "Participation à la conception et au développement des applications.", "React, Node.js, MySQL", "https://example.com/apply", "recrutement@webagency.com", 2 ]
    ];

    for (const offre of offres) {
        await db.query(
            `INSERT INTO offre (
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
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            offre
        );
    }

    console.log("Offres inserted successfully");

    const offreTechnologies = [
        [1, 1],
        [1, 2],
        [2, 4],
        [2, 5],
        [2, 6],
        [3, 1],
        [3, 3],
        [4, 7],
        [4, 8],
        [4, 1],
        [5, 4],
        [5, 6],
        [6, 1],
        [6, 2],
        [6, 3],
        [7, 7],
        [7, 8],
        [7, 1],
        [8, 2],
        [8, 1],
        [9, 3],
        [9, 4],
        [9, 6],
        [10, 4],
        [10, 5],
        [10, 6],
        [11, 7],
        [11, 8],
        [11, 1],
        [12, 2],
        [12, 3],
        [12, 6]
    ];

    for (const relation of offreTechnologies) {
        await db.query(
            `INSERT INTO offre_technologie
            (offre_id, technologie_id)
            VALUES (?, ?)`,
            relation
        );
    }

    console.log("OffreTechnologies inserted successfully");

} catch (error) {

    console.error("Error:", error.message);

} finally {

    await db.end();

}

