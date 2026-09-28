import db from "../src/config/prisma.js";

try {


    await db.offre_technologie.deleteMany();
    await db.offre.deleteMany();
    await db.technologie.deleteMany();
    await db.entreprise.deleteMany();

    console.log("Old data deleted successfully");


 

    const entreprisesData = [
        { company_name: "Tech Maroc" },
        { company_name: "Web Agency" },
        { company_name: "Digital Solutions" },
        { company_name: "Morocco Digital" },
        { company_name: "Atlas Software" }
    ];

    const entreprises = await Promise.all(
        entreprisesData.map((entreprise) =>
            db.entreprise.create({
                data: entreprise
            })
        )
    );

    console.log("Entreprises inserted successfully");



    const technologiesData = [
        { technologie_name: "JavaScript" },
        { technologie_name: "React" },
        { technologie_name: "Node.js" },
        { technologie_name: "PHP" },
        { technologie_name: "Laravel" },
        { technologie_name: "MySQL" },
        { technologie_name: "HTML" },
        { technologie_name: "CSS" }
    ];

    const technologies = await Promise.all(
        technologiesData.map((technologie) =>
            db.technologie.create({
                data: technologie
            })
        )
    );

    console.log("Technologies inserted successfully");




    const offresData = [
        {
            title: "Développeur React",
            ville: "Casablanca",
            type_contrat: "Stage",
            date_publication: new Date("2026-09-24"),
            description_courte: "Développement d'interfaces React",
            description_longue:
                "Participation au développement de nouvelles fonctionnalités.",
            profil_recherche:
                "Connaissances en JavaScript et React",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "contact@techmaroc.com",
            entrepriseIndex: 0
        },

        {
            title: "Développeur Laravel",
            ville: "Rabat",
            type_contrat: "Alternance",
            date_publication: new Date("2026-09-24"),
            description_courte:
                "Développement backend avec Laravel",
            description_longue:
                "Participation à la conception et au développement des applications.",
            profil_recherche:
                "Connaissances en PHP et Laravel",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "recrutement@webagency.com",
            entrepriseIndex: 1
        },

        {
            title: "Développeur Node.js",
            ville: "Marrakech",
            type_contrat: "Stage",
            date_publication: new Date("2026-09-23"),
            description_courte:
                "Développement backend avec Node.js",
            description_longue:
                "Participation au développement des APIs et services backend.",
            profil_recherche:
                "JavaScript et Node.js",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "contact@digitalsolutions.com",
            entrepriseIndex: 2
        },

        {
            title: "Développeur Frontend",
            ville: "Casablanca",
            type_contrat: "Stage",
            date_publication: new Date("2026-09-22"),
            description_courte:
                "Création d'interfaces web",
            description_longue:
                "Développement de pages web modernes et responsives.",
            profil_recherche:
                "HTML, CSS et JavaScript",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "contact@moroccodigital.com",
            entrepriseIndex: 3
        },

        {
            title: "Développeur PHP",
            ville: "Agadir",
            type_contrat: "Alternance",
            date_publication: new Date("2026-09-21"),
            description_courte:
                "Développement d'applications PHP",
            description_longue:
                "Participation au développement et à la maintenance des applications.",
            profil_recherche:
                "PHP et MySQL",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "jobs@atlassoftware.com",
            entrepriseIndex: 4
        },

        {
            title: "Développeur Full Stack",
            ville: "Rabat",
            type_contrat: "Stage",
            date_publication: new Date("2026-09-20"),
            description_courte:
                "Développement Full Stack",
            description_longue:
                "Participation au développement frontend et backend.",
            profil_recherche:
                "JavaScript, React et Node.js",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "contact@techmaroc.com",
            entrepriseIndex: 0
        },

        {
            title: "Développeur Web",
            ville: "Tanger",
            type_contrat: "Alternance",
            date_publication: new Date("2026-09-19"),
            description_courte:
                "Développement de sites web",
            description_longue:
                "Création et amélioration de solutions web.",
            profil_recherche:
                "HTML, CSS et JavaScript",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "recrutement@webagency.com",
            entrepriseIndex: 1
        },

        {
            title: "Développeur React Junior",
            ville: "Fès",
            type_contrat: "Stage",
            date_publication: new Date("2026-09-18"),
            description_courte:
                "Développement avec React",
            description_longue:
                "Participation à la création d'interfaces utilisateur.",
            profil_recherche:
                "React et JavaScript",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "contact@digitalsolutions.com",
            entrepriseIndex: 2
        },

        {
            title: "Développeur Backend",
            ville: "Casablanca",
            type_contrat: "Alternance",
            date_publication: new Date("2026-09-17"),
            description_courte:
                "Développement backend",
            description_longue:
                "Développement des services et APIs de l'application.",
            profil_recherche:
                "Node.js, PHP et MySQL",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "contact@moroccodigital.com",
            entrepriseIndex: 3
        },

        {
            title: "Développeur Laravel Junior",
            ville: "Meknès",
            type_contrat: "Stage",
            date_publication: new Date("2026-09-16"),
            description_courte:
                "Développement avec Laravel",
            description_longue:
                "Participation au développement de nouvelles fonctionnalités.",
            profil_recherche:
                "PHP, Laravel et MySQL",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "jobs@atlassoftware.com",
            entrepriseIndex: 4
        },

        {
            title: "Frontend Developer",
            ville: "Rabat",
            type_contrat: "Stage",
            date_publication: new Date("2026-09-15"),
            description_courte:
                "Développement frontend",
            description_longue:
                "Création d'interfaces modernes et accessibles.",
            profil_recherche:
                "HTML, CSS, JavaScript",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "contact@techmaroc.com",
            entrepriseIndex: 0
        },

        {
            title: "Full Stack Developer",
            ville: "Casablanca",
            type_contrat: "Alternance",
            date_publication: new Date("2026-09-14"),
            description_courte:
                "Développement d'applications Full Stack",
            description_longue:
                "Participation à la conception et au développement des applications.",
            profil_recherche:
                "React, Node.js, MySQL",
            lien_candidature:
                "https://example.com/apply",
            email_contact:
                "recrutement@webagency.com",
            entrepriseIndex: 1
        }
    ];


    const offres = await Promise.all(
        offresData.map((offre) =>
            db.offre.create({
                data: {
                    title: offre.title,
                    ville: offre.ville,
                    type_contrat: offre.type_contrat,
                    date_publication: offre.date_publication,
                    description_courte: offre.description_courte,
                    description_longue: offre.description_longue,
                    profil_recherche: offre.profil_recherche,
                    lien_candidature: offre.lien_candidature,
                    email_contact: offre.email_contact,

                    entreprise_id:
                        entreprises[offre.entrepriseIndex].id
                }
            })
        )
    );

    console.log("Offres inserted successfully");


   

    const relations = [
        [0, 0],
        [0, 1],

        [1, 3],
        [1, 4],
        [1, 5],

        [2, 0],
        [2, 2],

        [3, 6],
        [3, 7],
        [3, 0],

        [4, 3],
        [4, 5],

        [5, 0],
        [5, 1],
        [5, 2],

        [6, 6],
        [6, 7],
        [6, 0],

        [7, 1],
        [7, 0],

        [8, 2],
        [8, 3],
        [8, 5],

        [9, 3],
        [9, 4],
        [9, 5],

        [10, 6],
        [10, 7],
        [10, 0],

        [11, 1],
        [11, 2],
        [11, 5]
    ];


    await db.offre_technologie.createMany({
        data: relations.map(([offreIndex, technologieIndex]) => ({
            offre_id: offres[offreIndex].id,
            technologie_id: technologies[technologieIndex].id
        }))
    });

    console.log("OffreTechnologies inserted successfully");

} catch (error) {

    console.error("Error:", error);

} finally {

    await db.$disconnect();

}





