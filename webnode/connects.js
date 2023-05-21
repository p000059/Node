const dbSequelize = require('sequelize')
const sequelize = new dbSequelize('BDCADMIN', 'root', 'debianmysql', {
    host: '192.168.1.198',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>successfully()).catch((error) => errorConnect(error))

function successfully (){
    console.log('Successfully Connected')
}

function errorConnect(error){
    console.log(`Connection Error => ${error}`)
}