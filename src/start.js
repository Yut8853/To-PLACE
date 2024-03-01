import gsap from 'gsap';

export function loader() {
    let loadItem = document.querySelectorAll('.loader__bg');
    
    const tl = gsap.timeline()
    gsap.set(loadItem,{
        transformOrigin: '100% 100%',
        scaleX: 1
    }),
    tl.to(loadItem,{
        scaleX: 0,
        transformOrigin: '0% 0%',
        stagger: 0.07,
        ease: 'power4.inOut'
    })
    .to(".overlay-white", {
        duration: .7,
        xPercent: 100,
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
      })
    .to(".overlay-red", {
        duration: .9,
        xPercent: 150,
        ease: "cubic-bezier(0.961, 0.83, 0.961)",
      })
    .to('.overlay-white2', {
        duration: .7,
        xPercent: 100,
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
    })
    .to('.overlay-red2', {
        duration: .9,
        xPercent: 100,
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
    })

}

window.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(() => {
        loader();
    }, 100);
})