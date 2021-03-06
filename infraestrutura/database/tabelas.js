class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(11git ) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                //console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }

    criarPets(){
        const query = 'CREATE TABLE IF NOT EXISTS pets (ID int NOT NULL AUTO_INCREMENT, nome varchar(25), imagem varchar(200), PRIMARY KEY(ID))'

        this.conexao.query(query, erro => {
            if (erro){
                console.log(erro)
            }else{
                //console.log("Tabela pets criada com sucesso")
            }
        })
    }
}

module.exports = new Tabelas