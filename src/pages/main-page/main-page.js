import { Container, Header, SearchTool, TitleText } from "../../components";

export const MainPage = () => {
  return (
    <div className="main-page__top">
      <Header style={{ marginBottom: "113px" }}></Header>
      <Container>
        <TitleText style={{ marginBottom: "94px" }}>
          Eng so’ngi master klasslar va tadbirlar bizning saytda
        </TitleText>
        <SearchTool></SearchTool>
      </Container>
    </div>
  );
};
