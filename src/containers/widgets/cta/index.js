import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import parse from 'html-react-parser'
import { FiChevronRight } from "react-icons/fi";
import Heading from '../../../components/shared/heading'
import Button from '../../../components/shared/button'
import {CtaWrap, CtaBG, CtaContent} from './cta.stc'

const CTA = ({ctaHeading, ctaBtn}) => {
    const ctadataquery = useStaticQuery(graphql `
        query WidgetCtaQuery {
            file(relativePath: {eq: "images/cta-small-image.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 480, quality: 100, srcSetBreakpoints: 6) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationWidth
                        presentationHeight
                    }
                }
            }
            cta: homeJson(id: {eq: "home-cta-content"}) {
                title
                path
            }
        }
    `)
    const bgImage = ctadataquery.file.childImageSharp.fluid
    const {cta} = ctadataquery;
    return (
        <CtaWrap>
            <CtaBG fluid={bgImage}/>
            <CtaContent>
                {cta.title && <Heading {...ctaHeading} className="cta-heading">{parse(cta.title)}</Heading>}
                {cta.path && <Button {...ctaBtn} to={cta.path} icon={<FiChevronRight/>}>Connect With me</Button>}
            </CtaContent>
        </CtaWrap>
    )
}

CTA.defaultProps = {
    ctaHeading: {
        as: 'h3',
        color: '#fff',
        fontSize: '24px',
        lineHeight: 1,
        letterSpacing: '3px',
        fontWeight: 300,
        mb: '30px'
    },
    ctaBtn: {
        colors: "light",
        fontWeight: 500,
        shape: 'rounded',
        pl: '25px',
        pr: '25px'
    }
}

export default CTA
