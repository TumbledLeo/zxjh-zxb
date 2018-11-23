$(function(){
    $('#tan').height($(document).height());
    $('#tan').width($(document).width());
    $('.close').click(function(){
        $('#tan').css('display','none');
    });
    $('.tabContent li .bot').hover(function(){
        $(this).parent().find('.wrap').css('display','block');
        $(this).parent().find('.show').css('display','block');
    },function(){
        $(this).parent().find('.show').hover(function(){
            $(this).css('display','block');
        },function(){
            $(this).css('display','none');
        }); 
        
    });
    $('.option li .jhzl_s').hover(function(){
        $(this).parent().find('.lb_img_wrap').css('display','block');
    },function(){
        $(this).parent().find('.lb_img_wrap').hover(function(){
            $(this).css('display','block');
        },function(){
            $(this).css('display','none');
        });      
    });
    // tab切换
    function tabCtrl(ele) {
        $(ele + ' .tabContents .tabContent').hide().eq(0).show();
        $(ele + ' .tabs .tab').eq(0).addClass('cur');
        $(ele + ' .tabs .tab').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if ($(this).hasClass('cur')) {
                return;
            }
            $(this).addClass('cur').siblings().removeClass('cur');
            let me = $(this);
            let index = 0;
            $(ele + ' .tabs .tab').each(function (i) {
                if (me.get(0) === $(this).get(0)) {
                    index = i;
                }
            });
            $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn();
        });
    }

    tabCtrl('.read');
});