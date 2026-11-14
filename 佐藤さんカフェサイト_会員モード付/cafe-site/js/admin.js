// =============================================
// admin.js … 管理者ページの処理
// =============================================

// 【Lv2】ページの保護：管理者でなければ追い返す
const user = checkLogin('admin');

// 管理者のときだけ、画面を表示する
if (user !== null) {
    showMenus();
    showReservations();
}


// ---------------------------------------------
// サイドメニューでパネルを切りかえる
// （トップページのメニュー絞り込みと同じ考え方）
// ---------------------------------------------
const sideButtons = document.querySelectorAll('.side-btn');
const panels = document.querySelectorAll('.admin-panel');

sideButtons.forEach(button => {
    button.addEventListener('click', () => {
        sideButtons.forEach(btn => btn.classList.remove('active'));
        panels.forEach(panel => panel.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.panel).classList.add('active');
    });
});


// ---------------------------------------------
// 【Lv3】メニュー編集
// ---------------------------------------------

// 編集中のメニューのID
let editingId = null;

// メニュー一覧を表に出す
function showMenus() {
    const menuList = document.getElementById('menu-list');
    const menus = loadData('menus', INITIAL_MENUS);

    menuList.innerHTML = '';

    menus.forEach(menu => {
        menuList.innerHTML += `
            <tr>
                <td><img src="${menu.img}" alt=""></td>
                <td>${menu.name}</td>
                <td>￥${menu.price}</td>
                <td><button class="btn btn-sub" onclick="editMenu(${menu.id})">編集</button></td>
            </tr>`;
    });
}

// 「編集」ボタン：フォームを表示して、今の内容を入れる
function editMenu(id) {
    const menus = loadData('menus', INITIAL_MENUS);
    const menu = menus.find(m => m.id === id); // IDが同じメニューを探す

    editingId = id;
    document.getElementById('menu-name').value = menu.name;
    document.getElementById('menu-price').value = menu.price;
    document.getElementById('menu-text').value = menu.text;

    document.getElementById('edit-panel').style.display = 'block';
}

// 「やめる」ボタン：フォームを隠す
function closeEdit() {
    document.getElementById('edit-panel').style.display = 'none';
    document.getElementById('menu-error').textContent = '';
}

// 「保存する」ボタン
document.getElementById('menu-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('menu-name').value;
    const price = Number(document.getElementById('menu-price').value); // 文字 → 数字
    const text = document.getElementById('menu-text').value;
    const error = document.getElementById('menu-error');

    if (name === '' || price === 0) {
        error.textContent = '商品名と値段を入力してください。';
        return;
    }

    // IDが同じメニューを探して、中身を書きかえて保存する
    const menus = loadData('menus', INITIAL_MENUS);
    const menu = menus.find(m => m.id === editingId);
    menu.name = name;
    menu.price = price;
    menu.text = text;
    saveData('menus', menus);

    closeEdit();
    showMenus();
});


// ---------------------------------------------
// 【Lv4】予約一覧（確定／キャンセルの切りかえ）
// ---------------------------------------------
function showReservations() {
    const reserveList = document.getElementById('reserve-list');
    const reservations = loadData('reservations', []);

    // 日付の早い順に並べかえる
    reservations.sort((a, b) => {
        if (a.date + a.time < b.date + b.time) {
            return -1;
        } else {
            return 1;
        }
    });

    reserveList.innerHTML = '';

    if (reservations.length === 0) {
        reserveList.innerHTML = '<tr><td colspan="6">予約はまだありません。</td></tr>';
        return;
    }

    reservations.forEach(r => {
        reserveList.innerHTML += `
            <tr>
                <td>${r.date}</td>
                <td>${r.time}</td>
                <td>${r.userName}</td>
                <td>${r.people}名</td>
                <td><span class="badge">${r.status}</span></td>
                <td>
                    <button class="btn btn-sub" onclick="changeStatus(${r.id}, '確定')">確定</button>
                    <button class="btn btn-danger" onclick="changeStatus(${r.id}, 'キャンセル')">キャンセル</button>
                </td>
            </tr>`;
    });
}

function changeStatus(id, status) {
    const reservations = loadData('reservations', []);
    const target = reservations.find(r => r.id === id);
    target.status = status;
    saveData('reservations', reservations);
    showReservations();
}
