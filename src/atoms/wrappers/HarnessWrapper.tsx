import styled from 'styled-components';

const HarnessWrapper = styled('div')`
    width: 100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    color: ${props => props.theme.text.light};
`
export default HarnessWrapper;