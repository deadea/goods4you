import styled from 'styled-components';
import LabelTypography from '../../atoms/typography/LabelTypography';

const ListItem = styled('li')`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: fit-content;
    flex-basis: 25%;
`
const LabelContainer = styled('div')`
    display: flex;
    gap: 10px;
    height: 24px;
    width: fit-content;
`

interface Props {
    name: string;
}

const QuizCard = ( { name}: Props ) => {
    return (
        <ListItem>
            <LabelContainer>            
                <input type="checkbox" id={name} name={name} />
                <LabelTypography htmlFor={name}>{name}</LabelTypography>
            </LabelContainer>
        </ListItem>
    )
}
export default QuizCard;