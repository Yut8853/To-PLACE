import { gsap } from 'gsap';

function triggerAnimation02() {
    const loadItem = document.querySelectorAll('.loader__bg');
    
    const tl = gsap.timeline();
    
    tl.set(loadItem, {
        transformOrigin: '100% 100%',
        scaleX: 1
    })
    .to(loadItem, {
        scaleX: 0,
        transformOrigin: '0% 0%',
        stagger: 0.07,
        ease: 'power4.inOut'
    })
   
}

triggerAnimation02();