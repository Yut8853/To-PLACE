import gsap from "gsap";

const shuffle = (arr) => {
    for (let j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
};

const assignBlobColors = (arr) => {
    [0, 1, 2, 3].forEach((i) => {
        const node = document.getElementById(`color-${i}`);
        node.style.backgroundColor = arr[i];
    });
};

let can = document.getElementById("color-base");
let colors = ["#22201E", "#1A1A1A", "#333333", "#4d4d4d", "#aaaaaa"];

export const heyMelody = () => {
    const baseColor = colors[Math.floor(Math.random() * colors.length)];
    const blobColors = shuffle(colors.filter((color) => color !== baseColor));
  
    can.style.background = baseColor;
    assignBlobColors(blobColors);
};

export const animateBlobs = () => {
    // 4つのブロブに対するアニメーションを設定
    for (let i = 0; i < 4; i++) {
      const blob = document.getElementById(`color-${i}`);
  
      // アニメーションの各パラメーターをランダムに設定
      const duration = 2 + Math.random() * 4; // 2〜6秒の間
      const scale = 0.5 + Math.random() * 0.5; // 0.5〜1.0倍のスケール
      const x = Math.random() * 100 - 50; // -50〜50の範囲でランダムに位置を設定
      const y = Math.random() * 100 - 50; // -50〜50の範囲でランダムに位置を設定
  
      // GSAPを使ったアニメーション
      gsap.to(blob, {
        duration: duration,
        scale: scale,
        x: x,
        y: y,
        ease: "sine.inOut"
      });
    }
  };

