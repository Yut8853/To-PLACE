// スクロールを禁止する関数
export function disableScroll() {
  // スクロール位置をウィンドウの現在位置に固定
  document.body.style.overflow = 'hidden';
  document.addEventListener('touchmove', preventScroll, { passive: false });
}

// スクロールを許可する関数
export function enableScroll() {
  document.body.style.overflow = '';
  document.removeEventListener('touchmove', preventScroll, { passive: false });
}

// タッチスクロールを防ぐための関数
function preventScroll(e) {
  e.preventDefault();
}

// 例: ローディング画面が表示されているときにスクロールを禁止する
disableScroll();