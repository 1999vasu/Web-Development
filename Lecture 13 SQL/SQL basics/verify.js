const {db,Student} = require("./create_model")
const { Op } = require('sequelize')

const task = async()=>{
    try{
        await db.sync()

        const students = await Student.findAll({
            where: {age: {[Op.gt]: 10}},
            order:[
                ['age','DESC']
            ]
        })
        students.forEach(s=> console.log(
            `name: ${s.dataValues.name} \t\t age:${s.dataValues.age}`))

    }catch(e){
        console.error(e)
    }
}

task();