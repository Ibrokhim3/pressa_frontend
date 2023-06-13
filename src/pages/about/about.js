import { Container, Footer, Header, PageName } from "../../components";
import rightIcon from "../../assets/icons/right.svg";

export const About = () => {
  return (
    <div className="about">
      <Header style={{ marginBottom: "42px" }}></Header>
      <Container style={{ flexGrow: 1, width: "100%" }}>
        <div className="about-wrapper">
          {/* style lar togri berilmadi */}
          <PageName style={{ marginBottom: "76px" }}>Biz haqimizda</PageName>
          <h2 className="about__title">Biz haqimizda</h2>
          <p className="about__text">
            Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
            musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
            uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
            dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
          </p>
          <p className="about__text">
            Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
            musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
            uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
            dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
            Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta
            guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent
            shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli
            ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi
            topshirildi. Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning
            qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib,
            dastlabki uchta o'rin egalari qimmatbaho sovg'alar bilan
            taqdirlanadi. Biz barchaga omad tilab qolamiz.{" "}
          </p>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};
