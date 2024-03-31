// scrollControl.js
export function disableScroll() {
    window.addEventListener('scroll', preventWindowScroll, { passive: false });
  }
  
  export function enableScroll() {
    window.removeEventListener('scroll', preventWindowScroll);
  }
  
  function preventWindowScroll(e) {
    e.preventDefault();
  }