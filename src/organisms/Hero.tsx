import styled from 'styled-components';
import TitleTypography from "../atoms/typography/TitleTypography";
import TextTypography from "../atoms/typography/TextTypography";
import BgTypography from '../atoms/typography/BgTypography';
import AccentButton from '../atoms/buttons/AccentButton';

const HeroSection = styled('section')`
    width: 1180px;
    margin: 0 auto;
    padding: 100px 130px 93px 130px;
`
const HeroContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
`
const HeroTextContainer = styled('div')`
    width: 580px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Hero = () => {
    return (
        <HeroSection>
            <HeroContainer>
            <HeroTextContainer>
                <TitleTypography>Any products from famous brands with worldwide delivery</TitleTypography>
                <TextTypography style={{width: '350px'}}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</TextTypography>
            </HeroTextContainer>
            <AccentButton style={{marginLeft: '15px'}}>Go to shopping</AccentButton>{/*поздно поняла, что скорее всего это должна быть ссылка :( */}
            <BgTypography>Goods4you</BgTypography>
            </HeroContainer>
        </HeroSection>
    );
  }
  
export default Hero;