// =============================================
// login.js … ログイン画面の処理【Lv2】
// ※練習用です。本当のサイトでは、パスワードの確認はサーバーで行います。
// =============================================

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // ページが切りかわるのを止める

    const id = document.getElementById('login-id').value;
    const pass = document.getElementById('login-pass').value;
    const error = document.getElementById('login-error');

    // ① 入力チェック
    if (id === '' || pass === '') {
        error.textContent = 'IDとパスワードを入力してください。';
        return;
    }

    // ② IDとパスワードが両方合うアカウントを探す
    const account = ACCOUNTS.find(a => a.id === id && a.pass === pass);

    if (account === undefined) {
        error.textContent = 'IDまたはパスワードがちがいます。';
        return;
    }

    // ③ ログイン中のユーザーを保存する（パスワードは保存しない）
    saveData('loginUser', { id: account.id, name: account.name, role: account.role });

    // ④ role によって移動先を変える
    if (account.role === 'admin') {
        location.href = 'admin.html';
    } else {
        location.href = 'member.html';
    }
});
