import mysql from 'mysql2/promise'
 
async function connect() {
    if (global.connection && global.connection.state !==  'disconnected')
        return global.connection
 
    const conexao = await mysql.createConnection("mysql://ryuhur22_pac3:j1kTxeVuebMpR0e3EW68dWKY3ySjvo9P2SFQRv9e4XyLLiuhEN@50.6.138.114:3306/ryuhur22_igreja_batista")
 
    console.log("Conectado a base")
    global.connection = conexao
    return conexao
}
 
export default connect