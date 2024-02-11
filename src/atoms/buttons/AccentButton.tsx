import styled from 'styled-components';
import Button from './Button';

const AccentButton = styled(Button)`
    width: 201px;
    background: ${props => props.theme.button.accent};
`
export default AccentButton;