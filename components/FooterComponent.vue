<template>
  <div class="f-wrapper">
    <div class="logo-wrapper">
      <img draggable="false" src="../assets/images/log/indexLogo.svg" alt="">
      <div class="c-new-footer__logo-line"></div>
    </div>
    <div class="footer-info">
      <div class="footer-info-item">
        <h4>خرید</h4>
        <ul class="list gray">
          <li>زنانه</li>
          <li>مردانه</li>
          <li>بچگانه</li>
          <li>زیبایی و سلامت</li>
        </ul>
      </div>


      <div class="footer-info-item">
        <h4>خدمات مشتریان</h4>
        <ul class="list gray">
          <li>پاسخ به پرسش‌های متداول</li>
          <li>رویه‌های بازگرداندن کالا</li>
          <li>شرایط استفاده</li>
          <li>حریم خصوصی</li>
        </ul>
      </div>

      <div class="footer-info-item">
        <h4>اطلاعات دیجی‌استایل</h4>
        <ul class="list gray">
          <li>درباره دیجی‌استایل</li>
          <li>تماس با دیجی‌استایل</li>
          <li>همکاری با دیجی‌استایل</li>
        </ul>
      </div>
      <hr>
      <div class="footer-info-item">
        <h5>تلفن پشتیبانی: ۶۱۹۳۰۳۰۰-۰۲۱</h5>
        <ul class="list gray">
          <li class="socials">
            <div class="social">
              <img src="../assets/images/socials/facebook-messenger.png" alt="">
            </div>
            <div class="social">
              <img src="../assets/images/socials/twitter.png" alt="">
            </div>
            <div class="social">
              <img src="../assets/images/socials/instagram.png" alt="">
            </div>
          </li>
          <li>ثبت‌نام در خبرنامه دیجی‌استایل
          </li>
          <li class="email-wrapper">
            <input class="email" type="email" placeholder="ایمیل خود را وارد کنید">
            <button class="send-email" href="#">ارسال</button>
          </li>
        </ul>
      </div>

    </div>

    <br><br><br>
    <hr>
    <div class="downloads">
      <h3>دانلود اپلیکیشن دیجی‌استایل</h3>
      <div class="image-link-wrapper">
        <a href="#" class="image-link"><img src="../assets/images/socials/sib.png" alt=""></a>
        <a href="#" class="image-link"><img src="../assets/images/socials/myket.png" alt=""></a>
        <a href="#" class="image-link"><img src="../assets/images/socials/bazr.png" alt=""></a>
      </div>
    </div>
    <br>
    <div class="about-wrapper">
      <div class="description-site">
        <h3>فروشگاه اینترنتی مد و لباس دیجی‌استایل</h3>
        <p class="gray">دیجی‌استایل، پس از تجربه‌ی موفق فروشگاه اینترنتی دیجی‌کالا به صورت تخصصی پا به عرصه مد، پوشاک و
          سبک زندگی گذاشت تا همان تجربه‌ی شیرین، در قالبی نو تکرار شود. در دیجی ‌استایل می‌توانید همه آنچه مرتبط با مد و
          پوشاک از انواع لباس زنانه، لباس مردانه و لباس بچگانه گرفته تا کیف و کفش و اکسسوری را با تخفیف ویژه در حراج ها،
          پیدا کنید و به سادگی یک ست کامل از جدیدترین‌ برندهای معتبر را بخرید.</p>
      </div>
      <div class="e-wrapper">
        <img src="../assets/images/socials/enamad.png" alt="">
      </div>
    </div>
    <br><br>
    <hr>
    <div class="copy-right-wrapper">
      <p class="copy-right-text gray">کليه حقوق اين سايت متعلق به شرکت نوآوران فن آوازه (فروشگاه اینترنتی دیجی‌استایل) می‌باشد.</p>
      <div class="copy-right-text2 gray">digistyle.com - 2022 © Copyright</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterComponent'
  }
</script>

<style scoped>
  .f-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .logo-wrapper {
    display: flex;
    gap: 2%;
  }

  .logo-wrapper > img {
    width: 10.5%;
  }

  .c-new-footer__logo-line {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    background-color: #f0f0f1;
    height: 2px;
    margin-top: auto;
  }

  .footer-info {
    display: flex;
    padding-top: 2%;
  }

  .footer-info-item {
    width: 25%;
  }

  .list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 15px;
    padding-top: 7%;
  }

  .socials {
    display: flex;
    width: 100%;
    gap: 30%;
  }

  .email-wrapper {
    display: flex;

  }

  .email {
    border: 1px solid black;
    width: 70%;
    height: 50px;
    outline: none;
    font-size: 1.1em;
  }

  .send-email {
    height: 50px;
    width: 18%;
    border: none;
  }

  .downloads {
    padding-top: 3%;
    display: flex;
    justify-content: space-between;
  }

  .about-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .image-link-wrapper {
    width: 30%;
    display: flex;
    justify-content: space-around;
  }

  .image-link {
    width: 30%;
  }

  .image-link > img {
    width: 100%;
  }

  .description-site {
    display: flex;
    width: 70%;
    flex-direction: column;
    gap: 17px;
  }

  .description-site > p {
    font-size: 15px;
    line-height: 24px;
    text-align: justify;
  }

  .e-wrapper {
    margin-top: auto;
  }
  .copy-right-wrapper{
    display: flex;
    justify-content: space-between;
    padding-bottom: 1%;
  }
</style>
