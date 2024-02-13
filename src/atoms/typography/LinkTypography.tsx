import styled from 'styled-components';

const LinkTypography = styled('a')`
    font-size: 14px;
    font-weight: 600;
    line-height: 20.23px;
    height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.theme.text.light};
    display: inline-block;
    cursor: pointer;
`
export default LinkTypography;