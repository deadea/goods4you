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
`

const TeamContainer = styled('div')`
    width: 1180px;
    margin: 0 auto;
    padding: 60px 130px 140px 130px;
    background: no-repeat right top url(${accentEllipse});
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

const Team = () => {
    return (
        <TeamSection>
            <TeamContainer>
                <TeamSubTitleTypography>Our team</TeamSubTitleTypography>
                <TeamCardsContainer>
                    <TeamCardsSubContainer>
                        <img src={team1} alt='team member Maxim portrait' />
                        <img src={team2} alt='team member Alex portrait' />
                    </TeamCardsSubContainer>
                    <TeamCardsSubContainer style={{flexDirection: 'column-reverse'}}>
                        <img src={team4} alt='team member Maxim portrait' />
                        <img src={team3} alt='team member Alex portrait' />
                    </TeamCardsSubContainer>
                    <TeamCardsSubContainer>
                        <img src={team5} alt='team member Maxim portrait' />
                        <img src={team6} alt='team member Alex portrait' />
                    </TeamCardsSubContainer>
                </TeamCardsContainer>
            </TeamContainer>
        </TeamSection>
    );
  }
  
export default Team;