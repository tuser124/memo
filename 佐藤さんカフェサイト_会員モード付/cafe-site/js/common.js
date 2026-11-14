// =============================================
// common.js … どのページでも使う処理
// =============================================

// localStorageからデータを読む
// 保存されていなければ、firstData（最初のデータ）を返す
function loadData(key, firstData) {
    const text = localStorage.getItem(key);
    if (text === null) {
        return firstData;
    }
    return JSON.parse(text); // 文字 → 配列やオブジェクトに戻す
}

// localStorageにデータを保存する
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data)); // 配列やオブジェクト → 文字に変える
}

// 今日の日付を「2026-10-23」の形で返す
function getToday() {
    const d = new Date();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // 1 → "01" のように2けたにする
    const day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + month + '-' + day;
}

// ページの保護：ログインしていない人や、役割がちがう人を追い返す
function checkLogin(role) {
    const user = loadData('loginUser', null);

    if (user === null) {
        location.href = 'login.html';
        return null;
    }
    if (user.role !== role) {
        alert('このページは表示できません。');
        location.href = 'index.html';
        return null;
    }
    return user;
}

// ログアウト
function logout() {
    localStorage.removeItem('loginUser');
    location.href = 'login.html';
}
