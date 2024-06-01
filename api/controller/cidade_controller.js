import connect from "../config/connection.js"

let cidades ={}
const con = await connect()

cidades.all = async function (req, res) {
    try {
        let cidadesResultado = await con.query("SELECT * FROM cidades;")
        res.send(cidadesResultado)
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
cidades.create = async function(req, res) {
    try{
        let cidadesReq = req.body
        let sql = "INSERT INTO cidade (cidades_nome) values (?);"
        let values = [cidadesReq.nome]
        let result = await con.query(sql,values)
        res.send({
            status: "Inserção Efetuada com sucesso!",
            result: result
 
 
        })
    } catch (e) {
        console.log("Erro......", e)
 
    }
 
}
cidades.update = async function(req,res){
    try{
        let id_cidades = req.params.id_cidades
        let cidades_novo = req.body
        let sql = "UPDATE cidades SET  cidades_nome = ? WHERE id_cidades=?, "
        const values = [cidades_novo.nome, id_cidades]
        let result = await con.query(sql, values)
        res.send({

            status: "Atualização do:"+ cidades_novo.nome,
            result: result 
        })
    } catch (e){
        console.log("Erro.....", e)
    }



}
cidades.delete = async function (req, res){
    try {
        
        let id_cidade = req.params.id_cidades
        let sql = "DELETE FROM cidades WHERE id_cidade =?;"
        let result = await con.query(sql,[id_cidade])
        res.send({

            status: "A exclusao do :" + id_cidade + "foi efetuada",
            result: result 
        })
        } catch (e) {
            console.log(e)
}}
cidades.getcodigo = async function (req, res) {
    try {
        let id_cidades = req.params.id_cidades
        let sql= "SELECT * FROM cidades WHERE id_cidades=?;"
        let cidadessResultado = await con.query(sql, [id_cidades])
        res.send(cidadesResultado)
        
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
export {cidades} 