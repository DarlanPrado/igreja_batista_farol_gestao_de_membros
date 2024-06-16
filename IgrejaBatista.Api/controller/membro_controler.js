import connect from "../config/connection.js";

let membroIgreja = {};
const con = await connect();

membroIgreja.all = async function (req, res) {
    try {
        let [membros] = await con.query("SELECT * FROM membro;");
        res.send(membros);
    } catch (e) {
        console.log("Erro na consulta ...", e);
        res.status(500).send("Erro na consulta");
    }
};

membroIgreja.create = async function(req, res) {
    try {
        let { numero_celular, data_nascimento, data_ingresso, bl_batizado, bl_ativo } = req.body;
        let sql = "INSERT INTO membro (numero_celular, data_nascimento, data_ingresso, bl_batizado, bl_ativo) VALUES (?, ?, ?, ?, ?);";
        let values = [numero_celular, data_nascimento, data_ingresso, bl_batizado, bl_ativo];
        let [result] = await con.query(sql, values);
        res.send({
            status: "Inserção efetuada com sucesso!",
            result: result
        });
    } catch (e) {
        console.log("Erro na inserção ...", e);
        res.status(500).send("Erro na inserção");
    }
};

membroIgreja.update = async function(req, res) {
    try {
        let id_membro = req.params.id_membro;
        let { numero_celular, data_nascimento, data_ingresso, bl_batizado, bl_ativo } = req.body;
        let sql = "UPDATE membro SET numero_celular=?, data_nascimento=?, data_ingresso=?, bl_batizado=?, bl_ativo=? WHERE id_membro=?;";
        let values = [numero_celular, data_nascimento, data_ingresso, bl_batizado, bl_ativo, id_membro];
        let [result] = await con.query(sql, values);
        res.send({
            status: "Atualização efetuada com sucesso!",
            result: result
        });
    } catch (e) {
        console.log("Erro na atualização ...", e);
        res.status(500).send("Erro na atualização");
    }
};

membroIgreja.delete = async function(req, res) {
    try {
        let id_membro = req.params.id_membro;
        let sql = "DELETE FROM membro WHERE id_membro=?;";
        let [result] = await con.query(sql, [id_membro]);
        res.send({
            status: `A exclusão do membro com ID ${id_membro} foi efetuada com sucesso`,
            result: result
        });
    } catch (e) {
        console.log("Erro na exclusão ...", e);
        res.status(500).send("Erro na exclusão");
    }
};

membroIgreja.getmembro = async function(req, res) {
    try {
        let id_membro = req.params.id_membro;
        let sql = "SELECT * FROM membro WHERE id_membro=?;";
        let [membro] = await con.query(sql, [id_membro]);
        res.send(membro);
    } catch (e) {
        console.log("Erro na consulta ...", e);
        res.status(500).send("Erro na consulta");
    }
};

export { membroIgreja };
