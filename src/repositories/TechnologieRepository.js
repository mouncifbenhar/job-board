import prisma from "../config/prisma.js";

class TechnologieRepository {

    async create(technologie_name) {

        return await prisma.technologie.create({
            data: {
                technologie_name: technologie_name
            }
        });

    }
    async getAll() {

    return await prisma.technologie.findMany({
        orderBy: {
            technologie_name: "asc"
        }
    });

    }

}

export default TechnologieRepository;

