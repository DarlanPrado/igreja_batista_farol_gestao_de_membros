import connect from "../config/connection.js"

let bairros ={}
const con = await connect()

bairros.all = async function (req, res) {
    try {
        let bairros = await con.query("SELECT * FROM bairros;")
        res.send(bairro)
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
bairros.create = async function(req, res) {
    try{
        let bairros = req.body
        let sql = "INSERT INTO bairro (bairros_nome) values (?);"
        let values = [bairros.nome]
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
        let bairros = req.params.id_bairros
        let bairros_novo = req.body
        let sql = "UPDATE bairros SET id_bairros=?, "
        const values = [BairroNovo.novo_bairro,]
        let result = await con.query(sql, values)
        res.send({

            status: "Atualização do:"+ bairrosNovo.novo_bairro,
            result: result 
        })
    } catch (e){
        console.log("Erro.....", e)
    }



}
bairros.delete = async function (req, res){
    try {
        
        let bairros = req.params.id_bairros
        let sql = "DELETE FROM veiculo WHERE bairros =?;"
        let result = await con.query(sql,[bairros])
        res.send({

            status: "A exclusao do :" + bairros + "foi efetuada",
            result: result 
        })
        } catch (e) {
            console.log(e)
}}
bairros.getcodigo = async function (req, res) {
    try {
        let id_bairros = req.params.id_bairros
        let sql= "SELECT * FROM veiculo WHERE id_bairros=?;"
        let bairros = await con.query(sql, [id_bairros])
        res.send(bairros)
        
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
export {bairros} 