import connect from "../config/connection.js"

let estadoCivil ={}
const con = await connect()

estadoCivil.all = async function (req, res) {
    try {
        let estadosCivis = await con.query("SELECT * FROM nome;")
        res.send(estadosCivis)
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
estadoCivil.create = async function(req, res) {
    try{
        let estado = req.body
        let sql = "INSERT INTO estado (estado_nome) values (?);"
        let values = [estado.nome]
        let result = await con.query(sql,values)
        res.send({
            status: "Inserção Efetuada com sucesso!",
            result: result
 
 
        })
    } catch (e) {
        console.log("Erro......", e)
 
    }
 
}
estadoCivil.update = async function(req,res){
    try{
        let Estado = req.params.id_estado_civil
        let EstadoNovo = req.body
        let sql = "UPDATE estado SET nome=? WHERE id_estado_civil=?; "
        const values = [EstadoNovo.nome]
        let result = await con.query(sql, values)
        res.send({

            status: "Atualização do:"+ EstadoNovo.nome,
            result: result 
        })
    } catch (e){
        console.log("Erro.....", e)
    }



}
estadoCivil.delete = async function (req, res){
    try {
        
        let Estado = req.params.id_estado_civil
        let sql = "DELETE FROM estado WHERE id_estado_civil =?;"
        let result = await con.query(sql,[id_estadocivis])
        res.send({

            status: `A exclusao do :${estado} foi efetuada`,
            result: result 
        })
        } catch (e) {
            console.log(e)
}}
estadoCivil.getcodigo = async function (req, res) {
    try {
        let id_estado_civil = req.params.id_estado_civil
        let sql= "SELECT * FROM estadocivil WHERE id_estado_civil=?;"
        let estado = await con.query(sql, [id_estado_civil])
        res.send(estado)
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
export {estadoCivil} 