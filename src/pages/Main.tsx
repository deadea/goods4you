import MainWrapper from "../atoms/wrappers/MainWrapper";
import About from "../organisms/About";
import Catalog from "../organisms/Catalog";
import Hero from "../organisms/Hero";

const Main = () => {
    return (
      <MainWrapper>
        <Hero />
        <Catalog />
        <About />
      </MainWrapper>
    );
  }
  
export default Main;