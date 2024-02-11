import styled from 'styled-components';

const LabelTypography = styled('label')`
    font-family: Jost;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: ${props => props.theme.text.dark};
    cursor: pointer;
`
export default LabelTypography;