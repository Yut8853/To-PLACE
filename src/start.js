import gsap from 'gsap';

function loader() {
    let loadItem = document.querySelectorAll('.loader__bg');
    
    const tl = gsap.timeline()
    gsap.set(loadItem,{
        transformOrigin: '100% 100%',
        scaleX: 1
    }),
    tl.to(loadItem,{
        scaleX: 0,
        transformOrigin: '0% 0%',
        stagger: 0.1,
        ease: 'power4.inOut'
    })
    .to(".overlay-white", {
        duration: .5,
        xPercent: 100,
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
      })
    .to(".overlay-red", {
        duration: .2,
        xPercent: 150,
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
        delay: 0.4, // このアニメーションを0.4秒後に開始
      })
    .to('.overlay-white2', {
        duration: .5,
        xPercent: 100,
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
        delay: 0.5,
    })
    .to('.overlay-red2', {
        duration: .5,
        xPercent: 100,
        ease: "cubic-bezier(0.961, 0.03, 0.961)",
        delay: 0.5,
    })

}

window.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(() => {
        loader();
    }, 1000);
})