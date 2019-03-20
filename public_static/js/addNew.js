$(document).ready(function(){
    $('.carousel').carousel();

    $('button').click(function(){
        var name = $('#name').val().trim();
        var units = $('#units').val().trim();

        if(name.length == 0 || units.length == 0)
            console.log("Please fill all the fields")

        var arr = $('.weekDay'), flag = false;
        for(var i=0; i<7; i++) 
        {
            var num = arr[i].value;
            if(num.length > 0) flag = true;
        }

        // Send arr in a post req to server, redirect to home page

    })


});
     