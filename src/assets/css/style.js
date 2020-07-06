import { createGlobalStyle } from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { device } from "../../theme"

export const GlobalCSS = createGlobalStyle`
    /**
    * Reset Styels
    */

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    nav,
    section,
    summary {
        display: block;
    }
    audio,
    canvas,
    video {
        display: inline-block;
    }
    audio:not([controls]) {
        display: none;
        height: 0;
    }
    [hidden] {
        display: none;
    }
    html,
    button,
    input,
    select,
    textarea {
        font-family: "Source Sans Pro", Helvetica, sans-serif;
    }
    a:focus {
        outline: thin dotted;
    }
    a:active,
    a:hover {
        outline: 0;
    }
    address {
        font-style: italic;
        margin: 0 0 24px;
    }
    abbr[title] {
        border-bottom: 1px dotted;
    }
    b,
    strong {
        font-weight: bold;
    }
    dfn {
        font-style: italic;
    }
    mark {
        background: #ff0;
        color: #000;
    }
    p {
        margin: 0 0 24px;
    }
    code,
    kbd,
    pre,
    samp {
        font-family: monospace, serif;
        font-size: 14px;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }
    pre {
        background: #f5f5f5;
        color: #666;
        font-family: monospace;
        font-size: 14px;
        margin: 20px 0;
        overflow: auto;
        padding: 20px;
        white-space: pre;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    blockquote,
    q {
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }
    blockquote {
        font-size: 18px;
        font-style: italic;
        font-weight: 300;
        margin: 24px 40px;
    }
    blockquote blockquote {
        margin-right: 0;
    }
    blockquote cite,
    blockquote small {
        font-size: 14px;
        font-weight: normal;
        text-transform: uppercase;
    }
    blockquote em,
    blockquote i {
        font-style: normal;
        font-weight: 300;
    }
    blockquote strong,
    blockquote b {
        font-weight: 400;
    }
    small {
        font-size: smaller;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -0.5em;
    }
    sub {
        bottom: -0.25em;
    }
    dl {
        margin: 0 20px;
    }
    dt {
        font-weight: bold;
    }
    dd {
        margin: 0 0 20px;
    }
    ul {
        list-style-type: square;
    }
    nav ul,
    nav ol {
        list-style: none;
        list-style-image: none;
    }
    li>ul,
    li>ol {
        margin: 0;
    }
    img {
        -ms-interpolation-mode: bicubic;
        border: 0;
        vertical-align: middle;
    }
    svg:not(:root) {
        overflow: hidden;
    }
    figure {
        margin: 0;
    }
    form {
        margin: 0;
    }
    fieldset {
        border: 1px solid #c0c0c0;
        margin: 0 2px;
        min-width: inherit;
        padding: 0.35em 0.625em 0.75em;
    }
    legend {
        border: 0;
        padding: 0;
        white-space: normal;
    }
    button,
    input,
    select,
    textarea {
        font-size: 100%;
        margin: 0;
        max-width: 100%;
        vertical-align: baseline;
    }

    button,
    input {
        line-height: normal;
    }

    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        cursor: pointer;
    }

    button[disabled],
    input[disabled] {
        cursor: default;
    }

    input[type="checkbox"],
    input[type="radio"] {
        padding: 0;
    }

    input[type="search"] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
        appearance: textfield;
        padding-right: 2px;
        /* Don't cut off the webkit search cancel button */
        width: 270px;
    }

    input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        appearance: none;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    textarea {
        overflow: auto;
        vertical-align: top;
    }
    table {
        border-bottom: 1px solid #ededed;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 14px;
        line-height: 2;
        margin: 0 0 20px;
        width: 100%;
    }
    caption,
    th,
    td {
        font-weight: normal;
        text-align: left;
    }
    caption {
        font-size: 16px;
        margin: 20px 0;
    }
    th {
        font-weight: bold;
        text-transform: uppercase;
    }
    td {
        border-top: 1px solid #ededed;
        padding: 6px 10px 6px 0;
    }
    del {
        color: #333;
    }
    ins {
        background: #fff9c0;
        text-decoration: none;
    }
    hr {
        background-size: 4px 4px;
        border: 0;
        height: 1px;
        margin: 0 0 24px;
    }

    /**
    * Typography
    */

    * {
        box-sizing: border-box;
    }
    img {
        max-width: 100%;
    }
    html {
        overflow: hidden;
        overflow-y: auto;
    }
    body {
        overflow: hidden;
        font-size: ${themeGet("fontSize.text")};
        line-height: ${themeGet("lineHieghts.text")};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${themeGet("fonts.text")};
        color: ${themeGet("colors.textColor")};
        font-weight: ${themeGet("fontWeights[1]")};
        margin: 0; 
    }
    a {
        color: #0038a8;
        transition: ${themeGet("transition", "all .3s ease-in-out")};
    }
    code {
        color: #006A85;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6,
    address,
    p,
    pre,
    blockquote,
    dl,
    dd,
    menu,
    ol,
    ul,
    table,
    caption,
    hr {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        font-family: ${themeGet("fonts.heading")};
        line-height: ${themeGet("lineHieghts.heading")};
        color: ${themeGet("colors.headingColor")};
    }
    h1,
    .h1 {
        font-size: ${themeGet("fontSize.h1.0")};
        ${device.small}{
            font-size: ${themeGet("fontSize.h1.1")};
        }
        ${device.medium}{
            font-size: ${themeGet("fontSize.h1.2")};
        }
    }
    h2,
    .h2 {
        font-size: ${themeGet("fontSize.h2.0")};
        ${device.small}{
            font-size: ${themeGet("fontSize.h2.1")};
        }
        ${device.medium}{
            font-size: ${themeGet("fontSize.h2.2")};
        }
    }
    h3,
    .h3 {
        font-size: ${themeGet("fontSize.h3.0")};
        ${device.small}{
            font-size: ${themeGet("fontSize.h3.1")};
        }
        ${device.medium}{
            font-size: ${themeGet("fontSize.h3.2")};
        }
    }
    h4,
    .h4 {
        font-size: ${themeGet("fontSize.h4.0")};
        ${device.small}{
            font-size: ${themeGet("fontSize.h4.1")};
        }
        ${device.medium}{
            font-size: ${themeGet("fontSize.h4.2")};
        }
    }
    h5,
    .h5 {
        font-size: ${themeGet("fontSize.h5.0")};
        ${device.small}{
            font-size: ${themeGet("fontSize.h5.1")};
        }
    }
    h6,
    .h6 {
        font-size: ${themeGet("fontSize.h6.0")};
        ${device.small}{
            font-size: ${themeGet("fontSize.h6.1")};
        }
    }
    h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, .h6, .h6 {
        font-weight: ${themeGet("fontWeights.medium")};
    }
    a:hover,
    a:focus,
    a:active {
        text-decoration: none;
        outline: none;
        color: ${themeGet("colors.hoverColor")};
    }
    input,
    button,
    select,
    textarea {
        background: transparent;
        border: 1px solid ${themeGet("colors.borderColor")};
        transition: ${themeGet("transition")};
        color: ${themeGet("colors.textColor")};
        &:focus,
        &:active {
            outline: none;
            border-color: ${themeGet("colors.themeColor")};
        }
    }
    input,
    select,
    textarea {
        width: 100%;
        font-size: 14px;
    }
    input,
    select {
        height: 40px;
        padding: 0 15px;
    }
    .wrapper{
        position: relative;
    }
    .container {
        ${device.xlarge}{
            max-width: 1260px;
        }
    }
    .mb{
        &-15{
            margin-bottom: 15px !important;
        }
        &-20{
            margin-bottom: 20px !important;
        }
        &-30{
            margin-bottom: 30px !important;
        }
        &-40{
            margin-bottom: 40px !important;
        }
        &-50{
            margin-bottom: 50px !important;
        }
    }
`
