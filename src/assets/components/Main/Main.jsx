import "./style.css";
import Articles from "../Articles/Articles";
import Aside from "../Aside/Aside";

const Main = ({
  article1Title,
  article1TitleDescription,
  article1Img,
  article1Txt,
  article2Title,
  article2TitleDescription,
  article2Img,
  article2Txt,
  asideTitle,
  asideImg,
  asideTxt,
  classeNameArticles,
  classeNameAside,
}) => {
  return (
    <main>
      <Articles
        className={classeNameArticles}
        article1Title={article1Title}
        article1TitleDescription={article1TitleDescription}
        article1Img={article1Img}
        article1Txt={article1Txt}
        article2Title={article2Title}
        article2TitleDescription={article2TitleDescription}
        article2Img={article2Img}
        article2Txt={article2Txt}
      ></Articles>
      <Aside
        className={classeNameAside}
        asideTitle={asideTitle}
        asideImg={asideImg}
        asideTxt={asideTxt}
      ></Aside>
    </main>
  );
};

export default Main;
