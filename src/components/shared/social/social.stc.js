// import styled, { css } from "styled-components"
// import { SocialLinkWrap } from "./social-link/social-link.stc"
// import { space, layout, color, typography, border } from "styled-system"
// import { themeGet } from "@styled-system/theme-get"

// export const SocialWrap = styled.div`
//     position: relative;
//     z-index: 2;
//     ${SocialLinkWrap}{
//         ${props =>
//           !props.color &&
//           css`
//             ${props =>
//               props.whiteColor &&
//               css`
//                 color: #fff;
//               `}
//             ${props =>
//               !props.whiteColor &&
//               css`
//                 color: #919191;
//               `}
//           `}
//         ${space}
//         ${color}
//         ${typography}
//         ${border}
//         ${layout}
//         &:last-child{
//             padding-right: 0;
//             margin-right: 0;
//         }
//     }
//     ${props =>
//       props.layout !== 2 &&
//       css`
//         ${SocialLinkWrap} {
//           ${props =>
//             props.icon &&
//             css`
//               svg {
//                 width: ${props.icon.width || "16px"};
//                 height: ${props.icon.height || "16px"};
//               }
//             `}
//           &:hover {
//             color: ${themeGet("colors.hoverColor")};
//           }
//         }
//       `}
//     ${props =>
//       props.layout === 2 &&
//       css`
//         ${SocialLinkWrap} {
//           color: #767474;
//           border-style: solid;
//           border-color: transparent;
//           text-align: center;
//           border-radius: 50%;
//           ${props.hover &&
//             css`
//               &:hover {
//                 ${border}
//               }
//             `}
//           ${props =>
//             props.icon &&
//             css`
//               svg {
//                 width: ${props.icon.width || "16px"};
//                 height: ${props.icon.height || "16px"};
//               }
//             `}
//         }
//       `}
// `
