$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

const nav = document.querySelector('.navigation__header');

nav.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.className === 'navigation__link'){
        const id = e.target.dataset.id;
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
})


const section1 = document.querySelector('.section__primary');
const header = document.querySelector('.header');

const stickyMenu = (e) => {
    const [evento] = e;
    if(!evento.isIntersecting) header.classList.add('sticky');
    else header.classList.remove('sticky');
}

const sectionPrimaryObserver = new IntersectionObserver(stickyMenu, {
    root: null,
    threshold: 0
});

sectionPrimaryObserver.observe(section1);



