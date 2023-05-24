import {
  Container,
  Header,
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
            <div className="add-post__form-time-group">
              <p className="add-post__form-time-text">
                Vaqt va yo’nalishni tanlang
              </p>
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
                <label htmlFor="" className="post-form-label">
                  Link kiriting
                  <InputText />
                </label>
              </div>
            </div>
          </form>
        </Container>
      </Container>
    </div>
  );
};
