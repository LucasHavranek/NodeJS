const uploadArquivos = require('../arquivos/uploadArquivos')
const conexao = require('../infraestrutura/conexao')

class Pet {
    adiciona(pet, res){
        const query = 'INSERT INTO pets SET ?'
    
    uploadArquivos(pet.imagem, pet.nome, (erro, novoCaminho) => {
        if(erro){
            res.status(400).json({erro})
        }else{
            const novoPet = {nome: pet.nome, imagem: novoCaminho}
            conexao.query(query, novoPet, erro => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(novoPet)
            }
        })
        }
        
    })   
}
}

module.exports = new Pet()