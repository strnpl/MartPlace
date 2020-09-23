$(function(){
 

  $('.products__slider-inner').slick({
    prevArrow: '<button class="slick-prev slick-arrow lnr lnr-chevron-left"></button>',
    nextArrow: '<button class="slick-next slick-arrow lnr lnr-chevron-right"></button>'
  });


  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'
  });

 
});