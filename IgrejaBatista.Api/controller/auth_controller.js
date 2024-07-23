import authService from '../Application/Services/auth_service.js';

const authController = {
    async login(req, res) {
        try {
            const authToken = await authService.login(req.body);
            res.send({
                status: "Autenticação realizada com sucesso!",
                result: authToken
            });
        } catch (e) {
            console.log("Erro na autenticação ...", e);
            res.status(400).send({ error: "Erro ao autenticar." });
        }
    },
};


export default authController;