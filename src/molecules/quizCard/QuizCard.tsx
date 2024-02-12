import styled from 'styled-components';
import LabelTypography from '../../atoms/typography/LabelTypography';

const ListItem = styled('li')`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const LabelContainer = styled('div')`
    display: flex;
    gap: 10px;
    height: 24px;
`

interface Props {
    name: string;
    img: string;
}

const QuizCard = ( { name, img}: Props ) => {
    return (
        <ListItem>
            <img src={img} alt={`quiz option ${name}`} width='280px' height='120px'/>
            <LabelContainer>            
                <input type="checkbox" id={name} name={name} />
                <LabelTypography htmlFor={name}>{name}</LabelTypography>
            </LabelContainer>
        </ListItem>
    )
}
export default QuizCard;