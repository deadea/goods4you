import styled from 'styled-components';

const SubTitleTypography = styled('h2')`
    font-size: 30px;
    font-weight: 700;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.theme.text.dark};
`
export default SubTitleTypography;