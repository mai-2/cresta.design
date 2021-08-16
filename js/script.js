// スティッキーヘッダー
$(function() {
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header'),
        fvHeight = $fv.outerHeight();
        fixedClass = 'fixed';
    
    $win.on('load scroll', function() {
        var value = $(this).scrollTop();
        if($win.width() > 768) 
        if ( value > fvHeight) {
            $header.addClass(fixedClass);
        } else {
            $header.removeClass(fixedClass);
        }
    });
});

// スライダー
$('.slider').slick( {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
});

// ハンバーガーメニュー
$('.burger-btn').on('click', function() {
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});

// スムーススクロール
$('a[href^="#"]').on('click', function() { // #から始まるURLがクリックされた時
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = $(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    $("html, body").animate(
        {
            scrollTop: position
        },
        speed
    );
    return false;
  });

new WOW().init();