/*----------- Open and close Menu ------------------*/
const menuMovies = document.querySelector('.sidebar')
const openMenu = document.querySelector('#openMenuAside')
const closeMenu = document.querySelector('#closeMenuAside')
const containersMovies= document.querySelector('.recent_movies_home')


openMenu.addEventListener('click', () =>{
    menuMovies.style.opacity = '1';
    menuMovies.style.width = '100%';
    closeMenu.style.display = 'block' ;
    openMenu.style.display ='none';  
    containersMovies.style.opacity = '0.4';

})

const closeNav=() =>{
    menuMovies.style.opacity = '0';
    menuMovies.style.width = '0';
    closeMenu.style.display = 'none';
    openMenu.style.display ='block';
    containersMovies.style.opacity = '1'
}

closeMenu.addEventListener('click', closeNav)




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

