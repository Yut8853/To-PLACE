(function() {
  const expirationDays = 365; // Cookieの有効期限（日）

  // Cookieの同意要素と同意ボタンを取得
  const cookieConsent = document.querySelector('.cookie-consent');
  const agreeButton = document.querySelector('.cookie-agree');

  // ローカルストレージからフラグを取得し、同意済みかどうかを確認
  const consentFlag = localStorage.getItem('popupFlag');

  // 同意ボタンのクリックイベントをセット
  if (agreeButton) {
    agreeButton.addEventListener('click', () => {
      if (cookieConsent) {
        cookieConsent.classList.add('cc-hide1');
      }
      setCookieFlag('false', expirationDays);
    });
  }

  // フラグの確認とonscrollイベントの設定
  if (consentFlag) {
    const flagData = JSON.parse(consentFlag);
    if (flagData['value'] === 'true' || currentDate.getTime() > flagData['expire']) {
      setPopupEvent();
    }
  } else {
    setCookieFlag('true', expirationDays);
    setPopupEvent();
  }

  // Cookie同意ポップアップを表示するイベントをセットする関数
  function setPopupEvent() {
    window.onscroll = () => {
      if (window.pageYOffset && cookieConsent) {
        showPopup();
      }
    };
  }

  // Cookieのフラグをローカルストレージに保存する関数
  function setCookieFlag(value, expirationDays) {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getTime() + expirationDays * 24 * 3600 * 1000);
    const item = {
      value: value,
      expire: expirationDate.getTime()
    };
    localStorage.setItem('popupFlag', JSON.stringify(item));
  }

  // Cookie同意ポップアップを表示する関数
  function showPopup() {
    if (cookieConsent) {
      cookieConsent.classList.add('is-show');
    } else {
      console.error('Cookie consent element not found.');
    }
  }
})();
