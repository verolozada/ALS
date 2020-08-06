$('.botonVer').click(function () {
    $('.ocultar').removeClass('d-none');
    $('.botonVer').addClass('d-none');
    $('.botonMenos').removeClass('d-none');
    document.getElementById("primertexto").scrollIntoView({behavior: "smooth"});
});

$('.botonMenos').click(function () {
    $('.ocultar').addClass('d-none');
    $('.botonVer').removeClass('d-none');
    $('.botonMenos').addClass('d-none');
    document.getElementById("primertexto").scrollIntoView({behavior: "smooth"});
});

