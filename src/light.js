let height = 200;
let width = 200;

document.addEventListener('DOMContentLoaded', function() {
  // .light と .light2 の両方を取得
  const light = document.querySelector('.light');
  const light2 = document.querySelector('.light2');

  // mousemove と touchmove イベントリスナーで共通の処理を実行
  const handleMove = function(e) {
    // .light が存在する場合
    if (light) {
      setPosition(e, light);
    }
    // .light2 が存在する場合
    if (light2) {
      setPosition(e, light2);
    }
  };

  document.addEventListener('mousemove', handleMove);
  document.addEventListener('touchmove', handleMove);
});

// setPosition関数は、イベントオブジェクトと特定のlight要素を受け取ります
function setPosition(e, lightElement) {
  lightElement.style.top = e.pageY - height / 2 + "px";
  lightElement.style.left = e.pageX - width / 2 + "px";
}
