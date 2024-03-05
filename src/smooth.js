import Lenis from '@studio-freight/lenis'

// イージング関数
function easeOutQuart(t) {
    return 1 - (--t) * t * t * t
}
  
  const lenis = new Lenis({
    lerp: .1, // 慣性の強さ
    duration: 4, // スクロールアニメーションの時間
    easing: easeOutQuart, // イージング関数
  });

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)