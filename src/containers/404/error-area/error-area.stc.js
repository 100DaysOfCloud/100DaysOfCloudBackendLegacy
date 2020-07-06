import styled from "styled-components";
import {device} from '../../../theme'

export const ErrorWrap = styled.section `
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;
    ${device.xsmall}{
        padding-top: 120px;
        padding-bottom: 120px;
    }
    ${device.medium}{
        padding-top: 150px;
        padding-bottom: 150px;
    }
    ${device.large}{
        padding-top: 180px;
        padding-bottom: 215px;
    }
    &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 300px;
        left: 0px;
        bottom: 0px;
        background-image: -moz-linear-gradient( 90deg, rgb(255,237,237) 0%, rgba(255,245,245,0.5) 43%, rgba(255,255,255,0) 100%);
        background-image: -webkit-linear-gradient( 90deg, rgb(255,237,237) 0%, rgba(255,245,245,0.5) 43%, rgba(255,255,255,0) 100%);
        background-image: -ms-linear-gradient( 90deg, rgb(255,237,237) 0%, rgba(255,245,245,0.5) 43%, rgba(255,255,255,0) 100%);
        ${device.medium}{
            height: 500px;
        }
        ${device.large}{
            height: 700px;
        }
        ${device.xlarge}{
            height: 800px;
        }
    }
`;
  

export const ErorrContent = styled.div `
    text-align: center;
`;

export const ErrorTopText = styled.div `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    .error-404{
        font-size: 150px;
        color: rgba( 255, 255, 255, 1 );
        font-weight: bold;
        line-height: 0.066;
        /* text-shadow: 14.142px 14.142px 40px rgba( 0,0,0,.2 ); */
        text-shadow: 13.142px 12.142px 20px rgba( 0,0,0,.05 );
        ${device.xxsmall}{
            font-size: 220px;
        }
        ${device.xsmall}{
            font-size: 245px;
        }
        ${device.small}{
            font-size: 345px;
        }
        ${device.medium}{
            font-size: 450px;
        }
        ${device.large}{
            font-size: 500px;
        }
    }
`;

export const ErrorBottomText = styled.div `
    position: relative;
    z-index: 2;
    img{
        width: 100px;
        height: 100px;
        ${device.small}{
            width: 135px;
            height: 135px;
        }
    }
`;