import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {useStaticQuery, graphql} from 'gatsby'
import Heading from '../../../components/shared/heading'
import {AboutTitleWrap} from './about-title-area.stc'

const AboutTitleArea = ({titleCSS, taglineCSS}) => {
    const AboutTitleData = useStaticQuery(graphql `
        query AboutTitleQuery {
            aboutJson(id: {eq: "about-page-header"}) {
                title
                tagline
            }
        }
    `);
    const {title, tagline} = AboutTitleData.aboutJson
    return (
        <AboutTitleWrap>
            <Container>
                <Row>
                    <Col lg={{size: 10, offset: 1}} xl={{size: 7, offset: 2}}>
                        {title && <Heading {...titleCSS}>{title}</Heading>}
                        {tagline && <Heading {...taglineCSS}>{tagline}</Heading>}
                    </Col>
                </Row>
            </Container>
        </AboutTitleWrap>
    )
}

AboutTitleArea.defaultProps = {
    titleCSS: {
        as: "h5",
        fontSize: [1],
        textTransform: "capitalize",
        mb: "17px"
    },
    taglineCSS: {
        color: "secondaryColor",
        fontSize: [4, 5],
        fontWeight: "bold",
        lineHeight: [1.4, 1.375]
    }
}
  
export default AboutTitleArea
