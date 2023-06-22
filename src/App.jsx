import { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header/Header";
import Nav from "./assets/components/Nav/Nav";
import Main from "./assets/components/Main/Main";
import Footer from "./assets/components/Footer/Footer";
import pictureOfMe from "./assets/Images/pictureOfMe.jpg";
import pictureOfCarAtDubai from "./assets/Images/pictureOfCarAtDubai.jpg";
import pictureOfBuggyAtDubai from "./assets/Images/pictureOfBuggyAtDubai.jpg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header title="My Blog" text="An awesome baseline"></Header>
      <Nav link1="lien" link2="lien" link3="lien" link4="lien"></Nav>
      <Main
        classNameArticles="articles"
        classNameAside="aside"
        article1Title="Title heading"
        article1TitleDescription="Title description"
        article1Img={pictureOfCarAtDubai}
        article1Txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        article2Title="Title heading"
        article2TitleDescription="Title description"
        article2Img={pictureOfBuggyAtDubai}
        article2Txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Morbi non arcu risus quis varius quam. Facilisi morbi tempus iaculis urna. Dui id ornare arcu odio ut sem nulla pharetra. Nec dui nunc mattis enim ut tellus elementum. Velit aliquet sagittis id consectetur purus. Odio euismod lacinia at quis. In arcu cursus euismod quis viverra nibh. Massa tempor nec feugiat nisl pretium fusce id velit. In ante metus dictum at tempor commodo. Accumsan lacus vel facilisis volutpat est velit egestas dui id."
        asideTitle="About me"
        asideImg={pictureOfMe}
        asideTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit."
      ></Main>
      <Footer
        text={
          <>
            Made white <span>React</span> at <span>Le Réacteur</span> By{" "}
            <span>Nono</span>
          </>
        }
      ></Footer>
    </>
  );
}

export default App;
