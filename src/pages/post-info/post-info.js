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
import profileImg from "../../assets/images/1.jpg";
import profileImg2 from "../../assets/images/2.jpg";
import replyIcon from "../../assets/icons/reply.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../variables";
import { useEffect, useState } from "react";
import moment from "moment";

export const PostInfo = () => {
  const { id } = useParams();

  let { list, loading, error } = useSelector((state) => state.posts);

  const [comments, setComments] = useState();
  const [replyForm, setReplyForm] = useState(false);
  const [limit, setLimit] = useState(1);

  const selectedPost = list?.find((item, index) => item._id === id);

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
  } = selectedPost;

  useEffect(() => {
    fetch(`${API_URL}/pressa/get-comments`, {
      headers: { id, limit },
    })
      .then((res) => {
        if (res.status !== 200) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        setComments(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [comments]);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const commentText = evt.target.commentText.value;

    fetch(`${API_URL}/pressa/add-comment`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({ commentText, id }),
    })
      .then((res) => {
        if (res.status !== 201) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleReplySubmit = (evt) => {
    evt.preventDefault();

    const replyText = evt.target.replyText.value;
    const commentId = evt.target.replyButton.dataset.id;

    fetch(`${API_URL}/pressa/add-reply-to-comment`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({ replyText, id, commentId }),
    })
      .then((res) => {
        if (res.status !== 201) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

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
              <form
                onSubmit={handleFormSubmit}
                className="post-info__add-comment"
              >
                <div className="post-info__comment-wrapper">
                  <img
                    className="post-info__profile-img"
                    width={50}
                    height={50}
                    src={profileImg}
                    alt="profile-image"
                  />
                  <textarea
                    name=""
                    id="commentText"
                    className="post-info__comment-text"
                    placeholder="Izoh yozing..."
                    cols="30"
                    rows="10"
                    maxLength={100}
                  ></textarea>
                </div>
                <button className="post-info__comment-button" type="submit">
                  Yuborish
                </button>
              </form>
              <ul className="post-info__comments-list">
                {comments?.map((item, index) => (
                  <li key={index} className="post-info__comments-item-1">
                    <div className="post-info__comment-item-wrapper">
                      <img
                        className="post-info__profile-img"
                        width={50}
                        height={50}
                        src={profileImg}
                        alt="profile-image"
                      />
                      <div className="post-info__comments-wrapper">
                        <p className="post-info__comments-name">User</p>
                        <span className="post-info__comments-time">
                          {moment(item.time).fromNow()}
                        </span>
                        <p className="post-info__comment-view">
                          {item.commentText}
                        </p>
                        <button
                          onClick={() => {
                            setReplyForm(!replyForm);
                          }}
                          className="post-info__comment-reply-button"
                        >
                          <img
                            className="post-info__profile-img"
                            style={{ marginRight: "12px" }}
                            src={replyIcon}
                            alt="reply-icon"
                          />
                          Javob berish &nbsp;
                          <span className="post-info__comment-reply-number">
                            ({item.reply.length})
                          </span>
                        </button>
                        {replyForm && (
                          <form
                            onSubmit={handleReplySubmit}
                            className="post-info__add-comment"
                          >
                            <img
                              className="post-info__profile-img"
                              width={50}
                              height={50}
                              src={profileImg}
                              alt="profile-image"
                            />
                            <div className="post-info__comment-wrapper">
                              <textarea
                                name=""
                                id="replyText"
                                className="post-info__comment-text"
                                placeholder="Javob yozing..."
                                cols="30"
                                rows="10"
                                maxLength={100}
                              ></textarea>
                            </div>
                            <button
                              id="replyButton"
                              data-id={item._id}
                              className="post-info__comment-button"
                              type="submit"
                            >
                              Yuborish
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                    {replyForm && (
                      <ul className="post-info__comment-reply-list-1">
                        {item?.reply?.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="post-info__comment-reply-item"
                            >
                              <div className="post-info__comment-item-wrapper">
                                <img
                                  className="post-info__profile-img"
                                  width={50}
                                  height={50}
                                  src={profileImg2}
                                  alt="profile-image"
                                />
                                <div className="post-info__comments-wrapper">
                                  <p className="post-info__comments-name">
                                    User2
                                  </p>
                                  <span className="post-info__comments-time">
                                    {moment(item.time).fromNow()}
                                  </span>
                                  <p className="post-info__comment-view">
                                    {item.replyText}
                                  </p>
                                  <button className="post-info__comment-reply-button">
                                    <img
                                      style={{ marginRight: "12px" }}
                                      src={replyIcon}
                                      alt="reply-icon"
                                    />
                                    Javob berish &nbsp;
                                    <span className="post-info__comment-reply-number">
                                      (12)
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setLimit(limit + 10)}
                className="post-info__see-more"
              >
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
