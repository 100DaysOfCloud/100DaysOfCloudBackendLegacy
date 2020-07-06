import styled from 'styled-components'

export const ExpandButtonWrap = styled.span `
    display: block;
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    .icon{
        font-size: 25px;
    }
`;