$(document).ready(function(){
    $("#btn").click(doRandom); 
});

doRandom = function(){
    var names = $("#names").val().split(",");
    $(".dd")
        .html(names[randomNum(0,names.length-1)]);
}

randomNum = function (minNum,maxNum){ 
    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
} 