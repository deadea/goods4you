import styled from 'styled-components';
import SubTitleTypography from '../atoms/typography/SubTitleTypography';
import accentEllipse from '../assets/svg/AccentEllipse.svg'

import team1 from '../assets/png/team1.png'
import team2 from '../assets/png/team2.png'
import team3 from '../assets/png/team3.png'
import team4 from '../assets/png/team4.png'
import team5 from '../assets/png/team5.png'
import team6 from '../assets/png/team6.png'

const TeamSection = styled('section')`
    width: 100%;
    background: no-repeat right top url(${accentEllipse});
`

const TeamContainer = styled('div')`
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 60px 130px 140px 130px;
    display: flex;
    flex-direction: column;
    gap: 27px;
`

const TeamCardsContainer = styled('div')`
    height: 920px;
    display: flex;
    gap: 20px;
`

const TeamCardsSubContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;
`

const TeamSubTitleTypography = styled(SubTitleTypography)`
    color: ${props => props.theme.text.light};
`
const Img = styled('img')`
    filter: brightness(100%);
    transition: filter 1s ease;
    &:hover {
        filter: brightness(50%);
    }
`
const BlackoutContainer = styled('div')`
    position: relative;
    overflow: hidden;
    &:hover p {
        opacity: 1; 
    }
`
const BlackoutTextContainer = styled('div')`
    position: absolute;
    top: 45%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 380px;
    max-height: 400px;
`

const BlackoutText = styled('p')`
    opacity: 0;
    transition: opacity 1s ease;
    font-family: Jost;
    font-size: 24px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    color: rgba(255, 255, 255, 1);
`
const BlackoutSubText = styled('p')`
    opacity: 0;
    transition: opacity 1s ease;
    font-family: Jost;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em; 
    color: rgba(255, 255, 255, 1);   
`


const Team = () => {
    return (
        <TeamSection id='team'>
            <TeamContainer>
                <TeamSubTitleTypography>Our team</TeamSubTitleTypography>
                <TeamCardsContainer>
                    <TeamCardsSubContainer>
                        <BlackoutContainer>
                            <Img src={team1} alt='team member Maxim portrait' />
                            <BlackoutTextContainer>
                                <BlackoutText>Maxim</BlackoutText>
                                <BlackoutSubText>Administrator</BlackoutSubText>
                            </BlackoutTextContainer>
                        </BlackoutContainer>
                        <BlackoutContainer>
                            <Img src={team2} alt='team member Alex portrait' />
                            <BlackoutTextContainer>
                                <BlackoutText>Alex</BlackoutText>
                                <BlackoutSubText>Administrator</BlackoutSubText>
                            </BlackoutTextContainer>
                        </BlackoutContainer>
                    </TeamCardsSubContainer>
                    <TeamCardsSubContainer style={{flexDirection: 'column-reverse'}}>
                        <BlackoutContainer>
                            <Img src={team4} alt='team member Maxim portrait' />
                            <BlackoutTextContainer>
                                <BlackoutText>Alex</BlackoutText>
                                <BlackoutSubText>Administrator</BlackoutSubText>
                            </BlackoutTextContainer>
                        </BlackoutContainer>
                        <BlackoutContainer>
                            <Img src={team3} alt='team member Alex portrait' />
                            <BlackoutTextContainer>
                                <BlackoutText>Maria</BlackoutText>
                                <BlackoutSubText>Administrator</BlackoutSubText>
                            </BlackoutTextContainer>
                        </BlackoutContainer>
                    </TeamCardsSubContainer>
                    <TeamCardsSubContainer>
                        <BlackoutContainer>
                            <Img src={team5} alt='team member Maxim portrait' />
                            <BlackoutTextContainer>
                                <BlackoutText>Maria</BlackoutText>
                                <BlackoutSubText>Administrator</BlackoutSubText>
                            </BlackoutTextContainer>
                        </BlackoutContainer>
                        <BlackoutContainer>
                            <Img src={team6} alt='team member Alex portrait' />
                            <BlackoutTextContainer>
                                <BlackoutText>Maria</BlackoutText>
                                <BlackoutSubText>Administrator</BlackoutSubText>
                            </BlackoutTextContainer>
                        </BlackoutContainer>
                    </TeamCardsSubContainer>
                </TeamCardsContainer>
            </TeamContainer>
        </TeamSection>
    );
  }
  
export default Team;