var swiper = new Swiper(".swiper1",{
    pagination: {
        el:".swiper-pagination",
        dynamicBullets:true,
    },
});

var swiper2 = new Swiper(".swiper2",{
    slidesPerView:3,
    spaceBetween:10,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
})