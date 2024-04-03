const {PrismaClient} = require("@prisma/client")
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');

const prisma = new PrismaClient();

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '12h'});
}

const register = async (req, res) => {
    
    const {email, jelszo, telszam, lakcim, nev} = req.body;

    
    if(!email || !jelszo || !telszam || !nev){
        res.json({message: "Hiányos adatok!"});
        return;
    }

   
    const kolcsonzo = await prisma.kolcsonzo.findUnique({
        where: {
            email: email
        }
    });

    if(kolcsonzo){
        res.json({message: 'Az email cím már foglalt'});
        return;
    }

    const hasheltJelszo = await argon2.hash(jelszo);

    
    const ujKolcsonzo = await prisma.kolcsonzo.create({
        data: {
            email: email,
            nev: nev,
            telszam: telszam,
            lakcim : lakcim,
            jelszo: hasheltJelszo
        }
    });

    const token = generateToken(ujKolcsonzo.id);
    res.json({token: token});
}
const login = async(req, res) => {

    const {email, jelszo} = req.body;
    if(!email || !jelszo){
        res.json({message: 'Hiányzó adatok'});
    }


    const kolcsonzo = await prisma.kolcsonzo.findUnique({
        where: {
            email: email
        }
    });

    if(!kolcsonzo) {
        res.json({message: 'Felhasználó nem található'});
        return;
    }

    if(!(await argon2.verify(kolcsonzo.jelszo, jelszo))){
        res.json({message: 'Nem megfelelő a jelszó!'});
        return;
    }

    const token = generateToken(kolcsonzo.id);
    res.json({
        message: 'Sikeres bejelentkezés',
        token: token
    });

}

const getKolcsonzo = (req, res) => {
    res.json(req.kolcsonzo);
}

module.exports = {
    register,
    login,
    getKolcsonzo
}
