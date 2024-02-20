import styled from 'styled-components';

const FooterWrapper = styled('footer')`
    margin: 0 auto;
    width: 100%;
    padding: 0 130px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    background: ${props => props.theme.background.secondaryDark};
`;
export default FooterWrapper;