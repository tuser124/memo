// =============================================
// data.js … 最初に入っているデータ
// =============================================

// ダミーアカウント（練習用。本物のパスワードは使わないこと）
// role が 'member' なら会員、'admin' なら管理者
const ACCOUNTS = [
    { id: 'member1', pass: '1111', role: 'member', name: '山田 花子' },
    { id: 'admin', pass: 'admin', role: 'admin', name: '店長' }
];

// メニュー（最初の6品）
const INITIAL_MENUS = [
    { id: 1, name: 'ブレンドコーヒー', category: 'drink', price: 500, img: 'img/coffee.png', text: 'すっきりとした苦みのコーヒーです。' },
    { id: 2, name: 'カフェラテ', category: 'drink', price: 600, img: 'img/latte.png', text: 'ミルクたっぷりの、やさしい味わいです。' },
    { id: 3, name: '紅茶', category: 'drink', price: 500, img: 'img/tea.png', text: '香りのよいストレートティーです。' },
    { id: 4, name: 'チーズケーキ', category: 'food', price: 650, img: 'img/cheesecake.png', text: 'しっとり濃厚なチーズケーキです。' },
    { id: 5, name: 'チョコレートケーキ', category: 'food', price: 650, img: 'img/chocolat_cake.png', text: 'ほろ苦い、大人向けのケーキです。' },
    { id: 6, name: 'トースト', category: 'food', price: 700, img: 'img/toast.png', text: 'バターが香る厚切りトーストです。' }
];
