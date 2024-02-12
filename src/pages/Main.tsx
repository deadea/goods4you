import MainWrapper from "../atoms/wrappers/MainWrapper";
import About from "../organisms/About";
import Catalog from "../organisms/Catalog";
import Hero from "../organisms/Hero";
import Quiz from "../organisms/Quiz";
import Team from "../organisms/Team";

const Main = () => {
    return (
      <MainWrapper>
        <Hero />
        <Catalog />
        <About />
        <Quiz />
        <Team />
      </MainWrapper>
    );
  }
  
export default Main;