import { keyframes } from 'styled-components';
 
export const fadeInDown = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, -100%, 0)
    }
    to {
        opacity: 1;
        transform: translateZ(0)
    }
`;

export const Loading = keyframes`
    0% {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;