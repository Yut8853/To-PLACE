const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

const createDragScroll = ({ el, wrap, item, bar }) => {
  const $el = document.querySelector(el);
  if (!$el) return;
  const $wrap = $el.querySelector(wrap);
  const $items = $el.querySelectorAll(item);
  const $bar = $el.querySelector(bar);
  let progress = 0, speed = 0, oldX = 0, x = 0, playrate = 0, dragging = false, startX = 0;
  let wrapWidth = 0, maxScroll = 0;
  let animationFrameId = null;

  const calculate = () => {
    wrapWidth = $items[0].clientWidth * $items.length;
    $wrap.style.width = `${wrapWidth}px`;
    maxScroll = wrapWidth - $el.clientWidth;
  };

  const move = () => progress = clamp(progress, 0, maxScroll);

  const handleWheel = (e) => {
    progress += e.deltaY;
    move();
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    dragging = true;
    startX = e.clientX || e.touches[0].clientX;
    $el.classList.add('dragging');
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    progress += (startX - currentX) * 2.5;
    startX = currentX;
    move();
  };

  const handleTouchEnd = () => {
    dragging = false;
    $el.classList.remove('dragging');
  };

  const raf = () => {
    animationFrameId = requestAnimationFrame(raf);
    x = lerp(x, progress, 0.1);
    playrate = x / maxScroll;

    $wrap.style.transform = `translateX(${-x}px)`;
    $bar.style.transform = `scaleX(${0.18 + playrate * 0.82})`;

    speed = Math.min(100, oldX - x);
    oldX = x;

    $items.forEach(i => {
      const scale = 1 - Math.abs(speed) * 0.002;
      i.style.transform = `scale(${scale})`;
      i.querySelector('img').style.transform = `scaleX(${1 + Math.abs(speed) * 0.004})`;
    });
  };

  const events = () => {
    window.addEventListener('resize', calculate);
    window.addEventListener('wheel', handleWheel);
    $el.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('mousedown', handleTouchStart);
    window.addEventListener('mousemove', handleTouchMove);
    window.addEventListener('mouseup', handleTouchEnd);
    document.body.addEventListener('mouseleave', handleTouchEnd);
  };

  const init = () => {
    calculate();
    events();
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        raf(); // 要素がビューポートに入ったらアニメーションを開始
        observer.unobserve($el); // 一度開始したら監視を止める
      }
    });
  }, {
    threshold: 0.1 // 要素の10%が見えたらコールバックを実行
  });

  observer.observe($bar); // $elの監視を開始

  init();

  return { 
    update: calculate,
    refresh: init,
    stop: () => cancelAnimationFrame(animationFrameId) // アニメーションの停止メソッドを追加
  };
};

/*--------------------
Instances
--------------------*/
const scroll = createDragScroll({
  el: '.carousel',
  wrap: '.carousel--wrap',
  item: '.carousel--item',
  bar: '.carousel--progress-bar',
});

/*--------------------
One raf to rule them all
--------------------*/
requestAnimationFrame(function rafLoop() {
  requestAnimationFrame(rafLoop);
  // scroll.refresh();
});
