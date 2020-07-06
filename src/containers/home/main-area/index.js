import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import RecentPostArea from '../recet-post-area'
import Siderbar from '../../global/sidebar'
import {MainWrapper} from './main-area.stc'

const MainArea = () => {
    return (
        <MainWrapper>
            <Container>
                <Row>
                    <Col lg={8}>
                        <RecentPostArea/>
                    </Col>
                    <Col lg={4}>
                        <Siderbar/>
                    </Col>
                </Row>
            </Container>
        </MainWrapper>
    )
}

export default MainArea
