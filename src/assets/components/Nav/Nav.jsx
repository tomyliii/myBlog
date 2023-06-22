import "./style.css";

const Nav = ({ link1, link2, link3, link4 }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="">{link1}</a>
        </li>
        <li>
          <a href="">{link2}</a>
        </li>
        <li>
          <a href="">{link3}</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">{link4}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
