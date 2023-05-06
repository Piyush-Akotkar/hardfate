import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './fatestone.css'

function Fatestone() {
  return (
    <div className='fate-box bg-darker py-5'>
        <Container className='my-5'>
            <div className="text-center metorius text-white">
                <h1 className='display-4'>Fate Stones</h1>
                {/* <img src={require('../img/store.png')} alt="" className='w-25' /> */}

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
            <h1 className='metorius my-4 text-white'>Offer Purchase</h1>

            <Row>
                <Col md="3" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white fate-store-card'>
                        <Card.Body>
                            <p>23H:11M:02S</p>
                            <img src={require('../img/stone.png')} alt="" className='img-fluid w-50' />
                            <h4>12+1</h4>
                            <h5 className='mt-4 mb-0'>Price: 30Rs</h5>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <h3 className='mb-0 mt-2'>Purchase</h3>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md="3" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white fate-store-card'>
                        <Card.Body>
                            <p>23H:11M:02S</p>
                            <img src={require('../img/stone.png')} alt="" className='img-fluid w-50' />
                            <h4>20+2</h4>
                            <h5 className='mt-4 mb-0'>Price: 50Rs</h5>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <h3 className='mb-0 mt-2'>Purchase</h3>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md="3" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white fate-store-card'>
                        <Card.Body>
                            <p>23H:11M:02S</p>
                            <img src={require('../img/stone.png')} alt="" className='img-fluid w-50' />
                            <h4>30+3</h4>
                            <h5 className='mt-4 mb-0'>Price: 75Rs</h5>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <h3 className='mb-0 mt-2'>Purchase</h3>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>


        <Container className='my-5'>
            <h1 className='metorius my-4 text-white'>Regular Purchase</h1>

            <Row>
                <Col md="3" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white fate-store-card'>
                        <Card.Body>
                            <img src={require('../img/stone.png')} alt="" className='img-fluid w-50 mt-4' />
                            <h4>12</h4>
                            <h5 className='mt-4 mb-0'>Price: 30Rs</h5>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <h3 className='mb-0 mt-2'>Purchase</h3>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md="3" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white fate-store-card'>
                        <Card.Body>
                            <img src={require('../img/stone.png')} alt="" className='img-fluid w-50 mt-4' />
                            <h4>20</h4>
                            <h5 className='mt-4 mb-0'>Price: 50Rs</h5>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <h3 className='mb-0 mt-2'>Purchase</h3>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md="3" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white fate-store-card'>
                        <Card.Body>
                            <img src={require('../img/stone.png')} alt="" className='img-fluid w-50 mt-4' />
                            <h4>30</h4>
                            <h5 className='mt-4 mb-0'>Price: 75Rs</h5>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <h3 className='mb-0 mt-2'>Purchase</h3>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md="3" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white fate-store-card'>
                        <Card.Body>
                            <img src={require('../img/stone.png')} alt="" className='img-fluid w-50 mt-4' />
                            <h4>40+4</h4>
                            <h5 className='mt-4 mb-0'>Price: 100Rs</h5>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <h3 className='mb-0 mt-2'>Purchase</h3>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col md="3" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white fate-store-card'>
                        <Card.Body>
                            <img src={require('../img/stone.png')} alt="" className='img-fluid w-50 mt-4' />
                            <h4>60+6</h4>
                            <h5 className='mt-4 mb-0'>Price: 150Rs</h5>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <h3 className='mb-0 mt-2'>Purchase</h3>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col md="3" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white fate-store-card'>
                        <Card.Body>
                            <img src={require('../img/stone.png')} alt="" className='img-fluid w-50 mt-4' />
                            <h4>100+12</h4>
                            <h5 className='mt-4 mb-0'>Price: 250Rs</h5>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <h3 className='mb-0 mt-2'>Purchase</h3>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col md="3" className='mb-4'>
                    <Card className='text-center daily-spark-700 text-white fate-store-card'>
                        <Card.Body>
                            <img src={require('../img/stone.png')} alt="" className='img-fluid w-50 mt-4' />
                            <h4>200+30</h4>
                            <h5 className='mt-4 mb-0'>Price: 500Rs</h5>
                        </Card.Body>
                        <Card.Footer className='border-light'>
                            <h3 className='mb-0 mt-2'>Purchase</h3>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>

        <hr />

        <div className="text-center metorius mt-4 text-white">
            <h1>Purchase helpline for the rookies</h1>
        </div>
    </div>
  )
}

export default Fatestone