import {
  Container,
  Header,
  SearchTool,
  TitleText,
  PostItem,
  Button,
} from "../../components";

import personInSuitWebp from "../../assets/images/img-bottom.webp";
import personInSuitWebp2x from "../../assets/images/img-bottom@2x.webp";
import personInSuitPng from "../../assets/images/img-bottom.png";
import personInSuitPng2x from "../../assets/images/img-bottom@2x.png";

export const MainPage = () => {
  return (
    <div className="main-page__top">
      <Header style={{ marginBottom: "113px" }}></Header>
      <Container>
        <TitleText style={{ marginBottom: "94px" }}>
          Eng so’ngi master klasslar va tadbirlar bizning saytda
        </TitleText>
        <SearchTool style={{ marginBottom: "149px" }}></SearchTool>
        <main>
          <section className="main-page__posts-list">
            <p className="main-page__status-text">Oxirgi e’lonlar</p>
            <ul className="main-page__post-list">
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
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
          </section>
        </main>
      </Container>
    </div>
  );
};
