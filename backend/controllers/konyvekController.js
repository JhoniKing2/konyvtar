const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

const addKonyv = async (req, res) => {
    const {cim, iro, kategoria, kiadasDatuma } = req.body;

    const ujKonyv = await prisma.konyvek.create({
        data: {
            cim: cim,
            iro: iro,
            kategoria: kategoria,
            kiadasDatuma: kiadasDatuma
        }
    });

    res.json({message: "Sikeres termekfelvitel", ujKonyv});
}
const getKönyv = async (req, res) => {
    const konyvek = await prisma.konyvek.findMany({});
    res.json({konyvek});
}


const getSpecifiedKönyvKategoria = async (req, res) => {
    const kategoria = req.params.kategoria;

    const konyvek = await prisma.konyvek.findMany({
        where: {
            kategoria: kategoria
        }
    });

    res.json(konyvek);
}

const getSpecifiedKönyvIro = async (req, res) => {
    const iro = req.params.iro;

    const konyvek = await prisma.iro.findMany({
        where: {
            iro: iro
        }
    });

    res.json(konyvek);
}

const getSpecifiedKönyvCim = async (req, res) => {
    const cim = req.params.cim;

    const konyvek = await prisma.konyvek.findMany({
        where: {
            cim: cim
        }
    });

    res.json(konyvek);
}

const getSpecifiedKönyvid = async (req, res) => {
    const id = req.params.id;

    const konyvek = await prisma.konyvek.findFirst({
        where: {
            id: Number(id)
        }
    });

    res.json(konyvek);
}

module.exports = {
    addKonyv,
    getKönyv,
    getSpecifiedKönyvid,
    getSpecifiedKönyvKategoria,
    getSpecifiedKönyvIro,
    getSpecifiedKönyvCim
}
