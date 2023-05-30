import {
  Container,
  Header,
  SearchTool,
  TitleText,
  PostItem,
  Button,
  Footer,
} from "../../components";

import personInSuitWebp from "../../assets/images/img-bottom.webp";
import personInSuitWebp2x from "../../assets/images/img-bottom@2x.webp";
import personInSuitPng from "../../assets/images/img-bottom.png";
import personInSuitPng2x from "../../assets/images/img-bottom@2x.png";

import personInSuit2Webp from "../../assets/images/img-bottom2.webp";
import personInSuit2Webp2x from "../../assets/images/img-bottom2@2x.webp";
import personInSuit2Png from "../../assets/images/img-bottom2.png";
import personInSuit2Png2x from "../../assets/images/img-bottom2@2x.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postsAction } from "../../store/posts";
import { useDebounce } from "../../hooks/useDebounce";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export const MainPage = () => {
  const { list, loading, error, searchValue } = useSelector(
    (state) => state.posts
  );

  const dispatch = useDispatch();

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    fetch(
      `http://localhost:2001/pressa/get-active-posts?${new URLSearchParams({
        search: debouncedValue,
      })}`
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        dispatch(postsAction.setList(data));
        console.log(data);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, [debouncedValue]);

  return (
    <div className="main-page__top">
      {/* shu yerda padding 22px / variable qilsa boladi scss*/}
      <Header style={{ marginBottom: "calc(113px - 22px)" }}></Header>
      <Container style={{ marginBottom: "129px" }}>
        <TitleText style={{ marginBottom: "94px" }}>
          Eng so’ngi master klasslar va tadbirlar bizning saytda
        </TitleText>
        <SearchTool style={{ marginBottom: "149px" }}></SearchTool>
        <main className="main-page__main">
          <section className="main-page__posts-list">
            <p className="main-page__status-text">Oxirgi e’lonlar</p>
            <ul className="main-page__post-list">
              {list?.map((item, index) => (
                <PostItem key={index} item={item}></PostItem>
              ))}
              {/* <PostItem /> */}
            </ul>
            <Button style={{ background: "#006AFF", margin: "0 auto" }}>
              Ko’proq ko’rish
            </Button>
          </section>
          <section className="main-page__bottom-section">
            <div className="main-page__bottom-block">
              <h3 className="main-page__bottom-text">
                E’LONLARINGIZNI BIZNI SAYTDA BERING
              </h3>
              <picture className="main-page__picture-1">
                <source
                  type="image/webp"
                  srcSet={`${personInSuitWebp2x} 2x, ${personInSuitWebp} 1x`}
                />
                <img
                  type="image/png"
                  srcSet={`${personInSuitPng2x} 2x, ${personInSuitPng} 1x`}
                />
              </picture>
            </div>
            <div className="main-page__bottom-block">
              <h3 className="main-page__bottom-text">
                ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA
              </h3>
              <picture className="main-page__picture-1">
                <source
                  type="image/webp"
                  srcSet={`${personInSuit2Webp2x} 2x, ${personInSuit2Webp} 1x`}
                />
                <img
                  type="image/png"
                  srcSet={`${personInSuit2Png2x} 2x, ${personInSuit2Png} 1x`}
                />
              </picture>
            </div>
          </section>
        </main>
      </Container>
      <Footer></Footer>
    </div>
  );
};
