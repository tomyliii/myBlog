import "./style.css";

const Aside = ({ asideTitle, asideImg, asideTxt }) => {
  return (
    <aside>
      <h2>{asideTitle}</h2>
      <img src={asideImg} alt="" />
      <p>{asideTxt}</p>
    </aside>
  );
};

export default Aside;
