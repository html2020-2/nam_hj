$(document).ready(function(){
    $('.head').load('../header.html .header');

    // _openBtn.on('click',function(){ 동적생성되어진 태그 이벤트 호출
    $(document).on('click', '.gnb_open_btn', function () {
        $('#header #gnb').css('display','block').stop().animate({right:0},300,function(){
            $(this).find('.first').focus();
            $('.first').on('keydown',function(e){
                if(e.shiftKey&&e.keyCode===9){
                    $('.last').focus();
                    return false;
                }
            });
            $('.last').on('keydown',function(){
                if(!e.shiftKey&&e.keyCode===9){
                    $('.first').focus();
                    return false;
                }
            });
        });
    });
    $(document).on('click', '.gnb_close_btn', function () {
        $('#header #gnb').css('display','none').stop().animate({right:'-100%'},300,function(){
            $('.gnb_open_btn').focus();
        });
    });
});
