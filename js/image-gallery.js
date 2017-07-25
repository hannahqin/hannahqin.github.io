var slideIndex = 1;
var slides = $(".slide");

function openModal() {
    $('#modal-gallery').fadeIn().css('display', 'flex');
    $("body").addClass("modal-open");
}

function closeModal() {
    $('#modal-gallery').hide();
    $("body").removeClass("modal-open")
}

function showOrHideArrows() {
    if (slideIndex == 0) {
        $('.prev').hide();
    } else {
        $('.prev').show();
    }

    if (slideIndex == slides.length - 1) {
        $('.next').hide();
    } else {
        $('.next').show();
    }
}

function showSlide(n) {
    slideIndex = n;

    for (i = 0; i < slides.length; i++) {
        $(slides[i]).hide();
    }

    $(slides[slideIndex]).show();
    showOrHideArrows();
}

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        $(slides[slideIndex++]).hide();
        $(slides[slideIndex]).show();
        showOrHideArrows();
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        $(slides[slideIndex--]).hide();
        $(slides[slideIndex]).show();
        showOrHideArrows();
    }
}