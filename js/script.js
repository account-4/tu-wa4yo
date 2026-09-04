//ボタンを押すと取得したhtmlを流し込む。
document.addEventListener('DOMContentLoaded', () => {
  // IDlistをここに
  const targetIds = ['header', 'footer'];
  const commonHtmlPath = '/common/html/menu.html';

  fetch(commonHtmlPath)
    .then(response => {
      if (!response.ok) return null;
      return response.text();
    })
    .then(html => {
      if (!html) return;

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      targetIds.forEach(id => {
        const sourceEl = doc.getElementById(id);
        const targetEl = document.getElementById(id);

        if (sourceEl && targetEl) {
          targetEl.innerHTML = sourceEl.innerHTML;
        }
      });
    })
    .catch(() => {

    });
});

//Explorer の表示
document.getElementById('openBtn').addEventListener('click', () => {
  document.getElementById('windowExplorer').hidden = false; // 開くボタンは false 固定
});

document.getElementById('closeBtn').addEventListener('click', () => {
  document.getElementById('windowExplorer').hidden = true; // 閉じるボタンは true 固定
});