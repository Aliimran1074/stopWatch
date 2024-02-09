// setInterval(function(){
// document.write('Hello World')
// },2000)

// function timer(){
//     document.write("Ali")
// }
// setInterval(timer,2000)

// var num =1
// setTimeout(function(){
//     document.write(num++)
// },1000)

// setInterval(function(){
//     document.write(num++)
// },1000)

var minutes = 0
var second = 0
var miliSecond= 0
var getMin= document.getElementById('minute')
var getSec= document.getElementById('second')
var getMili= document.getElementById('milisecond')
var interval;
function start(){
  interval=  setInterval(function(){
        miliSecond++
        getMili.innerHTML=miliSecond
        if(miliSecond>=100){
            second++
            getSec.innerHTML=second
            miliSecond=0
    if(second>=60){
        minutes++
        getMin.innerHTML=minutes
        second=0
    }}
    },10)
    // document.getElementById('start').disabled=true
    document.getElementById('start').style.display='none'    
}
function stop(){
    clearInterval(interval)
    // document.getElementById('start').disabled=false
    document.getElementById('start').style.display='block'    

}
function reset(){
    minutes=0
    second=0
    miliSecond=0
    getMili.innerHTML=miliSecond
    getMin.innerHTML=minutes
    getSec.innerHTML=second
}

