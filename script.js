$(function(){
    $(".input button").hover(function(){
        $(this).css("background-color", "rgb(42, 129, 42)");
    },function(){
        $(this).css("background-color", "rgb(61, 185, 61)");
    }).click(function(){
        if($(".input input").val().charAt(0)!=" "&&$(".input input").val()!=""){
        $(".to-do").append("<ul><li>"+$(".input input").val()+"</li><li>"+$(".input textarea").val()+"</li><li><input type='checkbox'></li></ul>");
        $(".input input").val("");
        $(".input textarea").val("");}
    })
} 

)