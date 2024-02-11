import styled from 'styled-components';

const AccentButton = styled('button')`
    width: 201px;
    height: 67px;
    background: ${props => props.theme.background.accent};
    color: ${props => props.theme.text.light};
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
`
export default AccentButton;