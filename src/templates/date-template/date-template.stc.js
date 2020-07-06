import styled from "styled-components";
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
        padding-bottom: 100px;
    }
`;

export const PageHeader = styled.div `
    margin-bottom: 36px;
`;

export const BlogListWrap = styled.div ``;

export const SidebarWrap = styled.aside `
    ${WidgetBoxWrap}{
        &:not(:last-child){
            margin-bottom: 30px;
        }
    }
`;