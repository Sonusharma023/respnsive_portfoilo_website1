/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');

    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal');
        })
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixer = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const lineWork = document.querySelectorAll('.work__item')

function activeWork(){
    lineWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
}
lineWork.forEach(L=> L.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
var swiper = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop:true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      }, 
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop  &&  scrollY  <=  sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.querySelector('#theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

//previous selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

//we validate if the user previously choose a topic
if(selectedTheme){
  //if the valication is fullfilled, we ask what the issue was to know if we activated or deactivated the dark
 document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
 themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}
//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
  //add or remove the dark / icon 
  document.body.classList.toggle(lightTheme)
  themeButton.classList.toggle(iconTheme)

  //we save the theme and the current icon that the user choose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration:2500,
    delay:400,
    // reset: true,
})
sr.reveal('.home__data')
sr.reveal('.home__handle', {delay:700})
sr.reveal('.home__social, .home__scroll', {delay:900, origin: 'bottom'})
sr.reveal('.profile__social', {delay:700})
sr.reveal('.profile__info-group', {interval:100,delay:700})
sr.reveal('.profile__buttons', {delay:800})
sr.reveal('.filter__content', {delay:900})
sr.reveal('.filters', {delay:1000})
sr.reveal('.contact-section', {delay:1000})
