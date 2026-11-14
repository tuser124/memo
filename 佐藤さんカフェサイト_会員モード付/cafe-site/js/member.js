// =============================================
// member.js … 会員ページの処理
// =============================================

// 【Lv2】ページの保護：会員でなければ追い返す
const user = checkLogin('member');

// 会員のときだけ、画面を表示する
if (user !== null) {
    document.getElementById('user-name').textContent = user.name;
    showReservations();
}


// ---------------------------------------------
// 【Lv4】席の予約
// ---------------------------------------------
const reserveForm = document.getElementById('reserve-form');

// 今日より前の日は選べないようにする
document.getElementById('reserve-date').min = getToday();

reserveForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const date = document.getElementById('reserve-date').value;
    const time = document.getElementById('reserve-time').value;
    const people = document.getElementById('reserve-people').value;
    const error = document.getElementById('reserve-error');

    error.textContent = '';

    if (date === '') {
        error.textContent = '日付を選んでください。';
        return;
    }

    // getDay() は曜日を数字で返す（日曜日=0、月曜日=1、火曜日=2 …）
    if (new Date(date).getDay() === 2) {
        error.textContent = '火曜日は定休日です。別の日を選んでください。';
        return;
    }

    // 予約を追加して保存する
    const reservations = loadData('reservations', []);
    reservations.push({
        id: Date.now(), // 今の時刻の数字を、重ならないIDとして使う
        userId: user.id,
        userName: user.name,
        date: date,
        time: time,
        people: people,
        status: '受付中'
    });
    saveData('reservations', reservations);

    reserveForm.reset();
    showReservations();
});

// 自分の予約だけを表に出す
function showReservations() {
    const reserveList = document.getElementById('reserve-list');
    const reservations = loadData('reservations', []);

    reserveList.innerHTML = '';

    reservations.forEach(r => {
        if (r.userId === user.id) {
            // キャンセル済みなら、キャンセルボタンは出さない
            let button = '';
            if (r.status !== 'キャンセル') {
                button = `<button class="btn btn-danger" onclick="cancelReservation(${r.id})">キャンセル</button>`;
            }

            reserveList.innerHTML += `
                <tr>
                    <td>${r.date}</td>
                    <td>${r.time}</td>
                    <td>${r.people}名</td>
                    <td><span class="badge">${r.status}</span></td>
                    <td>${button}</td>
                </tr>`;
        }
    });
}

function cancelReservation(id) {
    if (!confirm('この予約をキャンセルしますか？')) {
        return;
    }

    const reservations = loadData('reservations', []);
    const target = reservations.find(r => r.id === id);
    target.status = 'キャンセル';
    saveData('reservations', reservations);
    showReservations();
}
