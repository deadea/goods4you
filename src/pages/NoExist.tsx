import MainWrapper from "../atoms/wrappers/MainWrapper";
import { Link } from 'react-router-dom';

const NoExist = () => {
    return (
        <MainWrapper>
            <p>Page not found</p>
            <Link to={"/"}>Return to main page</Link>
        </MainWrapper>
    );
  }
  
export default NoExist;