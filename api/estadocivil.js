import connect from "../config/connection.js"

let Bairro ={}
const con = await connect()

Bairro.all = async function (req, res) {
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
        let estado = req.params.cod_veiculo
        let estadonovo = req.body
        let sql = "UPDATE veiculo SET placa_veiculo=?, modelo_veiculo=? , preco_veiculo=? WHERE cod_veiculo=?; "
        const values = [veiculoNovo.placa_veiculo, veiculoNovo.modelo_veiculo, veiculoNovo.preco_veiculo, veiculo]
        let result = await con.query(sql, values)
        res.send({

            status: "Atualização do:"+ veiculoNovo.placa_veiculo + veiculoNovo.modelo_veiculo + veiculoNovo.preco_veiculo + veiculo,
            result: result 
        })
    } catch (e){
        console.log("Erro.....", e)
    }



}
EstadoCivil.delete = async function (req, res){
    try {
        
        let veiculo = req.params.cod_veiculo
        let sql = "DELETE FROM veiculo WHERE cod_veiculo =?;"
        let result = await con.query(sql,[veiculo])
        res.send({

            status: "A exclusao do :" + veiculo + "foi efetuada",
            result: result 
        })
        } catch (e) {
            console.log(e)
}}
EstadoCivil.getcodigo = async function (req, res) {
    try {
        let cod_veiculo = req.params.cod_veiculo
        let sql= "SELECT * FROM veiculo WHERE cod_veiculo=?;"
        let veiculo = await con.query(sql, [cod_veiculo])
        res.send(veiculo)
    } catch (e){
        console.log("erro consulta ...", e)

    }
}
export {EstadoCivil} 