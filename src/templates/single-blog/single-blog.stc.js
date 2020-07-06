import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { WidgetBoxWrap } from "../../components/shared/widget-box/widget-box.stc"
import { device } from "../../theme"

export const SinglePostArea = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  ${device.small} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  ${device.medium} {
    padding-top: 100px;
    padding-bottom: 51px;
  }
`

export const SinglePostWrap = styled.article`
  .post-content {
    p {
      font-size: 14px;
      margin-bottom: 26px;
      line-height: 1.714;
      &:first-letter {
        text-transform: capitalize;
      }
    }
    blockquote {
      position: relative;
      max-width: 660px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 35px;
      text-align: center;
      p {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.667;
        color: ${themeGet("colors.headingColor")};
      }
      &:before {
        position: absolute;
        content: "";
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 125px;
        height: 109px;
        z-index: -1;
      }
    }
    figcaption {
      margin-top: 5px;
      text-align: center;
    }
    ul {
      margin-left: 0;
      padding-left: 0;
      list-style: none;
      margin-bottom: 20px;
      li {
        position: relative;
        font-size: 14px;
        color: ${themeGet("colors.headingColor")};
        padding-left: 22px;
        &:before {
          position: absolute;
          content: "";
          width: 6px;
          height: 6px;
          background: #99999c;
          border-radius: 50%;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &:not(:last-child) {
          margin-bottom: 12px;
        }
      }
    }
    p {
      code {
        margin-top: 10px;
        display: block;
        color: #009dc4;
      }
    }
    .gatsby-resp-image-background-image,
    img {
      border-radius: 5px;
    }
  }
`

export const PostMedia = styled.div`
  margin-bottom: 25px;
`

export const PostHeader = styled.header`
  margin-bottom: 21px;
`

export const PostTitle = styled.h2`
  color: #0e1b47;
  font-size: 24px;
  margin-top: 11px;
  margin-bottom: 21px;
  line-height: 1.4;
  ${device.small} {
    line-height: ${themeGet("lineHeights.heading")};
  }
`

export const PostMeta = styled.div``

export const PostFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 45px;
  border-top: 1px solid ${themeGet("colors.borderColor")};
  border-bottom: 1px solid ${themeGet("colors.borderColor")};
`

export const PostShare = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
  h4 {
    font-size: 16px;
    margin-right: 30px;
  }
`

export const PostTags = styled.div`
  padding-top: 5px;
`

export const SidebarWrap = styled.aside`
  ${WidgetBoxWrap} {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`
