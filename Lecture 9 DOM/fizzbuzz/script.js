let inNum = document.getElementById('inNum')
let btnPrint = document.getElementById('btnPrint')
let ulNumlist = document.getElementById('ulNumlist')



function myprint(){

    let start = Date.now()
    let val = parseInt(inNum.value)
    console.log(val,typeof val)
    ulNumlist.innerHTML = ''
    
    for(let i=1;i<=val;++i){
        let text = ''
        if(i%3==0 && i%5==0){
            text = 'fuzzbuzz'
        }
        else if(i%3==0){
            text = 'fuzz'
        }
        else if(i%5==0){
            text = 'buzz'
        }else{
            text = i
        }
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        ulNumlist.appendChild(li)
        
        // console.log(i,text)
    }


    console.log('time taken: ',Data.now()-start)
}