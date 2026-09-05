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


//sideExplorerの表示非表示チェックボックス
document.querySelectorAll('.explorerToggle').forEach(switchEl => {
  switchEl.addEventListener('change', (e) => {
    const isOn = e.target.checked;

    // 自分以外の全スイッチにも同じ状態を反映
    document.querySelectorAll('.explorerToggle').forEach(sw => {
      sw.checked = isOn;
    });

    // 表示切替
    document.querySelectorAll('.sideExplorer').forEach(box => {
      box.style.display = isOn ? 'block' : 'none';
    });
  });
});


//上部メニュー
const menuTriggers = document.querySelectorAll('.file, .edit, .view, .help');
const allMenus = document.querySelectorAll('.fileMenu, .editMenu, .viewMenu, .helpMenu');

menuTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    const menu = trigger.querySelector('.fileMenu, .editMenu, .viewMenu, .helpMenu');
    const isOpen = menu.classList.contains('menuOpen');

    allMenus.forEach(m => m.classList.remove('menuOpen'));

    if (!isOpen) {
      menu.classList.add('menuOpen');
    }

    e.stopPropagation();
  });
});

// ★ここを追加: メニュー自体をクリックしても外側クリック扱いにしない
allMenus.forEach(menu => {
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// メニュー外をクリックしたら全部閉じる
document.addEventListener('click', () => {
  allMenus.forEach(m => m.classList.remove('menuOpen'));
});