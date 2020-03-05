const distanceTop = $(window).height();
$(window).scroll(function () {
    // 対象までの高さ
    var distanceTop = $(window).height();

    if ($(window).scrollTop() < distanceTop) {
        $('#top').fadeIn("slow");
        $('#the_black_cat').fadeOut("slow");

        $('#pagination1').empty();
        $('#pagination1').append(
            '<img src="img/blood_w_after.png" alt="" class="blood_after">',
        );
        $('#pagination2').empty();
        $('#pagination2').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
        $('#pagination3').empty();
        $('#pagination3').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
        $('#pagination4').empty();
        $('#pagination4').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
    }

    if ($(window).scrollTop() > distanceTop && $(window).scrollTop() < distanceTop * 2) {
        $('#top').fadeOut("slow");
        $('#the_black_cat').fadeIn("slow");
        $('#poe').fadeOut("slow");

        $('#pagination1').empty();
        $('#pagination1').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
        $('#pagination2').empty();
        $('#pagination2').append(
            '<img src="img/blood_w_after.png" alt="" class="blood_after">',
        );
        $('#pagination3').empty();
        $('#pagination3').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
        $('#pagination4').empty();
        $('#pagination4').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
    }

    if ($(window).scrollTop() > distanceTop * 2 && $(window).scrollTop() < distanceTop * 3) {
        $('#the_black_cat').fadeOut("slow");
        $('#poe').fadeIn("slow");
        $('#books').fadeOut("slow");

        $('#pagination1').empty();
        $('#pagination1').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
        $('#pagination2').empty();
        $('#pagination2').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
        $('#pagination3').empty();
        $('#pagination3').append(
            '<img src="img/blood_w_after.png" alt="" class="blood_after">',
        );
        $('#pagination4').empty();
        $('#pagination4').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
    }

    if ($(window).scrollTop() > distanceTop * 3 && $(window).scrollTop() < distanceTop * 4) {
        $('#poe').fadeOut("slow");
        $('#books').fadeIn("slow");

        $('#pagination1').empty();
        $('#pagination1').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
        $('#pagination2').empty();
        $('#pagination2').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
        $('#pagination3').empty();
        $('#pagination3').append(
            '<img src="img/blood_w_before.png" alt="" class="blood_before">',
        );
        $('#pagination4').empty();
        $('#pagination4').append(
            '<img src="img/blood_w_after.png" alt="" class="blood_after">',
        );
    }
});
