import {
  Container,
  Footer,
  Header,
  PageName,
  PostItem,
} from "../../components";
import rightIcon from "../../assets/icons/right.svg";
import { IconTool } from "../../components/icon-tool";
import calendarIcon from "../../assets/icons/calendar.svg";
import timeIcon from "../../assets/icons/post-time.svg";
import onlineIcon from "../../assets/icons/online.svg";
import shareIcon from "../../assets/icons/share.svg";
import facebookIcon from "../../assets/icons/facebook-blue.svg";
import tumbirIcon from "../../assets/icons/tumbir-blue.svg";
import instagramIcon from "../../assets/icons/insta-blue.svg";
import twitterIcon from "../../assets/icons/twitter-blue.svg";
import telegramIcon from "../../assets/icons/telegram-blue.svg";
import postImg from "../../assets/images/img-2.jpg";
import loactionIcon from "../../assets/icons/location.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import commentIcon from "../../assets/icons/comments.svg";
import profileImg from "../../assets/icons/profile-unsplash.svg";
import profileImg2 from "../../assets/icons/profile-2.svg";
import replyIcon from "../../assets/icons/reply.svg";

export const PostInfo = () => {
  return (
    <div className="post-info">
      <Header style={{ marginBottom: "42px" }}></Header>
      <Container style={{ marginBottom: "272px" }}>
        <div className="post-info__page-name">
          {/* style lar togri berilmadi */}
          <PageName style={{ marginBottom: "76px" }}>
            Bizes <img src={rightIcon} alt="right-arrow" />
            Alisher Isaevdan...
          </PageName>
          <div className="post-info__fixed-info">
            <h3 className="post-info__fixed-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h3>
            <ul className="post-info__fixed-list">
              <li className="post-info__fixed-item post-info__fixed-item-1">
                <IconTool style={{ marginLeft: "13px" }} src={calendarIcon}>
                  17 / 01 / 2022
                </IconTool>
              </li>
              <li className="post-info__fixed-item post-info__fixed-item-2">
                <IconTool style={{ marginLeft: "13px" }} src={timeIcon}>
                  15:00
                </IconTool>
              </li>
              <li className="post-info__fixed-item post-info__fixed-item-3">
                <IconTool style={{ marginLeft: "13px" }} src={onlineIcon}>
                  Online
                </IconTool>
              </li>
            </ul>
            <p className="post-info__fixed-share">
              <img src={shareIcon} alt="share" />
              Ulashing
            </p>
            <ul className="post-info__fixed-media">
              <li>
                <a href="#">
                  <img src={facebookIcon} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={tumbirIcon} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagramIcon} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitterIcon} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={telegramIcon} alt="facebook" />
                </a>
              </li>
            </ul>
          </div>
          <Container
            style={{
              maxWidth: "840px",
              padding: "0",
              margin: "0 0 161px auto",
            }}
          >
            <h2 className="post-info__title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h2>
            <p className="post-info__text">
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
              musobaqalarni tashkil etishda davom etadi. Biz bu gal
              markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend
              va backend dasturchilarni "bir dasturxon atrofida" to'plashga
              qaror qildik.
            </p>
            <img className="post-info__img" src={postImg} alt="post-image" />
            <p style={{ marginBottom: "54px" }} className="post-info__text">
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
              musobaqalarni tashkil etishda davom etadi. Biz bu gal
              markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend
              va backend dasturchilarni "bir dasturxon atrofida" to'plashga
              qaror qildik. Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan
              iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida
              Toshkent shahridagi har qanday onlayn va oflayn tadbirlar
              to'g'risida e'lonli ma'lumot beruvchi uch bosqichli veb sahifa
              tayyorlash vazifasi topshirildi. Demak, roppa-rosa 2 haftadan
              keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar
              tomonidan xolis baholanib, dastlabki uchta o'rin egalari
              qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga omad tilab
              qolamiz.
            </p>
            <ul className="post-info__media-list">
              <li className="post-info__media-item">
                <img src={loactionIcon} alt="loaction" />
                Google kartadan aniqlash
              </li>
              <li className="post-info__media-item">
                <img src={youtubeIcon} alt="youtube" />
                Youtubedan tomosha qilish
              </li>
              <li className="post-info__media-item">
                <img src={calendarIcon} alt="date" /> 22 / 01 / 2022
              </li>
              <li className="post-info__media-item">
                <img src={timeIcon} alt="time" /> 14:00
              </li>
            </ul>

            <Container style={{ maxWidth: "525px", padding: "0", margin: "0" }}>
              <p className="post-info__comments-text">
                <img src={commentIcon} alt="comments" /> Izohlar
              </p>
              <form className="post-info__add-comment">
                <div className="post-info__comment-wrapper">
                  <img src={profileImg} alt="profile-image" />
                  <textarea
                    className="post-info__comment-text"
                    placeholder="Izoh yozing..."
                    name=""
                    // id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button className="post-info__comment-button" type="submit">
                  Yuborish
                </button>
              </form>
              <ul className="post-info__comments-list">
                <li className="post-info__comments-item-1">
                  <div className="post-info__comment-item-wrapper">
                    <img src={profileImg} alt="profile-image" />
                    <div className="post-info__comments-wrapper">
                      <p className="post-info__comments-name">Angella</p>
                      <span className="post-info__comments-time">
                        Bugun 15:00
                      </span>
                      <p className="post-info__comment-view">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam etiam at nunc tempor ac.
                      </p>
                      <button className="post-info__comment-reply-button">
                        <img
                          style={{ marginRight: "12px" }}
                          src={replyIcon}
                          alt="reply-icon"
                        />
                        Javob berish &nbsp;
                        <span className="post-info__comment-reply-button">
                          (12)
                        </span>
                      </button>
                    </div>
                  </div>
                  <ul className="post-info__comment-reply-list-1">
                    <li className="post-info__comment-reply-item">
                      <div className="post-info__comment-item-wrapper">
                        <img src={profileImg2} alt="profile-image" />
                        <div className="post-info__comments-wrapper">
                          <p className="post-info__comments-name">Angella</p>
                          <span className="post-info__comments-time">
                            Bugun 15:00
                          </span>
                          <p className="post-info__comment-view">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam etiam at nunc tempor ac.
                          </p>
                          <button className="post-info__comment-reply-button">
                            <img
                              style={{ marginRight: "12px" }}
                              src={replyIcon}
                              alt="reply-icon"
                            />
                            Javob berish &nbsp;
                            <span className="post-info__comment-reply-button">
                              (12)
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
              <button className="post-info__see-more">
                Ko’proq ko’rish...
              </button>
            </Container>
          </Container>
        </div>
        <div className="post-info__reccomended-posts">
          <p className="post-info__reccomended-text">Tavsiya etamiz</p>
          <ul className="post-info__reccomended-list">
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
          </ul>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};
