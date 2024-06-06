import connect from "../config/connection.js"

let EstadoCivil ={}
const con = await connect()

EstadoCivil.all = async function (req, res) {
    try {
        let EstadosCivis = await con.query("SELECT * FROM nome;")
        res.send(EstadosCivis)
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
EstadoCivil.create = async function(req, res) {
    try{
        let estado = req.body
        let sql = "INSERT INTO estado ( estado_nome) values (?);"
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
EstadoCivil.update = async function(req,res){
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
EstadoCivil.delete = async function (req, res){
    try {
        
        let Estado = req.params.id_estado_civil
        let sql = "DELETE FROM estado WHERE id_estado_civil =?;"
        let result = await con.query(sql,[estado])
        res.send({

            status: `A exclusao do :${estado} foi efetuada`,
            result: result 
        })
        } catch (e) {
            console.log(e)
}}
EstadoCivil.getcodigo = async function (req, res) {
    try {
        let id_estado_civil = req.params.id_estado_civil
        let sql= "SELECT * FROM estadocivil WHERE id_estado_civil=?;"
        let estado = await con.query(sql, [id_estado_civil])
        res.send(estado)
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
export {EstadoCivil} 