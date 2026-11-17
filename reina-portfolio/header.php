<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reina Sato | Portfolio</title>
        <meta name="description" content="佐藤麗奈のポートフォリオサイトです。Web制作で手がけた作品や、HTML・CSS・JavaScriptなどのスキル、プロフィールを紹介しています。">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700;800&display=swap" rel="stylesheet">

        <?php wp_head(); ?>
    </head>

    <body>
        <div id="top"></div>
        <header class="header">
        <a href="#top" class="logo">
            <span class="logo-mark">R</span>
            <span class="logo-name">Reina Sato</span>
        </a>
        <div id="header-inner">
            <nav>
                <a href="#top">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#works">Works</a>
                <a href="#contact">Contact</a>
            </nav>
            <a href="#contact" id="button-contact">お問い合わせ →</a>
        </div>
            <div class="wrapper-hamburger">

                <button
                     class="hamburger-menu"
                     type="button"
                     aria-label="メニューを開く"
                     aria-expanded="false"
                     aria-controls="sp-menu"
                     >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div class="overlay"></div>

                <nav id="sp-menu" class="sp-menu">

                    <button class="close-btn" type="button" aria-label="メニューを閉じる">
                        ×
                    </button>
                    
                    <a href="#top">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>