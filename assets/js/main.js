$('.botonVer').click(function () {
    $('.ocultar').removeClass('d-none');
    $('.botonVer').addClass('d-none');
    $('.botonMenos').removeClass('d-none');
});

$('.botonMenos').click(function () {
    $('.ocultar').addClass('d-none');
    $('.botonVer').removeClass('d-none');
    $('.botonMenos').addClass('d-none');
});

