let arrow = document.querySelector('.arrow-top');
window.onscroll = ()=> {
    if (window.pageYOffset > 400)
    {
    arrow.classList.add('show')
    }else
    {
        arrow.classList.remove('show')
    }
}
arrow.addEventListener('click', ()=> {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})


// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView : 4,
    spaceBetween: 1
  });