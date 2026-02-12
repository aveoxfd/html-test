$(document).ready(function() {
    $("div").bind("mouseover", function(){
        $(this).css({"background-color":"#ffeaea6e", cursor: "pointer"});   
    }).bind("mouseout", function(){
        $(this).css({"background-color":"",cursor: ""});
    });
    $("#something").animate({
        'margin-top': '300px', 'margin-left': '400px'
    }, 1000); //all elements that have id something

    $('.something') // all element that have class something

    $('div p #something a') //takes all refers in paragraphs that have id 'something' and have parent div

    $('.code p').click(function(){ // all p that have class code
        if ($(this).hasClass('a')){
            alert('this paragraph has class a')
        }
        else (alert('we have not found this'))
    })

    //$('input:text') pseudoclass
    $('input[name = "nick"]').val('Your name')

    alert($('input:submit').val())
    
    $('input:checkbox').val(['InternetExplorer','Opera'])

});