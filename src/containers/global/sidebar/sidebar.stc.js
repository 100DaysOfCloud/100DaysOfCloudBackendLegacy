import styled from "styled-components";
import {WidgetBoxWrap} from '../../../components/shared/widget-box/widget-box.stc'

export const SidebarWrap = styled.aside `
    ${WidgetBoxWrap}{
        &:not(:last-child){
            margin-bottom: 30px;
        }
    }
`; 