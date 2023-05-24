import {
  Container,
  Header,
  InputRadio,
  InputText,
  PageName,
  PostInput,
  Select,
} from "../../components";

export const AddPost = () => {
  return (
    <div className="add-post">
      <Header style={{ marginBottom: "42px" }}></Header>
      <Container>
        <PageName>E’lon berish</PageName>
        <Container style={{ maxWidth: "735px", padding: "0" }}>
          <p className="add-post-main-text">E’lon berish</p>
          <form className="add-post__form">
            <div className="add-post__form-group-wrapper">
              <p className="add-post__form-text">Vaqt va yo’nalishni tanlang</p>
              {/* <PostInput type={"date"}></PostInput> */}
              <div className="add-post__form-date-wrapper">
                <label
                  className="add-post__input-date-label"
                  htmlFor="input-date"
                >
                  O’tkaziladigan sanani kiriting
                </label>
                {/* <div className="add-post__input-date-wrapper"> */}
                <input
                  id="input-date"
                  className="add-post__input-date"
                  type="date"
                />
                {/* </div> */}

                <input
                  id="input-time"
                  className="add-post__input-date add-post__input-date-1"
                  type="time"
                />
              </div>
              <div className="add-post__form-dir-wrapper">
                <label className="post-form-label" htmlFor="dirSelect">
                  Yo’nalishni belgilang
                  <Select id={"dirSelect"}>
                    <option className="option" value="">
                      Information Technologies
                    </option>
                    <option className="option" value="">
                      Disegn
                    </option>
                  </Select>
                </label>
                <label className="post-form-label" htmlFor="innerDir">
                  Ichki yo’nalish
                  <Select id={"innerDir"}>
                    <option className="option" value="">
                      Java developer
                    </option>
                    <option className="option" value="">
                      Node Js developer
                    </option>
                  </Select>
                </label>
              </div>
              <div className="add-post__form-type-wrapper">
                <label className="post-form-label post-form-label-1">
                  Tadbir turi
                  <div className="add-post__radio-wrapper">
                    <div className="add-post__radio-button-wrapper">
                      <input
                        checked
                        className="add-post__form-radio"
                        id="onlineInput"
                        type="radio"
                        name="onlineOffline"
                      />
                      <label
                        className="add-post__form-label"
                        htmlFor="onlineInput"
                      >
                        Online
                      </label>
                    </div>
                    <div className="add-post__radio-button-wrapper">
                      <input
                        className="add-post__form-radio"
                        id="offlineInput"
                        type="radio"
                        name="onlineOffline"
                      />
                      <label
                        className="add-post__form-label"
                        htmlFor="offlineInput"
                      >
                        Offline
                      </label>
                    </div>
                  </div>
                </label>

                <InputText
                  htmlFor={"input-link"}
                  inputStyle={{ color: "#0085FF" }}
                >
                  Link kiriting
                </InputText>
              </div>
            </div>
            <p className="add-post__form-text">Tashkilotchi</p>
            <InputRadio
              style={{ marginBottom: "8px" }}
              value1={"Jismoniy shaxs"}
              value2={"Yuridik shaxs"}
            ></InputRadio>
            <div
              style={{ marginBottom: "53px" }}
              className="add-post__form-group-wrapper"
            >
              <div className="add-post__form-personal-wrapper">
                <InputText style={{ marginBottom: "30px" }}>
                  Ismi sharifi
                </InputText>
                <InputText style={{ marginBottom: "30px" }}>
                  Professiya
                </InputText>
                <InputText max={"13"} inputType={"number"}>
                  Telefon raqami
                </InputText>
                <InputText max={"13"} inputType={"number"}>
                  Qo’shimcha tel raqam
                </InputText>
              </div>
            </div>
            <div className="add-post__form-group-wrapper"></div>
          </form>
        </Container>
      </Container>
    </div>
  );
};
