const endTime = "01 March 2023 7:32  PM"
document.getElementById('endTime').innerText = endTime
const input = document.querySelectorAll("input")




const Clock = () =>{

    const end = new Date(endTime)
    const now = new Date()
    const diff = (end-now)/1000
    
     if(diff<0){return}
    // convert into days 
    input[0].value = Math.floor(diff / 3600 / 24)
    // console.log(Math.floor(diff / 3600 / 24))
    // convert into hours
    input[1].value = Math.floor((diff / 3600 )% 24)
    // convert into min
    input[2].value = Math.floor((diff / 60) % 60)
    // convert into sec
    input[3].value = Math.floor(diff %60)

}
Clock()


setInterval(
    ()=>{
        Clock()
    },1000
)