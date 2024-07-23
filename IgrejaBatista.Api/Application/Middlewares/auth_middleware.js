import jwt from 'jsonwebtoken'

export async function Authorize(req, res, next){
    let accessToken = req.headers['x-access-token']

    if (!accessToken) 
        return res.status(403).json(
                {
                    msg: "usuário não autenticado."
                })

    try {
        jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
            if (err)
                throw new Error()

            return next()
        })
    } catch (e) {
        console.log(e)

        return res.status(401).json({
            msg: "Erro na autenticação."
        })
    }
}