window.onload = function () {

    ///////////////
    // BOOKS 表示切替
    ///////////////
    $(function () {
        $('.book1').click(function () {
            $('.main_book_img').attr('src', 'img/the_gold_bug.png');
            $('.book_title').replaceWith(
                '<p class="book_title">黄金虫</p>'
            );
            $('.about_book').empty();
            $('.about_book').append(
                '<span>発売日</span>： 1995/5/28 <br>',
                '<span>文庫</span>: 305ページ <br>',
                '<span>出版社</span>: 橋本文庫 <br>',
                '<span>ISBN-13</span>: 978-4087520255<br>',
                '<span>定価</span>：580円<br>'
            );
        });
        $('.book2').click(function () {
            $('.main_book_img').attr('src', 'img/black_cat3.png');
            $('.book_title').replaceWith(
                '<p class="book_title">The Black Cat</p>'
            );
            $('.about_book').empty();
            $('.about_book').append(
                '<span>発売日</span>： 1996/5/28 <br>',
                '<span>文庫</span>: 292ページ <br>',
                '<span>出版社</span>: 橋本文庫 <br>',
                '<span>ISBN-13</span>: 978-4087520256<br>',
                '<span>定価</span>：540円<br>'
            );
        });
        $('.book3').click(function () {
            $('.main_book_img').attr('src', 'img/Morgue.png');
            $('.book_title').replaceWith(
                '<p class="book_title">モルグ街の殺人事件</p>'
            );
            $('.about_book').empty();
            $('.about_book').append(
                '<span>発売日</span>： 1997/5/28<br>',
                '<span>文庫</span>: 260ページ<br>',
                '<span>出版社</span>: 橋本文庫<br>',
                '<span>ISBN-13</span>: 978-4087520257<br>',
                '<span>定価</span>：500円<br>'
            );
        });
        $('.book4').click(function () {
            $('.main_book_img').attr('src', 'img/masterpieces.png');
            $('.book_title').replaceWith(
                '<p class="book_title">ポー傑作集</p>'
            );
            $('.about_book').empty();
            $('.about_book').append(
                '<span>発売日</span>： 1998/5/28<br>',
                '<span>文庫</span>: 452ページ<br>',
                '<span>出版社</span>: 橋本文庫<br>',
                '<span>ISBN-13</span>: 978-4087520258<br>',
                '<span>定価</span>：640円<br>'
            );
        });
    });

    ///////////////
    // 背景がホバーで動く
    ///////////////
    //#backgroundを取得
    let background = document.getElementById('background');

    document.addEventListener('mousemove', event => {

        //X座標(値は適宜調整)
        var x = Math.round(event.pageX / 100);
        //Y座標(値は適宜調整)
        var y = Math.round(event.pageY / 100);

        //#backgroundのX軸・Y軸を設定
        background.style.marginLeft = x + 'px';
        background.style.marginTop = y + 'px';
    });

};