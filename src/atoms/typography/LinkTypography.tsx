import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkTypography = styled('a')`
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
export const RouterLinkTypography = styled(Link)`
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