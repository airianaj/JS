const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")

pullDownButton.addEventListener('click',function() {
 this.setAttribute("style","display:block;")
});

pullDownButton.addEventListener('mouseover',function(){
    pullDownButton.setAttribute("style","background-color:blue;")
});

pullDownButton.addEventListener('mouseout',function(){
    pullDownButton.removeAttribute("style","background-color:red;")
});