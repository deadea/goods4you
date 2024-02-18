import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { chooseCategory, resetCategory } from '../../store/slices/categoriesSlice';

import FilterCheckbox from '../../atoms/checkbox/FilterCheckbox';
import SectionTitleTypography from '../../atoms/typography/SectionTitleTypography';
import FilterSubtitleTypography from '../../atoms/typography/FilterSubtitleTypography';
import Button from '../../atoms/buttons/Button';
import ClearButton from '../../atoms/buttons/ClearButton';
import Spinner from '../../atoms/spinner/Spinner';

const FilterContainer = styled('div')`
    width: 280px;
    height: max-content;
    padding: 9px 20px 0px 20px;
    box-sizing: border-box;
    background: ${props => props.theme.background.secondary};
    border-radius: 4px;
`

const Title = styled(SectionTitleTypography)`
    white-space: pre;
`

const CheckboxContainer = styled('div')`
    padding-top: 25px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CheckboxList = styled('ul')`
    display: flex;
    min-height: 570px;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 240px;
    margin-top: 3px;
`

const CheckboxItem = styled('li')<{ $isActive?: boolean; }>`
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.border.secondary};
    width: 120px;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    background-color: ${props => props.$isActive ? "white" : "transparent"};
`

const ButtonContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

interface Props {
    categories: string[];
    active: string;
}

const Filter = ({ categories, active }: Props) => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    const items = categories.map((item) => <CheckboxItem $isActive={item === active} onClick={() => {dispatch(chooseCategory(item))}} key={`${item}${Math.random()}`}><FilterCheckbox label={item}/></CheckboxItem>)
    
    useEffect(() => {
        if (categories[0] !== '') setIsLoading(false)
    }, [categories])

    return (
        <FilterContainer>
            <Title>Selection <br/>by parameters</Title>
            <CheckboxContainer>
                <FilterSubtitleTypography style={{alignSelf: 'start'}}>Category</FilterSubtitleTypography>
                {isLoading ? <Spinner /> : <CheckboxList>{items}</CheckboxList>}
            </CheckboxContainer>
            <ButtonContainer>
                <Button>Apply</Button>
                <ClearButton onClick={() => dispatch(resetCategory())}>Reset</ClearButton>
            </ButtonContainer>
        </FilterContainer>
    );
};
  
export default Filter;