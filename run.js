var names;
var interval;

$(document).ready(function(){
    $("#btn").click(doRandom); 
});

doRandom = function(){
    if($("#btn").html() == '开始'){
        names = $("#names").val().split(",");
        show();
        $("#btn").html("停")
    }else{
        clearInterval(interval);
        $("#btn").html("开始")
    }
}

show = function(){
    interval = setInterval(function(){
        $(".dd").html(names[randomNum(0,names.length-1)]);
    },35);  
}

randomNum = function (minNum,maxNum){ 
    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
} 