import styled from 'styled-components';

const FooterWrapper = styled('div')`
    margin: 0 auto;
    width: calc(100% - 130px);
    padding-left: 130px;
    background: ${props => props.theme.background.secondaryDark};
`;
export default FooterWrapper;