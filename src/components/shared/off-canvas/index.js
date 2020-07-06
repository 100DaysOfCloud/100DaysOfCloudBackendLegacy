import React from 'react'
import { OffCanvasHeader } from './off-canvas-header'
import { OffCanvasBody } from './off-canvas-body'
import { OffCanvaseWrap, OffCanvasInner } from './off-canvas.style'

const OffCanvas = ({ children, onClick, isOpen, ...props }) => {
    return (
        <OffCanvaseWrap isOpen={isOpen} onClick={onClick}>
            <OffCanvasInner isOpen={isOpen} {...props} onClick={(e) => e.stopPropagation()}>
                {children}
            </OffCanvasInner>
        </OffCanvaseWrap>
    )
}

export { OffCanvasHeader, OffCanvasBody };

OffCanvas.defaultProps = {
    backgroundColor: 'themeColor',
    align: 'right',
    width: ['300px', '350px', '400px']
}

export default OffCanvas
