import "./style.css";

const Article = ({ title, titleDescription, img, text }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{titleDescription}</p>
      <img src={img} alt="" />
      <p>{text}</p>
    </article>
  );
};

export default Article;
