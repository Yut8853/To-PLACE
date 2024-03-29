import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
    lerp: .1, // 慣性の強さ
    duration: 30, // スクロールアニメーションの時
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)