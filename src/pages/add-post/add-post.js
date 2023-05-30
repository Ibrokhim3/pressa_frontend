import {
  Container,
  Footer,
  Header,
  InputRadio,
  InputText,
  PageName,
  PostInput,
  Select,
} from "../../components";

export const AddPost = () => {
  const elModal = document.querySelector(".add-post__modal");

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    fetch("http://localhost:2000/pressa/test-upload", {
      method: "POST",
      headers: "Content-type",
    });

    elModal.style.display = "block";
  };

  return (
    <div className="add-post">
      <Header style={{ marginBottom: "42px" }}></Header>
      <Container>
        <PageName>E’lon berish</PageName>
        <Container style={{ maxWidth: "735px", padding: "0" }}>
          <p className="add-post-main-text">E’lon berish</p>
          <form onSubmit={handleFormSubmit} className="add-post__form">
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
              style={{ marginBottom: "53px", paddingBottom: "28px" }}
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
            <div
              style={{ paddingBottom: "21px" }}
              className="add-post__form-group-wrapper"
            >
              <p className="add-post__form-text add-post__form-text-1">Post</p>
              <input
                placeholder="Mavzuni sarlavhasi"
                className="add-post__form-post-input"
                type="text"
              />
              <InputText
                style={{ marginBottom: "41px", width: "100%" }}
                inputStyle={{ width: "100%" }}
                placeholder={"Description"}
              >
                Description
              </InputText>
              <label
                style={{ marginBottom: "20px" }}
                className="post-form-label"
                htmlFor=""
              >
                Rasm yuklash
                <input
                  className="add-post__upload-input"
                  type="file"
                  accept="image/*"
                />
              </label>
              <p className="add-post__upload-text">
                Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin
              </p>
              <label
                style={{ marginBottom: "50px" }}
                className="post-form-label"
              >
                Mavzu matni
                <textarea
                  className="add-post__form-textarea"
                  placeholder="Mavzu matni"
                ></textarea>
              </label>
              <button className="add-post__form-cancel-button">
                Bekor qilish
              </button>
              <button type="submit" className="add-post__form-submit-button">
                E’lonni yuborish
              </button>
            </div>
          </form>
        </Container>
      </Container>
      <Footer></Footer>
      <div className="add-post__modal">
        <div className="add-post__modal-content">
          <span
            className="add-post__modal-close"
            onClick={() => (elModal.style.display = "none")}
          ></span>
          <p className="add-post__modal-header">Sizning e’loningiz yuborildi</p>
          <p className="add-post__modal-text">
            Yaqin soatlar ichda admin tomonidan tekshirib chiqladi va saytda
            e’lon qilinadi!
          </p>
          <button
            className="add-post__modal-button"
            onClick={() => (elModal.style.display = "none")}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};
