import MainWrapper from "../atoms/wrappers/MainWrapper";
import Catalog from "../organisms/Catalog";
import Hero from "../organisms/Hero";

const Main = () => {
    return (
      <MainWrapper>
        <Hero />
        <Catalog />
      </MainWrapper>
    );
  }
  
export default Main;