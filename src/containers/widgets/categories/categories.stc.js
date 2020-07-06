import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export const CategroiesItem = styled.li`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    color: ${themeGet("colors.textColor")};
    text-transform: capitalize;
    font-size: ${themeGet("fontSizes.2")};
    font-weight: ${themeGet("fontWeights.medium")};
  }
`

export const CategroiesWrap = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  ${CategroiesItem} {
    &:not(:last-child) {
      border-bottom: 1px solid ${themeGet("colors.borderColor")};
      margin-bottom: 8px;
      padding-bottom: 9px;
    }
  }
`
