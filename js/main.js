$(function(){
    let $accordion = $('.accordion'),
        $accordion_trigger = $accordion.find('button a'),
        $card_contents = $('.card_contents');
    
    console.log($accordion_trigger);
    $accordion_trigger.on('click',function(){
        
        $accordion.find($(this).attr('href')).toggleClass('active');
        console.log($accordion.find($(this).attr('href')));
    })

});