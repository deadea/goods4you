import MainWrapper from "../atoms/wrappers/MainWrapper";
import About from "../organisms/About";
import Catalog from "../organisms/Catalog";
import Hero from "../organisms/Hero";
import Quiz from "../organisms/Quiz";

const Main = () => {
    return (
      <MainWrapper>
        <Hero />
        <Catalog />
        <About />
        <Quiz />
      </MainWrapper>
    );
  }
  
export default Main;