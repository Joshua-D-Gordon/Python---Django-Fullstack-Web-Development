var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

//console.log("connected")

headOne.addEventListener('mouseover',function(){
    headOne.textContent = "Mouse currently over";
    
    
})

headOne.addEventListener('mouseout', function(){
    headOne.textContent = "hover over me";
})

headTwo.addEventListener("click", function(){
    headTwo.textContent = "CLICKED ON";
})

headTwo.addEventListener('dblclick', function(){
    headTwo.textContent = "doucble clicked";
})