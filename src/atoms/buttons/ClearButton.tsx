import styled from 'styled-components';
import Button from './Button';

const ClearButton = styled(Button)`
    background: transparent;
    color: ${props => props.theme.text.dark};
`
export default ClearButton;