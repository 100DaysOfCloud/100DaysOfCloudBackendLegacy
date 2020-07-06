import React from 'react'
import Img from 'gatsby-image'
import WidgetBox, { WidgetTitle } from '../../../components/shared/widget-box'
import Social from '../../../components/socials/layout-two'
import { AuthorWrap, AuthorImg, AuthorName, AuthorTagline } from './author.stc'

const Author = ({ content, widgetStyle, socialCSS }) => {
    const author = content || {};
    const { name, image, tagline, social } = author;

    return (
        <WidgetBox {...widgetStyle}>
            <WidgetTitle>About Me</WidgetTitle>
            <AuthorWrap>
                {image && (
                    <AuthorImg>
                        <Img fixed={image.childImageSharp.fixed} alt={name || 'Author Name'} />
                    </AuthorImg>
                )}
                {name && <AuthorName>{name}</AuthorName>}
                {tagline && <AuthorTagline>{tagline}</AuthorTagline>}
                {social && <Social {...socialCSS} social={social} />}
            </AuthorWrap>
        </WidgetBox>
    )
}

Author.defaultProps = {
    widgetStyle: {
        textAlign: 'center'
    },
    socialCSS: {
        color: 'shark',
        borderColor: 'shark'
    }
}

export default Author

