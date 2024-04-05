function preventScroll(e) {
  e.preventDefault();
}

// スクロールを禁止する関数
export function disableScroll() {
  console.log("disableScroll called");
  document.body.style.overflow = 'hidden';
  document.body.classList.add('fixed');
  document.addEventListener('touchmove', preventScroll, { passive: false });
}

// スクロールを許可する関数
export function enableScroll() {
  console.log("enableScroll called");
  document.body.style.overflow = '';
  document.body.classList.remove('fixed');
  document.removeEventListener('touchmove', preventScroll, { passive: false });
}