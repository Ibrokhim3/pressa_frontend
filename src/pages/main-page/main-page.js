import {
  Button,
  Container,
  Footer,
  Header,
  PostItem,
  SearchTool,
  TitleText,
} from "../../components";

import personInSuitPng from "../../assets/images/img-bottom.png";
import personInSuitWebp from "../../assets/images/img-bottom.webp";
import personInSuitPng2x from "../../assets/images/img-bottom@2x.png";
import personInSuitWebp2x from "../../assets/images/img-bottom@2x.webp";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import personInSuit2Png from "../../assets/images/img-bottom2.png";
import personInSuit2Webp from "../../assets/images/img-bottom2.webp";
import personInSuit2Png2x from "../../assets/images/img-bottom2@2x.png";
import personInSuit2Webp2x from "../../assets/images/img-bottom2@2x.webp";
import { useDebounce } from "../../hooks/useDebounce";
import { postsAction } from "../../store/posts";
import { API_URL } from "../../variables";

export const MainPage = () => {
  const { list, loading, searchValue } = useSelector((state) => state.posts);

  const [limit, setLimit] = useState(9);

  const dispatch = useDispatch();

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(postsAction.setLoading(true));
    fetch(
      `${API_URL}/get-active-posts?${new URLSearchParams({
        search: debouncedValue,
        limit: limit,
        // date: dateValue,
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
      })
      .catch((err) => {
        return console.log(err);
      });
  }, [limit, debouncedValue]);

  if (loading) return <span className="loader"></span>;

  return (
    <div className="main-page__top">
      {/* can be paddding 22px / can be variable scss*/}
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
                // <Link to={`posts/${item._id}`}>
                <PostItem key={index} item={item}></PostItem>
                // </Link>
              ))}
              {/* <PostItem /> */}
            </ul>
            <Button
              onClick={() => setLimit(limit + 9)}
              style={{ background: "#006AFF", margin: "0 auto" }}
            >
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
      <Footer />
    </div>
  );
};
