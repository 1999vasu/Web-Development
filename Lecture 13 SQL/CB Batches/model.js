const Sequelize = require('sequelize')
const db = new Sequelize('sampledb1','sampleuser1','samplepass1',{
    host: 'localhost',
    dialect: 'mysql'
})


const {DataTypes} = require('sequelize')
const Course = db.define('course',{
    id:{
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: DataTypes.STRING(28)
})


const Teacher = db.define('teacher',{
    name: {
        type: DataTypes.STRING(35),
        allownull: false
    }
})


const Center = db.define('center',{
    id:{
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(15),
        allownull:false
    },
    city:{
        type: DataTypes.STRING(15),
        allownull:false
    }
})


const Season = db.define('season',{
    id:{
        type: DataTypes.STRING(1),
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING(10),
        allownull:false
    }
})

const Batch = db.define('batch',{
    code:{
        type: DataTypes.STRING(8),
        primaryKey: true
    },
    year: DataTypes.INTEGER(4),
    start: DataTypes.DATE,
    end: DataTypes.DATE
})

//Associations
Batch.belongsTo(Center)
Batch.belongsTo(Season)
Batch.belongsTo(Course)


Course.hasMany(Batch)
Center.hasMany(Batch)
Season.hasMany(Batch)

db.sync({alter:true})

module.exports= {
    db,Center,Season,Batch,Course,Teacher
}