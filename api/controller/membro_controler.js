import connect from "../config/connection.js"

let membroIgreja ={}
const con = await connect()

membroIgreja.all = async function (req, res) {
    try {
        let membros = await con.query("SELECT * FROM membro;")
        res.send(membros)
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
membroIgreja.create = async function(req, res) {
    try{
        let membros = req.body
        let sql = "INSERT INTO estado (numero.celular, data.nascimento, data.ingresso, bl.batizado, bl.ativo) values (?,?,?,?,?);"
        let values = [numero.celular, data.nascimento, data.ingresso, bl.batizado, bl.ativo]
        let result = await con.query(sql,values)
        res.send({
            status: "Inserção Efetuada com sucesso!",
            result: result
 
 
        })
    } catch (e) {
        console.log("Erro......", e)
 
    }
 
}
membroIgreja.update = async function(req,res){
    try{
        let membros = req.params.id_membro
        let MembroNovo = req.body
        let sql = "UPDATE membros SET =? WHERE numero.celular=?, data.nascimento=?, data.ingresso=?, bl.batizado=?, bl.ativo=?; "
        const values = [membroNovo.numero_celular, membroNovo.data.nascimento, membroNovo.data.ingresso, membroNovo.bl.batizado, membro.bl.ativo]
        let result = await con.query(sql, values)
        res.send({

            status: "Atualização do:"+ membroNovo.numero_celular + membroNovo.data.nascimento + membroNovo.data.ingresso + membroNovo.bl.batizado + membro.bl.ativo,
            result: result 
        })
    } catch (e){
        console.log("Erro.....", e)
    }



}
membroIgreja.delete = async function (req, res){
    try {
        
        let membro = req.params.id_membro
        let sql = "DELETE FROM estado WHERE id_membro=?;"
        let result = await con.query(sql,[id_membro])
        res.send({

            status: `A exclusao do :${membro} foi efetuada`,
            result: result 
        })
        } catch (e) {
            console.log(e)
}}
membroIgreja.getmembro = async function (req, res) {
    try {
        let id_membro = req.params.id_membro
        let sql= "SELECT * FROM membroIgreja WHERE id_membro=?;"
        let estado = await con.query(sql, [id_membro])
        res.send(membro)
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
export {membroIgreja} 