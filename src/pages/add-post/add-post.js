import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Footer,
  Header,
  InputRadio,
  InputText,
  Option,
  PageName,
  PostInput,
  Select,
} from "../../components";
import { postsAction } from "../../store";

export const AddPost = () => {
  const elModal = document.querySelector(".add-post__modal");

  const { list, loading, error } = useSelector((state) => state.posts);

  const [options, setOptions] = useState(null);
  const [direction, setDirection] = useState(null);
  const [inputValue, setInputValue] = useState("online");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const styles = {
    opacity: loading ? 0.7 : 1,
  };

  const selectedCategory = options?.find((item) => item.category === direction);

  useEffect(() => {
    fetch("http://localhost:2001/pressa/get-main-categories")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        setOptions(data);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);

  const onFileChange = async (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const onValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postsAction.setLoading(true));

    const {
      inputDate: { value: postDate },
      inputTime: { value: postTime },
      dirSelect: { value: postDir },
      innerDirSelect: { value: postInnerDir },
      inputLink: { value: postLink },
      inputName: { value: speakerName },
      inputJob: { value: speakerJob },
      inputPhone: { value: speakerTelNum },
      inputAddPhone: { value: speakerTelNum2 },
      inputTitle: { value: postTitle },
      inputDesc: { value: postDesc },
      inputTextarea: { value: postText },
    } = evt.target;

    // console.log(
    //   postDate,
    //   postTime,
    //   postDir,
    //   postInnerDir,
    //   inputValue,
    //   postLink,
    //   speakerName,
    //   speakerJob,
    //   speakerTelNum,
    //   speakerTelNum2,
    //   postTitle,
    //   postDesc,
    //   postText
    // );

    const formData = new FormData();

    formData.append("postDate", postDate);
    formData.append("postTime", postTime);
    formData.append("postDir", postDir);
    formData.append("postInnerDir", postInnerDir);
    formData.append("postType", inputValue);
    formData.append("postLink", postLink);
    formData.append("speakerName", speakerName);
    formData.append("speakerJob", speakerJob);
    formData.append("speakerTelNum", speakerTelNum);
    formData.append("speakerTelNum2", speakerTelNum2);
    formData.append("postTitle", postTitle);
    formData.append("postImg", file);
    formData.append("postDesc", postDesc);
    formData.append("postText", postText);

    fetch("http://localhost:2001/pressa/add-post", {
      method: "POST",
      // headers: { "Content-type": "Application/json" },
      body: formData,
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        alert(data);
        elModal.style.display = "block";
        dispatch(postsAction.setLoading(false));
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
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
                  htmlFor="inputDate"
                >
                  O’tkaziladigan sanani kiriting
                </label>
                {/* <div className="add-post__input-date-wrapper"> */}
                <input
                  id="inputDate"
                  className="add-post__input-date"
                  type="date"
                />
                {/* </div> */}

                <input
                  id="inputTime"
                  className="add-post__input-date add-post__input-date-1"
                  type="time"
                />
              </div>
              <div className="add-post__form-dir-wrapper">
                <label className="post-form-label" htmlFor="dirSelect">
                  Yo’nalishni belgilang
                  <Select
                    onChange={(e) => setDirection(e.target.value)}
                    id={"dirSelect"}
                  >
                    {options?.map((item, index) => (
                      <option value={item.category} key={index}>
                        {item.category}
                      </option>
                    ))}
                  </Select>
                </label>
                <label className="post-form-label" htmlFor="innerDirSelect">
                  Ichki yo’nalish
                  <Select id={"innerDirSelect"}>
                    {selectedCategory?.subCategory?.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
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
                        onChange={onValueChange}
                        value="online"
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
                        onChange={onValueChange}
                        value="offline"
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
                  id={"inputLink"}
                  htmlFor={"inputLink"}
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
                <InputText
                  id={"inputName"}
                  htmlFor={"inputName"}
                  style={{ marginBottom: "30px" }}
                >
                  Ismi sharifi
                </InputText>
                <InputText
                  id={"inputJob"}
                  htmlFor={"inputJob"}
                  style={{ marginBottom: "30px" }}
                >
                  Professiya
                </InputText>
                <InputText
                  id={"inputPhone"}
                  htmlFor={"inputPhone"}
                  // max={"13"}
                  inputType={"number"}
                >
                  Telefon raqami
                </InputText>
                <InputText
                  id={"inputAddPhone"}
                  htmlFor={"inputAddPhone"}
                  // max={"13"}
                  inputType={"number"}
                >
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
                id="inputTitle"
                placeholder="Mavzuni sarlavhasi"
                className="add-post__form-post-input"
                type="text"
              />
              <InputText
                id={"inputDesc"}
                htmlFor={"inputDesc"}
                style={{ marginBottom: "41px", width: "100%" }}
                inputStyle={{ width: "100%" }}
                placeholder={"Description"}
              >
                Description
              </InputText>
              <label
                style={{ marginBottom: "20px" }}
                className="post-form-label"
                htmlFor="inputFile"
              >
                Rasm yuklash
                <input
                  onChange={onFileChange}
                  id="inputFile"
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
                htmlFor="inputTextarea"
              >
                Mavzu matni
                <textarea
                  id="inputTextarea"
                  className="add-post__form-textarea"
                  placeholder="Mavzu matni"
                ></textarea>
              </label>
              <Link to={"/"} className="add-post__form-cancel-button">
                Bekor qilish
              </Link>
              <button
                id="submitBtn"
                disabled={loading}
                type="submit"
                style={styles}
                className="add-post__form-submit-button"
              >
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
