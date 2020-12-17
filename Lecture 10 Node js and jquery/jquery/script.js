$(() => {

    let item = $('#item')

    $('#prepend').click(()=>{
        let text = item.val()
        $('#list').prepend($(`<li>${text}</li>`))
        // $('#list').prepend($(`<li>`).text(text)) another way
    }
    )

    $('#append').click(()=>{
        let text = item.val()
        $('#list').append($(`<li>${text}</li>`))
    }
    )
})