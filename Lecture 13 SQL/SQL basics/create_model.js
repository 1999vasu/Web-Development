const Sequelize = require('sequelize')
const Datatypes = Sequelize.DataTypes

const db = new Sequelize('sampledb1','sampleuser1','samplepass1',{
    host: 'localhost',
    dialect: 'mysql'
})

const Student = db.define('student',{
    name: {
        type: Datatypes.STRING(40),
        allowNull:false
    },
    age: {
        type: Datatypes.INTEGER(2),
        allowNull:false,
        defaultValue: -1
    }
})


module.exports={
    db,Student
}



// db.sync({alter:true})
// .then(()=>console.log("Database Created"))
// .catch(console.error)

