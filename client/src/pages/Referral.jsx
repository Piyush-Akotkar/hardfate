import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './referral.css'

function Referral() {
  return (
    <div className='referral-container bg-darker py-5'>
        <Container className='my-5'>
            <div className="text-center text-white">
                <h1 className='display-4 metorius'>Hardfate's Referral Programme</h1>
                <img src={require('../img/referral.png')} alt="" className='w-25' />

                <div className="my-5 daily-spark-700">
                    <h4>What unites people? Armies? Gold? Flags? Stories. <br />
                        There's nothing in the world more powerful than a good story. <br />
                        Nothing can stop it. No Enemy can defeat it. <br />
                        And who has a better story than you?
                    </h4>
                </div>
            </div>
        </Container>

        <Container className='my-5'>
            <h1 className='metorius my-4 text-white text-center'>Choose a Programme</h1>

            <Row>
                <Col md="6" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white referral-card'>
                        <Card.Body>
                            <p>Invite your friends to try out hardfate</p>
                            <Row>
                                <Col sm="6" className='align-self-end'>
                                    <img src={require('../img/refer1.png')} alt="" className='img-fluid refer-cartoon' />
                                    <p className='mb-0'>Refer a Friend & earn</p>
                                </Col>
                                {/* <Col sm="2">
                                    <img src={require('../img/arrow.png')} alt="" className='img-fluid' />
                                </Col> */}
                                <Col sm="6">
                                    <img src={require('../img/referral-stones.png')} alt="" className='img-fluid refer-stone' />
                                    <h4 className='mb-0'>5</h4>
                                    <p className='mb-0'>Referral Stones</p>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <p className='mb-0 mt-2'>Flip the fortune card once to unlock it</p>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col md="6" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white referral-card'>
                        <Card.Body>
                            <p>Invite your friends to try out hardfate</p>
                            <Row>
                                <Col sm="6" className='align-self-end'>
                                    <img src={require('../img/refer2.png')} alt="" className='img-fluid refer-cartoon' />
                                    <p className='mb-0'>Refer 3 Friend & earn</p>
                                </Col>
                                {/* <Col sm="2">
                                    <img src={require('../img/arrow.png')} alt="" className='img-fluid' />
                                </Col> */}
                                <Col sm="6">
                                    <img src={require('../img/referral-stones.png')} alt="" className='img-fluid refer-stone' />
                                    <h4 className='mb-0'>18</h4>
                                    <p className='mb-0'>Referral Stones</p>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <p className='mb-0 mt-2'>Flip the fortune card once to unlock it</p>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col md="6" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white referral-card'>
                        <Card.Body>
                            <p>Invite your friends to try out hardfate</p>
                            <Row>
                                <Col sm="6" className='align-self-end'>
                                    <img src={require('../img/refer3.png')} alt="" className='img-fluid refer-cartoon' />
                                    <p className='mb-0'>Refer 5 Friend & earn</p>
                                </Col>
                                {/* <Col sm="2">
                                    <img src={require('../img/arrow.png')} alt="" className='img-fluid' />
                                </Col> */}
                                <Col sm="6">
                                    <img src={require('../img/referral-stones.png')} alt="" className='img-fluid refer-stone' />
                                    <h4 className='mb-0'>35</h4>
                                    <p className='mb-0'>Referral Stones</p>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <p className='mb-0 mt-2'>Flip the fortune card once to unlock it</p>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col md="6" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white referral-card'>
                        <Card.Body>
                            <p>Invite your friends to try out hardfate</p>
                            <Row>
                                <Col sm="6" className='align-self-end'>
                                    <img src={require('../img/refer2.png')} alt="" className='img-fluid refer-cartoon' />
                                    <p className='mb-0'>Refer 10 Friend & earn</p>
                                </Col>
                                {/* <Col sm="2">
                                    <img src={require('../img/arrow.png')} alt="" className='img-fluid' />
                                </Col> */}
                                <Col sm="6">
                                    <img src={require('../img/referral-stones.png')} alt="" className='img-fluid refer-stone' />
                                    <h4 className='mb-0'>80</h4>
                                    <p className='mb-0'>Referral Stones</p>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <p className='mb-0 mt-2'>Flip the fortune card once to unlock it</p>
                        </Card.Footer>
                    </Card>
                </Col>
                
            </Row>
        </Container>

        <hr />
        <div className="text-center text-white metorius">
            <h1>Hardfate's referral guidelines for rookies</h1>
        </div>
    </div>
  )
}

export default Referral