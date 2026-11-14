// =============================================
// index.js … トップページの処理
// =============================================

// ログイン中のユーザー（ログインしていなければ null）
const user = loadData('loginUser', null);


// ---------------------------------------------
// 【Lv1・Lv2】ヘッダーのLoginボタン
// ログインしていたら「会員ページ」や「管理者ページ」に変える
// ---------------------------------------------
const loginLinks = document.querySelectorAll('.login-link');

loginLinks.forEach(link => {
    if (user === null) {
        link.textContent = 'Login';
        link.href = 'login.html';
    } else if (user.role === 'admin') {
        link.textContent = '管理者ページ';
        link.href = 'admin.html';
    } else {
        link.textContent = '会員ページ';
        link.href = 'member.html';
    }
});


// ---------------------------------------------
// 【Lv3】メニューカードをデータから作る
// （管理者ページで編集した内容が、ここに反映される）
// ---------------------------------------------
const menus = loadData('menus', INITIAL_MENUS);
const menuArea = document.getElementById('menu-img');

menus.forEach(menu => {
    // menu.category は 'drink' か 'food'。クラス名として使う
    menuArea.innerHTML += `
        <div class="menu-card ${menu.category}">
            <img src="${menu.img}" alt="${menu.name}">
            <dl>
                <div class="menu-info">
                    <dt>${menu.name}</dt>
                    <dd>${menu.category}</dd>
                </div>
                <dd class="menu-price">￥${menu.price}</dd>
            </dl>
        </div>`;
});


// ---------------------------------------------
// ここから下は、元のサイトにあった処理
// ※メニューカードを作ったあとで .menu-card を取得したいので、この順番にしている
// ---------------------------------------------
const menuButtons = document.querySelectorAll('.menu-btn');
const menuCards = document.querySelectorAll('.menu-card');

menuButtons.forEach(button =>{ //buttonは引数であり、その時に選択されたボタンがbuttonに入る
    button.addEventListener('click', () =>{

        //menu-txtの選択されたボタンだけを緑色にする
        menuButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        //選択されたmenu-txtのカテゴリに該当するmenu-cardだけを表示する処理
        //クリックされたボタンのテキスト(All, Drink, Food)を判定する
        const category = button.textContent; //caregoryに選択したボタンのテキストを入れた

        //カードの表示非表示を切り替える
        menuCards.forEach(card =>{ //cardは選択されたmenu-txtのカテゴリに該当するmenu-card全てのこと
            if(category === 'All'){
                //Allなら全部表示する(is-hiddenクラスを外す)
                card.classList.remove('is-hidden');
            } else if(category === 'Drink'){
                //Drinkなら、drinkクラスを持つカードだけを表示し、それ以外は非表示にする
                if (card.classList.contains('drink')){
                    card.classList.remove('is-hidden');
                } else{
                    card.classList.add('is-hidden');
                }
            } else if(category === 'Food'){
                //Foodならfood句r素を持つカードだけ表示し、それ以外を非表示にする
                if(card.classList.contains('food')){
                    card.classList.remove('is-hidden');
                } else{
                    card.classList.add('is-hidden');
                }
            }
        })

    })
})

// FAQのアコーディオン処理
const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(card => {
    card.addEventListener('click', () => {
        // クリックされたカードに 'is-open' クラスがあれば削除、なければ追加する
        card.classList.toggle('is-open');
    });
});

// 1. スクロールされるたびに、現在の縦の位置をブラウザの「sessionStorage」に保存する
window.addEventListener('scroll', () =>{
    sessionStorage.setItem('scrollPos', window.scrollY);
});

//sessionStrageはStorageというクラスから作られたオブジェクトである
//setItemはデータを保存って意味
//window.scrollYはウィンドウの縦の位置のこと
//scrollPosはデータの名前（キー）のことであり、ついさっき開発者が名前を付けた。名前の由来は「Scroll Position（スクロール・ポジション）」の略。
//キーはデータを引き出すときに必要な呼び出す名前のこと

// 2. ページが読み込まれたとき、保存した位置があればそこに一瞬で戻す
window.addEventListener('load', () =>{
    const savedPos = sessionStorage.getItem('scrollPos');
    if (savedPos !== null){
        // スムーズスクロールを切って、一瞬で元の位置にジャンプさせる
        window.scrollTo(0, parseInt(savedPos, 10));
    }
});

//scrollToはウィンドウを指定したスクロール位置に一瞬で移動させるメソッド（命令）のこと
//スクロール位置は縦の位置のこと