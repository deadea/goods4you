import styled from 'styled-components';

const LogoTypography = styled('p')`
    font-size: 30px;
    font-weight: 700;
    line-height: 43.35px;
    height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.theme.text.light};
`;
export default LogoTypography;