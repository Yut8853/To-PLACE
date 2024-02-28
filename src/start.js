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
    .to('.gs-anim', 1, {
        x:0,
        opacity: 1,
        stagger: .8,
        ease: 'power2.out'
    })

}

window.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(() => {
        loader();
    }, 1000);
})