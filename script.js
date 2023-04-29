const pullDownButton = document.getElementById("lists")

pullDownButton.addEventListener('click',function(){
    pullDownButton.setAttribute("style","background-color:green;")
});

pullDownButton.addEventListener('mouseover',function(){
    pullDownButton.setAttribute("style","background-color:blue;")
});

pullDownButton.addEventListener('mouseout',function(){
    pullDownButton.removeAttribute("style","background-color:red;")
});