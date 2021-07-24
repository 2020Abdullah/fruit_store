$(function(){

     'use-strict';

    $('p').addClass('lead');

    $('.fa-star').on('click', function(){

        $(this).toggleClass('checked').prevAll().addClass('checked');
    
    });

    $('header').find('a').on('click',function(e){
        if(this.hash !== ''){
            
                e.preventDefault();
            
                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(this.hash).offset().top

                },1000,function(){
                
                    window.Location.hash = hash;

                });
        };
    });

    $(window).on('load',function(){
        function loading(){
           $(".overlay img").animate({
            opacity: '1',
           },5000,function(){
               $('.overlay').slideUp(4000, function(){
                   $(this).remove();
                   $('body').css('overflow', 'auto')
               });
           })
        };
        window.setTimeout( loading , 500 ); // 1 seconds
     })
});