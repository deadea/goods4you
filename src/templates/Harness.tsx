import React from 'react';
import HarnessWrapper from '../atoms/wrappers/HarnessWrapper';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

interface Props {
    children: React.ReactNode;
}

const Harness = ({ children }: Props) => {
    return (
        <HarnessWrapper>
            <Header/>
                {children}
            <Footer />
        </HarnessWrapper>
    );
  }
  
export default Harness;