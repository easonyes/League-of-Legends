var show = false;



$('.side-btn').on('click', function () {
    if (!show) {
        $('.side-back').fadeIn(400);
        $('.side-area').animate({right: 0}, 300);
        $('body').css('overflow-y', 'hidden');
    } else {
        $('.side-back').fadeOut(400);
        $('.side-area').animate({right: -225}, 300);
        $('body').css('overflow-y', 'visible');
    }
    show = !show;
});

$('.side-back').on('click', function () {
    show = false;
    $('.side-back').fadeOut(400);
    $('.side-area').animate({right: -225}, 300);
    $('body').css('overflow-y', 'visible');
});


(function () {
    var time = new Date();
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();

    var x = time.getDay();

    var ar = ['日', '一', '二', '三', '四', '五', '六'];
    var str = '星期' + ar[x];

    $('.side-week').html(str);
    $('.side-data').html(y + '/' + m + '/' + d)

})()

var ss;

$('.ff-show').hover(function(){
    clearTimeout(ss)
    
    var index = $(this).attr('data')
    $('.ff-manys').hide()
    $('.ai').removeClass()
    $(this).next().addClass('ai')
    $('.ff-manys').eq(index).show()

}, function(){

    ss = setTimeout(function(){
        $('.ff-manys').hide()
        $('.ai').removeClass()
    },300);
})

$('.ff-manys').hover(function(){
    clearTimeout(ss)
}, function(){
    
     ss = setTimeout(function(){
        $('.ff-manys').hide()
         $('.ai').removeClass()
    },300);
})






