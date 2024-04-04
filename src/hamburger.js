import { gsap } from 'gsap';
import { disableScroll } from './scrollControl';

disableScroll();
let menuOpen = false;

document.querySelector('.menu-btn').addEventListener('click', function() {
    const link = document.querySelectorAll('.text-stroke-fill-ltr');
    const linkHoverReveal = document.querySelectorAll('.hover-reveal');
    const linkImages = document.querySelectorAll('.hidden-img');

for(let i = 0; i < link.length; i++) {
    link[i].addEventListener('mousemove', (e) => {
        linkHoverReveal[i].style.opacity = .6;
        linkHoverReveal[i].style.transform = `translate(150%, -70% ) rotate(5deg)`;
        linkImages[i].style.transform = 'scale(1, 1)';
        linkHoverReveal[i].style.left = e.clientX + "px";
      })
      
      link[i].addEventListener('mouseleave', (e) => {
        linkHoverReveal[i].style.opacity = 0;
        linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
        linkImages[i].style.transform = 'scale(0.8, 0.8)';
      })
}

    let tl = gsap.timeline({
      onStart: function() {
        document.querySelector('.menu-bg').style.visibility = 'visible';
      },
      onComplete: function() {
        if (!menuOpen) {
          document.querySelector('.menu-bg').style.visibility = 'hidden';
        }
      }
    });

    if (menuOpen) {
        // メニューが開いている場合、左に隠す
        tl.to('.menu-bg', {
            duration: .4,
            left: '-100%',
            ease: 'power4.Out',
        });
    } else {
        // メニューが閉じている場合、右に表示
        tl.to('.menu-bg', {
            duration: .4,
            left: 0,
            ease: 'power4.In',
        })
        .fromTo('.menu-bg nav ul li', {
            x: -40,
            opacity: 0
        },
        {
            duration: 1,
            x: 0,
            opacity: 1,
            stagger: 0.3,
            ease: "power2.out"
        });
    }
    menuOpen = !menuOpen;
});


