<?php get_header(); ?>

<main>
    <section id="home" class="hero">
            <img src="<?php echo esc_url(get_template_directory_uri() . '/img/hero.png' ); ?>" alt="デスクにノートパソコンと観葉植物が置かれたオフィス">
            <div class="hero-inner">
                <p class="hero-label">WEB DEVELOPER </p>
            <h1>好きでつくる、<br><span class="text-accent">つながる</span>未来。</h1>
            <p class="hero-description">コードで、だれかの「やりたい」を叶える<br>Webエンジニアを目指しています。</p>
            </div>

            <a href="#about" class="button-about">私について見る　→</a>
        </section>

        <div class="profile-layout">

        <section id="about" class="about">
            <div class="section-title-wrapper title-accent">
            <h2 class="section-title">About</h2>
            <p class="section-subtitle">私について</p>
            </div>

            <div class="about-text">
            <p class="section-description">
                はじめまして、佐藤麗奈です。<br>Web制作を通して、人の役に立つサービスや<br>
                心に残るデザインを作りたいと思っています。
            </p>
            
        </div>
        </section>
        <div class="profile-image">
            <img class="img-about" src="<?php echo esc_url( get_template_directory_uri() . '/img/about.webp' ); ?>" alt="植物と机の画像">
        </div>

            <section id="skills" class="skills">
                <div class="section-title-wrapper skill-wrapper">
                    <h2 class="section-title">Skills</h2>
                    <p id="skills-subtitle" class="section-subtitle">できること</p>
                    </div>

                    <div class="skill-list">

                    <div class="skill-item">
                    <i class="devicon-html5-plain"></i>
                    <span class="skill-name">HTML</span>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 95%;"></div>
                    </div>
                    <span class="skill-percent">95%</span>
                    </div>

                    <div class="skill-item">
                    <i class="devicon-css3-plain"></i>
                    <span class="skill-name">CSS</span>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 90%;"></div>
                        </div>
                        <span class="skill-percent">90%</span>
                    </div>

                    <div class="skill-item">
                    <i class="devicon-javascript-plain"></i>
                    <span class="skill-name">JavaScript</span>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 85%;"></div>
                    </div>
                    <span class="skill-percent">85%</span>
                </div>
                
                </div>
            </section>

        </div>

            <section id="works" class="works">

                <div class="works-heading">
                    <div class="section-title-wrapper title-accent">
                        <h2 class="section-title">Works</h2>
                        <p class="section-subtitle">制作実績</p>
                    </div>
                </div>
                
                <div class="works-list">
                    <div class="work-card">
                        <img src="<?php echo esc_url( get_template_directory_uri() . '/img/cafe.webp' ); ?>" alt="カフェのWebサイト">
                            <div class="work-info">
                                <h3 class="work-title">Cafè NEST</h3>
                                <p class="work-description">
                                架空のカフェを想定し、お店の雰囲気や魅力が伝わるWebサイトを制作しました。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            
            <section id="contact" class="contact">
                <img class="contact-image" src="<?php echo esc_url( get_template_directory_uri() . '/img/contact.webp' ); ?>" alt="">

                <div class="contact-content">
                    <div class="contact-info">
                    <div class="section-title-wrapper">
                    <h2 class="section-title">Contact</h2>
                    <p class="section-subtitle">お問い合わせ</p>
                </div>

                <div class="contact-text">
                    <p class="section-description">お仕事のご相談やご質問など、<br>お気軽にご連絡ください。</p>
            </div>
        </div>
        <div class="contact-form">
            <form>
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">お名前</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="お名前"
                            required
                        >
                    </div>

                        <div class="form-group">
                            <label for="email">メールアドレス</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="メールアドレス"
                                required
                             >
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="message">お問い合わせ内容</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="お問い合わせ内容"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" class="button-submit">
                        送信する　→
                    </button>
            </form>
        </div>
    </div>
</section>

</main>

<?php get_footer(); ?>