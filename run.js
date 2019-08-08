var names;
var interval;
var result_txt="";

$(document).ready(function(){
    $("#btn").click(doRandom); 
});

doRandom = function(){
    if($("#btn").html() == '开始'){
        names = $("#names").val().split(" ");
        show();
        $("#btn").html("停")
    }else{
        clearInterval(interval);
        result_txt+=$("#hi").html()+"<br />";
        names.remove($("#hi").html());
        $("#names").val(names.join(" "));
        $("#result").html(result_txt);
        $("#btn").html("开始")
    }
}

show = function(){
    interval = setInterval(function(){
        $("#hi").html(names[randomNum(0,names.length-1)]);
    },35);  
}

randomNum = function (minNum,maxNum){ 
    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
} 

Array.prototype.indexOf = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i;
	}
	return -1;
};

Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};