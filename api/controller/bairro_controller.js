import connect from "../config/connection.js"

let bairros ={}
const con = await connect()

bairros.all = async function (req, res) {
    try {
        let bairrosResultado = await con.query("SELECT * FROM bairros;")
        res.send(bairrosResultado)
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
bairros.create = async function(req, res) {
    try{
        let bairrosReq = req.body
        let sql = "INSERT INTO bairro (bairros_nome) values (?);"
        let values = [bairrosReq.nome]
        let result = await con.query(sql,values)
        res.send({
            status: "Inserção Efetuada com sucesso!",
            result: result
 
 
        })
    } catch (e) {
        console.log("Erro......", e)
 
    }
 
}
bairros.update = async function(req,res){
    try{
        let id_bairros = req.params.id_bairros
        let bairros_novo = req.body
        let sql = "UPDATE bairros SET  bairros_nome = ? WHERE id_bairros=?, "
        const values = [bairros_novo.nome, id_bairros]
        let result = await con.query(sql, values)
        res.send({

            status: "Atualização do:"+ bairros_novo.nome,
            result: result 
        })
    } catch (e){
        console.log("Erro.....", e)
    }



}
bairros.delete = async function (req, res){
    try {
        
        let id_bairro = req.params.id_bairros
        let sql = "DELETE FROM bairros WHERE id_bairro =?;"
        let result = await con.query(sql,[id_bairro])
        res.send({

            status: "A exclusao do :" + id_bairro + "foi efetuada",
            result: result 
        })
        } catch (e) {
            console.log(e)
}}
bairros.getcodigo = async function (req, res) {
    try {
        let id_bairros = req.params.id_bairros
        let sql= "SELECT * FROM bairros WHERE id_bairros=?;"
        let bairrosResultado = await con.query(sql, [id_bairros])
        res.send(bairrosResultado)
        
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
export {bairros} 