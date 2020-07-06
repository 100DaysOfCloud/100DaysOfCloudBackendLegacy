import styled from "styled-components";
import {themeGet} from '@styled-system/theme-get'
import {WidgetBoxWrap} from '../../components/shared/widget-box/widget-box.stc'
import {device} from '../../theme'

export const SectionWrap = styled.section `
    padding-top: 55px;
    padding-bottom: 60px;
    ${device.small}{
        padding-top: 75px;
        padding-bottom: 80px;
    }
    ${device.medium}{
        padding-top: 95px;
        padding-bottom: 69px;
    }
`;

export const PageHeader = styled.div `
    padding-bottom: 30px;
    margin-bottom: 50px;
    border-bottom: 1px solid ${themeGet("colors.borderColor")};
`;

export const BlogListWrap = styled.div ``;

export const SidebarWrap = styled.aside `
    ${WidgetBoxWrap}{
        &:not(:last-child){
            margin-bottom: 30px;
        }
    }
`;