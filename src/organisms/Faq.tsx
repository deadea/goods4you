import styled from 'styled-components';
import SubTitleTypography from '../atoms/typography/SubTitleTypography';
import AccordionItem from '../molecules/accordion/AccordionItem';
import { ACCORDIONITEMS } from '../consts/consts';

const FaqSection = styled('section')`
    width: 100%;
    background: ${props => props.theme.background.light};
`

const FaqContainer = styled('div')`
    margin: 0 auto;
    width: 100%;
    max-width: 880px;
    padding: 60px 280px 92px 280px;
    display: flex;
    flex-direction: column;
    gap: 27px;
`
const AccordionList = styled('ul')`
    width: 100%;
    overflow: hidden;
`
const AccordionListItem = styled('li')`
  border-top: 1px solid ${props => props.theme.border.secondaryDark};
  &:last-child {
    border-bottom: 1px solid ${props => props.theme.border.secondaryDark};
  }
`

const Faq = () => {
    return (
        <FaqSection id="faq">
            <FaqContainer>
                <SubTitleTypography>FAQ</SubTitleTypography>
                <AccordionList>
                    {ACCORDIONITEMS.map(({title, content}, key) => {
                        return (
                        <AccordionListItem key={key} >
                            <AccordionItem title={title} content={content} />
                        </AccordionListItem>
                        )
                    })}
                </AccordionList>
            </FaqContainer>
        </FaqSection>
    );
  }
  
export default Faq;