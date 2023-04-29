const pullDownButton = document.getElementById("lists")

pullDownButton.addEventListener('click',function(){
    console.log("クリック");
});

pullDownButton.addEventListener('mouseover',function(){
    console.log("乗る");
});

pullDownButton.addEventListener('mouseout',function(){
    console.log("外れる");
});