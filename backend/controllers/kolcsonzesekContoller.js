const { PrismaClient } = require("@prisma/client");
const { DATETIME } = require("mysql/lib/protocol/constants/types");
const prisma = new PrismaClient();


const putSingleKolcsonzes = async (req, res) => {
    const user = req.kolcsonzo;
    const now = new Date();
    now.setDate(now.getDate() + 30)
    const formattedDate = now.toISOString().split('T')[0];

    const { konyvId, hatarido } = req.body;


    if (!konyvId) return;

    const ujKolcsonzes = await prisma.kolcsonzesek.create({
        data: {
            kny_id: konyvId,
            kcs_id: Number(user.id),
            hatarido: new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate()
            )
        },
    })


    res.json({ message: "Sikeres rendelés", ujKolcsonzes });

}


const placeKolcsonzes = async (req, res) => {
    const { konyvek } = req.body;
    console.log(req.body);
    const kolcsonzo = req.kolcsonzo;
    console.log(kolcsonzo)
    try {
        for (let i = 0; i < konyvek.length; i++) {
            const now = new Date();
            now.setDate(now.getDate() + 30)
            const kolcsonzes = await prisma.kolcsonzesek.create({
                data: {
                    kcs_id: Number(kolcsonzo.id),
                    kny_id: Number(konyvek[i].id),
                    hatarido: new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate()
                    )
                }
            });
        }

        res.json({ message: 'Sikeres rendelés!' });

    } catch (err) {
        res.json(err.message)
    }
}
const getkolcsonzes = async (req, res) => {

    const kolcsonzo = req.kolcsonzo;

    const getKonyv = await prisma.kolcsonzesek.findMany({
        where: {
            kcs_id: kolcsonzo.id,
        },
        select: {
            kivitel: true,
            hatarido: true,
            konyv: {
                select: {
                    cim: true,
                    iro: true,
                    kategoria: true,

                }
            }
        }

    });

    res.json({
        kolcsonzesek: getKonyv
    })


}

const getElerhetoKonyvek = async (req, res) => {
    // nincs kivitel dátum / van visszahozatal dátum
    const elerheto = await prisma.kolcsonzesek.findMany({
        where: {
            OR: [
                {
                    kivitel: null,
                    Visszahozatal: null
                },
                {
                    kivitel: { not: null },
                    Visszahozatal: { not: null }
                }
            ]
        },
        select: {
            konyv: {
                select: {
                    id: true,
                    cim: true,
                    iro: true,
                    kategoria: true,
                }
            }
        }
    })
    res.json(elerheto);
}

module.exports = {
    putSingleKolcsonzes,
    placeKolcsonzes,
    getkolcsonzes,
    getElerhetoKonyvek
}