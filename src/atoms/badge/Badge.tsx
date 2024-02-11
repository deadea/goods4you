import styled from 'styled-components';

const Badge = styled('div')`
    position: absolute;
    bottom: -4px;
    right: -8px;
    color: ${props => props.theme.text.light};
    background-color: ${props => props.theme.background.accent};
    font-size: 12px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    padding: 0 1px 2px 1px;
    width: 16.23px;
    height: 13.7px;
    border-radius: 50%;
`
export default Badge;