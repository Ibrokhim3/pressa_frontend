import { Container, Header, SearchTool, TitleText } from "../../components";

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
          </section>
        </main>
      </Container>
    </div>
  );
};
