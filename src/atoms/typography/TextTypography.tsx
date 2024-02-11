import styled from 'styled-components';

const TextTypography = styled('p')`
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.theme.text.light};
`
export default TextTypography;