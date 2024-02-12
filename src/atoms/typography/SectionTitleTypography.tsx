import styled from 'styled-components';

const SectionTitleTypography = styled('h3')`
    font-size: 24px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.theme.text.dark};
`
export default SectionTitleTypography;