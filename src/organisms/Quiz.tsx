import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

import SubTitleTypography from '../atoms/typography/SubTitleTypography';
import TextTypography from '../atoms/typography/TextTypography';
import SectionTitleTypography from '../atoms/typography/SectionTitleTypography';
import QuizCard from '../molecules/quizCard/QuizCard';
import Stepper from '../molecules/stepper/Stepper';
import { RootState } from '../store/store';
import Spinner from '../atoms/spinner/Spinner';

const QuizSection = styled('section')`
    width: 100%;
    background: ${props => props.theme.background.light}
`

const QuizContainer = styled('div')`
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 60px 130px;
`
const QuizContentContainer = styled('div')`
    background-color: ${props => props.theme.background.secondary};
    padding: 40px 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const TextContainer = styled('div')`
    border-bottom: 1px solid ${props => props.theme.border.dark};
`

const QuizTextTypography = styled(TextTypography)`
    line-height: 23px;
    padding-top: 7px;
    padding-bottom: 2px;
    color: ${props => props.theme.text.secondary};
`

const QuizItemsList = styled('ul')`
    padding-top: 33px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 70px;
    border-bottom: 1px solid ${props => props.theme.border.dark};
    height: 100%;
    max-height: 300px;
` 

const Quiz = () => {
    const [isLoading, setIsLoading] = useState(true)
    const categories = useSelector((state: RootState) => state.categories.categories)
    const quizItems = categories.map((item) => {
        return <QuizCard key={`${item}${Math.random()}`} name={item}/>
    })
    useEffect(() => {
        if (categories[0] !== '') setIsLoading(false)
    }, [categories])
    return (
        <QuizSection id='product-selection'>
            <QuizContainer>
                <QuizContentContainer>
                    <TextContainer>
                        <SubTitleTypography>We will select the perfect product for you</SubTitleTypography>
                        <QuizTextTypography>Answer three questions and we will send you a catalog with the most suitable products for you.</QuizTextTypography>
                    </TextContainer>
                    <div>
                        <SectionTitleTypography>What type of product are you considering?</SectionTitleTypography>
                        {isLoading ? <Spinner /> : <QuizItemsList>{quizItems}</QuizItemsList>}
                    </div>
                    <Stepper />
                </QuizContentContainer>
            </QuizContainer>
        </QuizSection>
    );
  }
  
export default Quiz;