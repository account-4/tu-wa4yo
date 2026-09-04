document.addEventListener('DOMContentLoaded', () => {
  // IDlist
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