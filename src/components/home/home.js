import React from "react";
import topTitleImage from "./img/top-img-title/عيدكم مبارك.png";
import footerImage from "./img/footer-img/footer.png";
import positionTopImg from "./img/img-top-right/الفوانيس.png";
import positionDownImg from "./img/img-bottom-right/عيد سعيد.png";
import iconTwiter from "./img/img-bottom-right/Icon awesome-twitter.png";
import iconTelegram from "./img/img-bottom-right/Icon awesome-telegram-plane.png";
import iconYout from "./img/img-bottom-right/Icon awesome-youtube.png";
import cardHeight from "./img/card/المعايدة الطولية.png";
import cardWidth from "./img/card/المعايدة العرضية.png";
import "./home.scss";

function Home() {
  return (
    <section className="main-home">
      <div className="container">
        <div className="show-img-from-top-right">
          <img src={positionTopImg} alt="img" />
        </div>
        <div className="pr-item">
          <div className="it-img-top">
            <img src={topTitleImage} alt="عيدكم مبارك" />
          </div>
          <div className="about-text">
            <p>
              نتقدم لكم بأسمى التهاني والتبريكات بمناسبة حلول عيد الفطر المبارك
              تقبل الله منا ومنكم صالح الأعمال و نسعد بتقديم تصميم التهنئة بهوية
              أستروفيل.
            </p>
          </div>

          <div className="cho-img">
            <p>فضلًا اختر حجم الصورة المطلوب</p>
            <div className="one-tow">
              <div className="wid-item add-Acti">
                <div className="bacgo-wi">
                  <img src={cardWidth} alt="not available"/>
                </div>
                <div className="txt-down">
                  <h4>عرضي</h4>
                  <span></span>
                </div>
              </div>
              <div className="hei-item add-Acti">
                <div className="bacgo-hei">
                <img src={cardHeight} alt="not available"/>
                </div>
                <div className="txt-down">
                  <h4>طولي</h4>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Create the card */}

          <div className="create-card">
            <div className="add-name">
              <input type="name" name="name" id="getName" placeholder="الأسم" />
            </div>
            <div className="creat">
              <button>إنشاء البطاقة</button>
            </div>
            <div className="img-ha">
              <a href="http://twitter.com/FalakKsa" target="_blank">
                <span>بدعم من</span>
                <img src={footerImage} alt="يدعم من" />
              </a>

            </div>
          </div>
        </div>

        <div className="img-from-bottom-right">
          <div className="img-top">
            <img src={positionDownImg} alt="down image" />
          </div>
          <div className="social">
            <h4>انتسب إلينا</h4>
            <ul>
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/channel/UChaP5I6GcKi8MnfIGbT9UOA"
                  target="_blank"
                >
                  <img src={iconYout} alt="youtube" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://t.me/Ar_Astrophile" target="_blank">
                  <img src={iconTelegram} alt="telegram" />
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href="https://mobile.twitter.com/astrophile_ar"
                  target="_blank"
                >
                  <img src={iconTwiter} alt="twitter" />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
