function pulldown(){
const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")
const pullDownChild = document.querySelectorAll(".pull-down-list")
const currentList = document.getElementById("current-list")

pullDownButton.addEventListener('click',function() {
    if(pullDownParents.getAttribute('style') == "display:block;"){
        pullDownParents.removeAttribute("style","display:block;")
    }　else{
        pullDownParents.setAttribute("style","display:block;")
    }
});

pullDownButton.addEventListener('mouseover',function(){
    this.setAttribute("style","background-color:blue;")
});

pullDownButton.addEventListener('mouseout',function(){
    this.removeAttribute("style","background-color:red;")
});

pullDownChild.forEach(function(list){
    list.addEventListener('click', function(){
        const value = list.innerHTML
        currentList.innerHTML = value
        console.log(value)
    })
});
}
window.addEventListener('load', pulldown)