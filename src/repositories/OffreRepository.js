import prisma from "../config/prisma.js";

class OffreRepository {
    async getAll() {
        return await prisma.offre.findMany({
            include: {
                entreprise: true,
                offre_technologie: {
                    include: {
                        technologie: true
                    }
                }
            }
        });
    }
    async getById(id) {
        return await prisma.offre.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                entreprise: true,
                offre_technologie: {
                    include: {
                        technologie: true
                    }
                }
            }
        })
    }
    async create(data, technologiesIds) {

        const offre = await prisma.offre.create({
            data: data
        });

        for (const technologieId of technologiesIds) {

            await prisma.offre_technologie.create({
                data: {
                    offre_id: offre.id,
                    technologie_id: technologieId
                }
            });

        }

        return offre;
    }

}

export default OffreRepository;