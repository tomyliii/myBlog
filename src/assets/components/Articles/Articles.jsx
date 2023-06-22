import "./style.css";
import Article from "../Article/Article";
const Articles = ({
  article1Title,
  article1TitleDescription,
  article1Img,
  article1Txt,
  article2Title,
  article2TitleDescription,
  article2Img,
  article2Txt,
}) => {
  return (
    <div>
      <Article
        title={article1Title}
        titleDescription={article1TitleDescription}
        img={article1Img}
        text={article1Txt}
      ></Article>
      <Article
        title={article2Title}
        titleDescription={article2TitleDescription}
        img={article2Img}
        text={article2Txt}
      ></Article>
    </div>
  );
};

export default Articles;
