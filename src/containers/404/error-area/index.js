import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Heading from '../../../components/shared/heading'
import Button from '../../../components/shared/button'
import {ErrorWrap, ErorrContent, ErrorTopText, ErrorBottomText} from './error-area.stc'

const ErrorArea = ({headingCSS, btnCSS}) => {
    return (
        <ErrorWrap>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <ErorrContent>
                            <ErrorTopText>
                                <Heading as="h1" className="error-404">404</Heading>
                            </ErrorTopText>
                            <ErrorBottomText>
                                <Heading {...headingCSS}>Sorry, This Page Was Lost.</Heading>
                                <Button {...btnCSS}>Back To Homepage</Button>
                            </ErrorBottomText>
                        </ErorrContent>
                    </Col>
                </Row>
            </Container>
        </ErrorWrap>
    )
}

ErrorArea.defaultProps = {
    headingCSS: {
        fontSize: ['24px', '28px', '38px', '42px'],
        color: 'secondaryColor',
        mt: '23px',
        mb: '29px'
    },
    btnCSS: {
        btnsize: 'large',
        varient: 'contained',
        shape: 'rounded',
        iconname: 'chevron-right',
        ml: 'auto',
        mr: 'auto'
    }
}

export default ErrorArea
