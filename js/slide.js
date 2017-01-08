$('#slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

$('#slide .slick-dots li:nth-child(1)').html('<img src="./images/zodiac/aquarius.svg"></img><span>aquarius<span>');
$('#slide .slick-dots li:nth-child(2)').html('<img src="./images/zodiac/pisces.svg"></img><span>pisces<span>');
$('#slide .slick-dots li:nth-child(3)').html('<img src="./images/zodiac/aries.svg"></img><span>aries<span>');
$('#slide .slick-dots li:nth-child(4)').html('<img src="./images/zodiac/taurus.svg"></img><span>taurus<span>');
$('#slide .slick-dots li:nth-child(5)').html('<img src="./images/zodiac/gemini.svg"></img><span>gemini<span>');
$('#slide .slick-dots li:nth-child(6)').html('<img src="./images/zodiac/cancer.svg"></img><span>cancer<span>');
$('#slide .slick-dots li:nth-child(7)').html('<img src="./images/zodiac/leo.svg"></img><span>leo<span>');
$('#slide .slick-dots li:nth-child(8)').html('<img src="./images/zodiac/virgo.svg"></img><span>virgo<span>');
$('#slide .slick-dots li:nth-child(9)').html('<img src="./images/zodiac/libra.svg"></img><span>libra<span>');
$('#slide .slick-dots li:nth-child(10)').html('<img src="./images/zodiac/scorpio.svg"></img><span>scorpio<span>');
$('#slide .slick-dots li:nth-child(11)').html('<img src="./images/zodiac/sagittarius.svg"></img><span>sagittarius<span>');
$('#slide .slick-dots li:nth-child(12)').html('<img src="./images/zodiac/capricorn.svg"></img><span>capricorn<span>');

$('#slide .slick-dots li').css({
    width: 50,
    height: 50,
    margin: 15
})

$('#slide .slick-dots li').click(function() {
    $('#slide .slick-dots li').removeClass('dot-focus');
    $(this).addClass('dot-focus');
});
