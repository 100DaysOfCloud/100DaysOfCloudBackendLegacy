const theme = {
  colors: {
    themeColor: "#ffc46d",
    textColor: "#090606",
    headingColor: "#090606",
    borderColor: "#e3e7e8b3",
    secondaryColor: "#0e1b47",
    hoverColor: "#FF9900",
    hoverColorTwo: "#ffac31",
    shark: "#929496",
    silver: "#767474",
    nevada: "#63696a",
    white: "#ffffff",
    black: "#000000",
    primary: "#004395",
    secondary: "#d2a98e",
    success: "#28a745",
    info: "#17a2b8",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#f8f9fa",
  },
  lineHieghts: {
    text: 1.714,
    heading: 1.857,
  },
  fonts: {
    text: "Montserrat",
    heading: "Montserrat",
    marck: "Marck Script",
    segoe: `Segoe Script Regular`,
  },
  fontSizes: ["10px", "12px", "14px", "16px", "20px", "24px", "32px"],
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  space: [0, 4, 8, 16, 32, 64],
  breakpoints: ["481px", "576px", "768px", "992px", "1200px", "1400px"],
  transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
}

theme.fontSize = {
  text: theme.fontSizes[2],
  h1: ["26px", "30px", "34px"],
  h2: ["24px", "28px", "32px"],
  h3: ["22px", "26px", "30px"],
  h4: ["20px", "22px", "24px"],
  h5: ["16px", "18px"],
  h6: ["14px", "16px"],
}

export const device = {
  xxsmall: `@media screen and (min-width: ${theme.breakpoints[0]})`,
  xsmall: `@media screen and (min-width: ${theme.breakpoints[1]})`,
  small: `@media screen and (min-width: ${theme.breakpoints[2]})`,
  medium: `@media screen and (min-width: ${theme.breakpoints[3]})`,
  large: `@media screen and (min-width: ${theme.breakpoints[4]})`,
  xlarge: `@media screen and (min-width: ${theme.breakpoints[5]})`,
  xxlarge: `@media screen and (min-width: ${theme.breakpoints[6]})`,
}

export default theme
