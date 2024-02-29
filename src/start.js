import gsap from 'gsap';

function loader() {
    const loader = document.querySelector('.loader');
    let loadItem = document.querySelectorAll('.loader__bg');
    
    const tl = gsap.timeline()
    gsap.set(loadItem,{
        transformOrigin: '100% 100%',
        scaleX: 1
    }),
    tl.to(loadItem,{
        scaleX: 0,
        transformOrigin: '0% 0%',
        stagger: 0.15,
        ease: 'power4.inOut'
    })

}

window.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(() => {
        loader();
    }, 1000);
})