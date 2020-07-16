import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import RecentPostArea from '../recet-post-area'
import Siderbar from '../../global/sidebar'
import {MainWrapper} from './main-area.stc'

const MainArea = () => {
    return (
        <MainWrapper>
            <Container>
              <div class='registration'>
                🚧 We have yet to code in registration. So you can skip this step for now on the <a href="https://github.com/100DaysOfCloud/100DaysOfCloud">#100DaysOfCloud</a> instructions.
              </div>
              <div class='wip'>
                #100DaysOfCloud is an <b>open source challenge</b> enabling newcomers to get <b>hands-on experience</b> in Cloud technologies. We do this by building and fostering a strong community made up by people of all levels. This holds space for journeyers to get both technical help and personal support, as well as projects to complete in order to enhance their real-world skills.
              </div>
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
