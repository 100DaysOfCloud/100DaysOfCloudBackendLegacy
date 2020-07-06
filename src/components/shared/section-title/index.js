import React from 'react'
import PropTypes from 'prop-types'
import {SectionTitleWrap} from './section-title.stc'

const SectionTitle = ({title, subtitle, ...props}) => {
    return (
        <SectionTitleWrap {...props}>
            {title && <h3 dangerouslySetInnerHTML={{ __html: title}} />}
            {subtitle && <h6>{subtitle}</h6>}
        </SectionTitleWrap>
    )
}

SectionTitle.propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    mb: PropTypes.string
}

SectionTitle.defaultProps = {
    align: 'left'
}
export default SectionTitle;