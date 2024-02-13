import styled from 'styled-components';
import SubTitleTypography from '../atoms/typography/SubTitleTypography';
import sneakers from '../assets/png/about.png';
import ellipses from '../assets/svg/Ellipses.svg'
import TextTypography from '../atoms/typography/TextTypography';

const AboutSection = styled('section')`
    width: 100%;
`

const AboutContainer = styled('div')`
    width: 1180px;
    margin: 0 auto;
    padding: 0 130px;
    padding-left: 134px;
    background: no-repeat url(${ellipses});
    display: flex;
    gap: 40px;
`

const TextContainer = styled('div')`
    display: flex;
    flex-direction: column;
    padding-top: 222px;
    padding-right: 5px;
    width: 50%; 
`

const AboutSubTitleTypography = styled(SubTitleTypography)`
    color: ${props => props.theme.text.light};
    padding-bottom: 7px;
`
const AboutTextTypography = styled(TextTypography)`
    max-width: 380px;
    padding-bottom: 41px;
`
const LogoTypography = styled(TextTypography)`
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    text-align: right;
    position: relative;
    width: min-content;
    align-self: flex-end;
    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: white;
        left: -49px;
        bottom: 19px;
    }
`

const About = () => {
    return (
        <AboutSection id='about'>
            <AboutContainer>
                <TextContainer>
                    <AboutSubTitleTypography>About us</AboutSubTitleTypography>
                    <AboutTextTypography>Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of products.<br/>But we will help you make the right choice!</AboutTextTypography>
                    <LogoTypography>Goods4you</LogoTypography>
                </TextContainer>
                <img src={sneakers} alt='sneakers close up'/>
            </AboutContainer>
        </AboutSection>
    );
  }
  
export default About;