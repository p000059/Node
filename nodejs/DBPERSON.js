const Sequelize = require('sequelize')
const sequelize = new Sequelize('DBPERSON', 'root', 'debian', {
    host: "localhost",
    dialect: "mysql",

})

sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!")
}).catch(function(erro){
    console.log("Conexão com erro!")
})

const Person = sequelize.define('Person', {
    nmPerson: {
        type: Sequelize.STRING
    },

    tpPerson: {
        type: Sequelize.STRING
    } 
})



