import styled from 'styled-components';
import SubTitleTypography from '../atoms/typography/SubTitleTypography';
import AccordionItem from '../molecules/accordion/AccordionItem';
import { ACCORDIONITEMS } from '../consts/consts';

const FaqSection = styled('section')`
    width: 100%;
    background: ${props => props.theme.background.light}
`

const FaqContainer = styled('div')`
    width: 1180px;
    margin: 0 auto;
    padding: 60px 280px 92px 280px;
    display: flex;
    flex-direction: column;
    gap: 27px;
`
const AccordionList = styled('ul')`
    max-width: 880px;
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
        <FaqSection>
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