import styled from 'styled-components';
import { FILTERITEMS } from '../../consts/consts';
import FilterCheckbox from '../../atoms/checkbox/FilterCheckbox';
import SectionTitleTypography from '../../atoms/typography/SectionTitleTypography';
import FilterSubtitleTypography from '../../atoms/typography/FilterSubtitleTypography';
import Button from '../../atoms/buttons/Button';
import ClearButton from '../../atoms/buttons/ClearButton';

const FilterContainer = styled('div')`
    width: 280px;
    height: 535px;
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
`

const CheckboxList = styled('ul')`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 240px;
    height: 228px;
    margin-top: 3px;
`
const CheckboxItem = styled('li')`
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.border.secondary};
    width: 120px;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Filter = () => {
    const filterItems = FILTERITEMS.map((item) => (
        <CheckboxItem key={`${item}${Math.random()}`}><FilterCheckbox label={item}/></CheckboxItem>
    ))
    return (
        <FilterContainer>
            <Title>Selection <br/>by parameters</Title>
            <CheckboxContainer>
                <FilterSubtitleTypography>Category</FilterSubtitleTypography>
                <CheckboxList>
                    {filterItems}
                </CheckboxList>
            </CheckboxContainer>
            <ButtonContainer>
                <Button>Apply</Button>
                <ClearButton>Reset</ClearButton>
            </ButtonContainer>
        </FilterContainer>
    );
};
  
export default Filter;