$( ()=>{
    let list  = $('#list')
    let page =1
    $('#fetch').click(() => {
        $.get(`https://reqres.in/api/users?page=${page}`,(data)=>{
            page++
            for(let person of data.data){
                console.log(person.avatar)
                list.append(
                    
                    // 
                    $( `<li>                  
                    <img src='${person.avatar}'>
                    ${person.first_name} ${person.last_name}
                    
                    </li>`)
                )
                
            }
        })
    }
    )



}
)