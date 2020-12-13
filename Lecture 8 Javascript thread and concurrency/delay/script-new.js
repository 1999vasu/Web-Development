let btnWait = document.getElementById('btnWait')
let btnCount = document.getElementById('btnCount')
let divStatus = document.getElementById('divStatus')
let divVal = document.getElementById('divVal')

let count = 0

btnCount.onclick = function(){
    count++
    console.log('count ',count)
    divVal.textContent = count;
}

btnWait.onclick = function() {
    divStatus.textContent = "WAITING"
    console.log("Waiting")
    setTimeout(function(){
        divStatus.textContent = "DONE"
        console.log("Done")
    },5000);  
}