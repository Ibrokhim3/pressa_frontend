import {
  Container,
  Header,
  SearchTool,
  TitleText,
  PostItem,
  Button,
} from "../../components";

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
          <section>
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
            <Button
              style={{ background: "#006AFF", margin: "0 auto 144px auto" }}
            >
              Ko’proq ko’rish
            </Button>
          </section>
        </main>
      </Container>
    </div>
  );
};
