import styled from 'styled-components';

const TitleTypography = styled('h1')`
    font-size: 36px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.theme.text.light};
`
export default TitleTypography;