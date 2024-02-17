import React from 'react';
import { useLocation } from 'react-router-dom';
import HarnessWrapper from '../atoms/wrappers/HarnessWrapper';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

interface Props {
    children: React.ReactNode;
}

const Harness = ({ children }: Props) => {
    const location = useLocation(); 
    console.log(location)
    return (
        <HarnessWrapper>
            <Header/>
                {children}
            {location.pathname === '/' && <Footer />}
        </HarnessWrapper>
    );
  }
  
export default Harness;