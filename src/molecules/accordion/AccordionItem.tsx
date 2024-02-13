import { useState } from 'react';
import styled from 'styled-components';
import close from '../../assets/svg/Close.svg';
import SectionTitleTypography from '../../atoms/typography/SectionTitleTypography';
import TextTypography from '../../atoms/typography/TextTypography';

interface Props {
    title: string,
    content: string,
}

const AccordionIcon = styled('img')`
    transition: transform 0.3s ease-in-out;
`
const AccordionInner = styled('div')`
    max-height: 0;
    overflow: hidden;
    text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transition-duration: 0.5s;
    transition-property: max-height;
    z-index: 1;
    position: relative;
`
const AccordionContent = styled('div')`
    opacity: 1;
    transform: translateY(-1rem);
    transition-timing-function: linear, ease;
    transition-duration: 0.1s;
    transition-property: opacity, transform;
    transition-delay: 0.5s;
    padding-bottom: 40px;
`
const AccordionQuestion = styled('div')`
    padding-top: 30px;
    padding-bottom: 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    position: relative;
`
const AccordionTitle = styled(SectionTitleTypography)`
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    color: ${props => props.theme.border.secondaryDark};
`
const AccordionText = styled(TextTypography)`
    color: ${props => props.theme.text.secondaryLight};
`

const AccordionItem = ({title, content}:Props) => {
    const [opened, setOpened] = useState(false)
    
    return (
        <div onClick={() => setOpened((prev) => !prev)}>
          <AccordionQuestion>
            <AccordionTitle>
              {title}
            </AccordionTitle>
            {opened ? <AccordionIcon style={{transform: 'rotate(45deg)'}} src={close} alt='close'/> : <AccordionIcon src={close} alt='close'/>}
          </AccordionQuestion>
          {opened? 
            <AccordionInner 
              style={{
                maxHeight: '100rem',
                transitionTimingFunction: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
                transitionDuration: '0.5s',
                transitionProperty: 'max-height'
              }}>
              <AccordionContent
                style={{
                  opacity: 1,
                  transform: 'translateY(0)',
                  transitionDelay: '0.2s',
                  transitionTimingFunction: 'ease-in-out',
                  transitionDuration: '0.2s',
                  transitionProperty: 'opacity, transform',
                }}>
                <AccordionText>
                  {content}
                </AccordionText>
              </AccordionContent>
            </AccordionInner>
          : 
          <AccordionInner>
            <AccordionContent>
              <AccordionText>
                {content}
              </AccordionText>
            </AccordionContent>
          </AccordionInner>
        }
        </div>
      )
}
export default AccordionItem;