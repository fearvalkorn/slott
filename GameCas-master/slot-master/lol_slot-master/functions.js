var ar = ['akali.ico', 'akali.ico', 'akali.ico', 'brand.ico', 'brand.ico', 'annie.ico', 'annie.ico'];

// , 'annie.ico', 'annie.ico', 'annie.ico', 'annie.ico', 'annie.ico', 'annie.ico', 'annie.ico', 'annie.ico', 'draven.png', 'draven.png', 'draven.png', 'draven.png', 'fiora.ico', 'fiora.ico', 'fiora.ico', 'fiora.ico', 'fiora.ico', 'fiora.ico', 'fiora.ico', 'fiora.ico', 'lee.ico', 'lee.ico', 'lee.ico', 'lee.ico', 'lee.ico', 'lee.ico', 'olaf.ico', 'olaf.ico', 'olaf.ico', 'olaf.ico', 'thresh.png', 'thresh.png', 'zed.png', 'zed.png'



function fillColumns() {
    for (var i = 0; i < 21; i++) {
        kolona1.append('<div class="box"></div>');
        kolona2.append('<div class="box"></div>');
        kolona3.append('<div class="box"></div>');
        kolona4.append('<div class="box"></div>');
        kolona5.append('<div class="box"></div>');
    }
}


function startTheSpin() {
    addNewColumns();
    fillNewColumns();
    startAnimation();
}

function addNewColumns() {
    for (var i = 1; i < 6; i++) {
        container.append('<div class="newnew newColumns' + i + '"</div>');
    }
}

function startAnimation() {
    test = 0;
    kolona1.animate({
        top: "+=4200px"
    }, 1000, function() {
        $(this).remove();
    })
    $('.newColumns1').animate({
        top: "+=4200px"
    }, 1000, function() {

    })
    kolona2.animate({
        top: "+=4200px"
    }, 1200, function() {
        $(this).remove();
    })
    $('.newColumns2').animate({
        top: "+=4200px"
    }, 1200, function() {

    })
    kolona3.animate({
        top: "+=4200px"
    }, 1400, function() {
        $(this).remove();
    })
    $('.newColumns3').animate({
        top: "+=4200px"
    }, 1400, function() {

    })
    kolona4.animate({
        top: "+=4200px"
    }, 1600, function() {
        $(this).remove();
    })
    $('.newColumns4').animate({
        top: "+=4200px"
    }, 1600, function() {

    })
    kolona5.animate({
        top: "+=4200px"
    }, 1800, function() {
        $(this).remove();
    })
    $('.newColumns5').animate({
        top: "+=4200px"
    }, 1800, function() {
        test++;
        if (test === 1) {
            $('.delete').remove();
            $('.newnew').addClass('delete');
            checkLines();
        };


    })
}

function fillNewColumns() {
    for (var i = 0; i < 21; i++) {
        var rand = Math.floor(Math.random() * ar.length);
        var rand1 = Math.floor(Math.random() * ar.length);
        var rand2 = Math.floor(Math.random() * ar.length);
        var rand3 = Math.floor(Math.random() * ar.length);
        var rand4 = Math.floor(Math.random() * ar.length);
        $('.newColumns1').append('<div class="box"><img src="img/' + ar[rand] + '"></div>');
        $('.newColumns2').append('<div class="box"><img src="img/' + ar[rand1] + '"></div>');
        $('.newColumns3').append('<div class="box"><img src="img/' + ar[rand2] + '"></div>');
        $('.newColumns4').append('<div class="box"><img src="img/' + ar[rand3] + '"></div>');
        $('.newColumns5').append('<div class="box"><img src="img/' + ar[rand4] + '"></div>');
    }
}

function checkLines() {
    $('.newColumns1').find('.box').eq(0).addClass('prva1');
    $('.newColumns1').find('.box').eq(1).addClass('prva2');
    $('.newColumns1').find('.box').eq(2).addClass('prva3');

    $('.newColumns2').find('.box').eq(0).addClass('druga1');
    $('.newColumns2').find('.box').eq(1).addClass('druga2');
    $('.newColumns2').find('.box').eq(2).addClass('druga3');

    $('.newColumns3').find('.box').eq(0).addClass('treca1');
    $('.newColumns3').find('.box').eq(1).addClass('treca2');
    $('.newColumns3').find('.box').eq(2).addClass('treca3');

    $('.newColumns4').find('.box').eq(0).addClass('cetvrta1');
    $('.newColumns4').find('.box').eq(1).addClass('cetvrta2');
    $('.newColumns4').find('.box').eq(2).addClass('cetvrta3');

    $('.newColumns5').find('.box').eq(0).addClass('peta1');
    $('.newColumns5').find('.box').eq(1).addClass('peta2');
    $('.newColumns5').find('.box').eq(2).addClass('peta3');


    var prva1 = $('.prva1');
    var prva2 = $('.prva2');
    var prva3 = $('.prva3');

    var druga1 = $('.druga1');
    var druga2 = $('.druga2');
    var druga3 = $('.druga3');

    var treca1 = $('.treca1');
    var treca2 = $('.treca2');
    var treca3 = $('.treca3');

    var cetvrta1 = $('.cetvrta1');
    var cetvrta2 = $('.cetvrta2');
    var cetvrta3 = $('.cetvrta3');

    var peta1 = $('.peta1');
    var peta2 = $('.peta2');
    var peta3 = $('.peta3');


    var prva1_src = prva1.find('img').attr('src');
    var prva2_src = prva2.find('img').attr('src');
    var prva3_src = prva3.find('img').attr('src');

    var druga1_src = druga1.find('img').attr('src');
    var druga2_src = druga2.find('img').attr('src');
    var druga3_src = druga3.find('img').attr('src');

    var treca1_src = treca1.find('img').attr('src');
    var treca2_src = treca2.find('img').attr('src');
    var treca3_src = treca3.find('img').attr('src');

    var cetvrta1_src = cetvrta1.find('img').attr('src');
    var cetvrta2_src = cetvrta2.find('img').attr('src');
    var cetvrta3_src = cetvrta3.find('img').attr('src');

    var peta1_src = peta1.find('img').attr('src');
    var peta2_src = peta2.find('img').attr('src');
    var peta3_src = peta3.find('img').attr('src');



    if (prva1_src == druga1_src) {
        animateWin(prva1, druga1);
    }else if(prva1_src == druga1_src == treca1_src) {
        // animateWin(prva1, druga1, treca1) 
        alert("aaa")
    }else if(prva1_src == druga1_src == treca1_src == cetvrta1_src){
        animateWin(prva1, druga1, treca1, cetvrta1)
    }else if(prva1_src == druga1_src == treca1_src == cetvrta1_src == peta1_src){
        animateWin(prva1, druga1, treca1, cetvrta1, peta1)
    }

    if (prva2_src == druga2_src) {
        animateWin(prva2, druga2);
    }else if(prva2_src == druga2_src == treca2_src) {
        animateWin(prva2, druga2, treca2)
    }else if(prva2_src == druga2_src == treca2_src == cetvrta2_src){
        animateWin(prva2, druga2, treca2, cetvrta2)
    }else if(prva2_src == druga2_src == treca2_src == cetvrta2_src == peta2_src){
        animateWin(prva2, druga2, treca2, cetvrta2, peta2)
    }

    if (prva3_src == druga3_src) {
        animateWin(prva3, druga3);
    }else if(prva3_src == druga3_src == treca3_src) {
        animateWin(prva3, druga3, treca3)
    }else if(prva3_src == druga3_src == treca3_src == cetvrta3_src){
        animateWin(prva3, druga3, treca3, cetvrta3)
    }else if(prva2_src == druga3_src == treca3_src == cetvrta3_src == peta3_src){
        animateWin(prva2, druga2, treca2, cetvrta2, peta3)
    }

}



function animateWin(box1, box2, box3, box4, box5) {

    $(box1).css('background', 'yellow');
    $(box2).css('background', 'yellow');
    $(box3).css('background', 'yellow');
    $(box4).css('background', 'yellow');
    $(box5).css('background', 'yellow');
}

