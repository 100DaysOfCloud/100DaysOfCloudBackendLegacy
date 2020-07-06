import styled, { css } from 'styled-components';
import Anchor from '../shared/anchor'
import { themeGet } from '@styled-system/theme-get';

export const PaginationWrap = styled.div`
    position: relative;
`;

export const PaginationList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
`;

export const PaginationItem = styled.li`
    &:not(:last-child){
        margin-right: 8px;
    }
    ${props => props.disabled && css`
        display: none;
    `}
`;

export const PaginationLink = styled(Anchor)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50px;
    min-height: 48px;
    line-height: 48px;
    border-radius: 3px;
    border: 1px solid ${themeGet('colors.borderColor')};
    color: ${themeGet('colors.silver')};
    text-align: center;
    font-size: ${themeGet('fontSize.text')};
    font-weight: ${themeGet('fontWeights.medium')};
    &:hover{
        color: ${themeGet('colors.hoverColor')};
        border-color: ${themeGet('colors.hoverColor')};
    }
    ${props => props.active && css`
        color: ${themeGet('colors.headingColor')};
        border-color: ${themeGet('colors.hoverColor')};
        background-color: ${themeGet('colors.hoverColor')};
        &:hover{
            color: ${themeGet('colors.headingColor')};
            border-color: ${themeGet('colors.hoverColor')};
        }
    `}
    &.prev,
    &.next{
        padding: 0 20px;
    }
    svg{
        width: 18px;
        height: 18px;
    }
`;