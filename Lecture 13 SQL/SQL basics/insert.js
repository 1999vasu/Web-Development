const {db,Student} = require("./create_model")


const task = async() =>{
    try{
        await db.sync({alter:true})

        //insert a student
        for(let i=0;i<30;++i){
            await Student.create({
                name: (['harit','jambo','lucus','lucifer','hima','seema',
                'lucy','nancy','preeti','divya'])[parseInt(Math.random()*10)],
                age:10 + parseInt(Math.random()*10)
            })
        }
        

    }catch(e){
        console.error(e)
    }
}

task();