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

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export const PostInfo = () => {
  const { id } = useParams();

  const { list, loading, error } = useSelector((state) => state.posts);

  const selectedModel = list?.find((item, index) => item._id === id);

  const {
    _id: postId,
    isRejected,
    postDate,
    postTime,
    postDir,
    postInnerDir,
    isModerated,
    postDesc,
    postText,
    postImgUrl,
    postTitle,
    postType,
    speakerJob,
    speakerName,
    speakerTelNum,
    speakerTelNum2,
  } = selectedModel;

  return (
    <div className="post-info">
      <Header style={{ marginBottom: "42px" }}></Header>
      <Container style={{ marginBottom: "272px" }}>
        <div className="post-info__page-name">
          {/* style lar togri berilmadi */}
          <PageName style={{ marginBottom: "76px" }}>
            {postDir} <img src={rightIcon} alt="right-arrow" />
            {speakerName}...
          </PageName>
          <div className="post-info__fixed-info">
            <h3 className="post-info__fixed-title">{postTitle}</h3>
            <ul className="post-info__fixed-list">
              <li className="post-info__fixed-item post-info__fixed-item-1">
                <IconTool style={{ marginLeft: "13px" }} src={calendarIcon}>
                  {postDate}
                </IconTool>
              </li>
              <li className="post-info__fixed-item post-info__fixed-item-2">
                <IconTool style={{ marginLeft: "13px" }} src={timeIcon}>
                  {postTime}
                </IconTool>
              </li>
              <li className="post-info__fixed-item post-info__fixed-item-3">
                <IconTool style={{ marginLeft: "13px" }} src={onlineIcon}>
                  {postType}
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
            <h2 className="post-info__title">{postTitle}</h2>
            <p className="post-info__text">{postDesc}</p>
            <img
              maxWidth={764}
              maxHeight={498}
              className="post-info__img"
              src={postImgUrl}
              alt="post-image"
            />
            <p style={{ marginBottom: "54px" }} className="post-info__text">
              {postText}
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
                <img src={calendarIcon} alt="date" /> {postDate}
              </li>
              <li className="post-info__media-item">
                <img src={timeIcon} alt="time" /> {postTime}
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
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              // effect={"cube"}
              // cubeEffect={{
              //   shadow: true,
              //   slideShadows: true,
              //   shadowOffset: 20,
              //   shadowScale: 0.94,
              // }}
            >
              {list?.map((item, index) => (
                <SwiperSlide>
                  <Link to={`/posts/${item._id}`}>
                    <PostItem item={item} key={index}></PostItem>
                  </Link>
                </SwiperSlide>
              ))}

              {/* <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem> */}
            </Swiper>
          </ul>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};
