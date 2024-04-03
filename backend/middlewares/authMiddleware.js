const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const protect = async(req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            const idFromToken = jwt.verify(token, process.env.JWT_SECRET);
            req.kolcsonzo = await prisma.kolcsonzo.findUnique({
                where: {
                    id: idFromToken.id
                },
                select: {
                    id: true,
                    email: true,
                    nev: true,
                    telszam: true,
                }
            });
            next();
        } catch(err){
            res.status(401).json({message: 'Gondok vannak'})
        }
           
        
    }
    
    if(!token) {
        res.json({message: 'Be kell jelentkezni!'});
    }
}


module.exports = {
    protect
}