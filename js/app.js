/*----------- Open and close Menu ------------------*/
const menuMovies = document.querySelector('.aside_menu')
const openMenu = document.querySelector('#openMenuAside')
const closeMenu = document.querySelector('#closeMenuAside')
const titleMovies = document.querySelector('.sidebar h3')

openMenu.addEventListener('click', () =>{
    menuMovies.style.width = '80px';
    titleMovies.style.display = 'none';
})







// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // RESPONSIVE BREAKPOINTS

    breakpoints: {
        // when windows width is > = 600px

        600: {
            slidesPerView: 2,
        },
        // when windows width is > = 1024px

        1024: {
            slidesPerView: 3,
        }

    }
});


/*
function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video' );    
    trailer.classList.toggle('active')
    video.currentTime=0;
    video.pause();
}
*/

function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const iframe = document.querySelector('iframe');
    trailer.classList.toggle('active')
    iframe.currentTime = 0;
    iframe.pause();
}



const closePop = document.querySelector('.close__popup')

closePop.addEventListener('click', () => {
    trailer.style.display='none';
})



