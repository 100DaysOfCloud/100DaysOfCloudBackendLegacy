import React from 'react'
import {OffCanvasHeaderWrap, OffCanvasHeaderLeft, OffCanvasHeaderRight} from './off-canvas-header.style'
import CloseButton from '../../close-button'

export const OffCanvasHeader = ({children, onClick}) => {
    return (
        <OffCanvasHeaderWrap>
            <OffCanvasHeaderLeft>{children}</OffCanvasHeaderLeft>
            <OffCanvasHeaderRight>
                <CloseButton onClick={onClick}/>
            </OffCanvasHeaderRight>
        </OffCanvasHeaderWrap>
    )
}

