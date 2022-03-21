class MotoboyDAO{

    constructor(db){
        this.db = db
    }

   
    pegaTodosMotoboys = ()=>{
        
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM MOTOBOYS', (error, rows)=>{
                if(error){
                  
                    reject(error)
                }else{
                    resolve(rows)
                }
            })
        })
    }

    pegaUmMotoboy = (contato)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM MOTOBOYS WHERE CONTATO = ?',
            contato,
            (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "motoboy": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaUmMotoboyId = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM MOTOBOYS WHERE ID = ?',
            id,
            (error, rows)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "motoboy": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    insereMotoboy = (novoMotoboy) =>{

        return new Promise((resolve, reject)=>{
          
            this.db.run("INSERT INTO MOTOBOY(NOME, MOTO, CONTATO, PEDIDO) VALUES (?, ?, ?,?)",
                novoMotoboy.nome, novoMotoboy.moto, novoMotoboy.contato, novoMotoboy.pedido,
                (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(`Motoboy ${novoMotoboy.nome} inserido com sucesso`)
                }
            })
        })

    }

    deletaMotoboy = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM MOTOBOYS WHERE ID = ?',
            id,
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "motoboy": `Motoboy de id ${id} deletado com sucesso`,
                        "erro": false
                    })
                }
            })
        })
    }

    atualizaMotoboy = (id, motoboy)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE MOTOBOYS SET NOME = ?, EMAIL = ?,CONTATO = ?, PEDIDO = ? WHERE ID = ?,',
            motoboy.nome, motoboy.moto, motoboy.contato,motoboy.pedido,
            id,
            (error)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({
                        "mensagem": `Motoboy de id ${id} atualizado com sucesso`,
                        "motoboy": motoboy,
                        "erro": false
                    })
                }
            })
        })
    }

}

export default MotoboyDAO