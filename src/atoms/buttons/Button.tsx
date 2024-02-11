import styled from 'styled-components';

const Button = styled('button')`
    width: 239px;
    height: 67px;
    background: ${props => props.theme.button.dark};
    color: ${props => props.theme.text.light};
    border-radius: 4px;
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
`
export default Button;