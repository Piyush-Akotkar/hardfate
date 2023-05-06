import React from 'react'
import { Container, Table } from 'react-bootstrap'
import './winner.css'

function Winners() {
  return (
    <div className='winner-container'>
        <div className="bg-pink py-5">
            <Container className='my-5'>
                <div className="text-center my-5">
                    <h1 className='metorius display-3 text-white'>Fortune100</h1>
                </div>
                <Table className='text-light' borderless>
                    <thead className='metorius'>
                        <tr>
                            <th>Sr No</th>
                            <th>Names</th>
                            <th>Rewards</th>
                            <th>Time</th>
                        </tr>    
                    </thead>
                    <tbody className='daily-spark-700'>
                        <tr>
                            <td className='align-middle'>01</td>
                            <td className='align-middle'>
                                <div className='d-flex'>
                                    <img src={require('../img/profile1.jpg')} alt="Profile pic" className='winner-img' />
                                    <p className='ms-3 align-self-center mb-0'>Rupchand</p>
                                </div>
                            </td>
                            <td className='align-middle'>
                                Kafta and the shore
                            </td>
                            <td className='align-middle'>
                                Just Now
                            </td>
                        </tr>
                        <tr>
                            <td className='align-middle'>01</td>
                            <td className='align-middle'>
                                <div className='d-flex'>
                                    <img src={require('../img/profile2.jpg')} alt="Profile pic" className='winner-img' />
                                    <p className='ms-3 align-self-center mb-0'>Durvasa</p>
                                </div>
                            </td>
                            <td className='align-middle'>
                                Kafta and the shore
                            </td>
                            <td className='align-middle'>
                                Just Now
                            </td>
                        </tr>
                        <tr>
                            <td className='align-middle'>01</td>
                            <td className='align-middle'>
                                <div className='d-flex'>
                                    <img src={require('../img/profile2.jpg')} alt="Profile pic" className='winner-img' />
                                    <p className='ms-3 align-self-center mb-0'>Chitu</p>
                                </div>
                            </td>
                            <td className='align-middle'>
                                Kafta and the shore
                            </td>
                            <td className='align-middle'>
                                Just Now
                            </td>
                        </tr>
                        <tr>
                            <td className='align-middle'>01</td>
                            <td className='align-middle'>
                                <div className='d-flex'>
                                    <img src={require('../img/profile1.jpg')} alt="Profile pic" className='winner-img' />
                                    <p className='ms-3 align-self-center mb-0'>Rupchand</p>
                                </div>
                            </td>
                            <td className='align-middle'>
                                Kafta and the shore
                            </td>
                            <td className='align-middle'>
                                Just Now
                            </td>
                        </tr>
                        <tr>
                            <td className='align-middle'>01</td>
                            <td className='align-middle'>
                                <div className='d-flex'>
                                    <img src={require('../img/profile2.jpg')} alt="Profile pic" className='winner-img' />
                                    <p className='ms-3 align-self-center mb-0'>Durvasa</p>
                                </div>
                            </td>
                            <td className='align-middle'>
                                Kafta and the shore
                            </td>
                            <td className='align-middle'>
                                Just Now
                            </td>
                        </tr>
                        <tr>
                            <td className='align-middle'>01</td>
                            <td className='align-middle'>
                                <div className='d-flex'>
                                    <img src={require('../img/profile2.jpg')} alt="Profile pic" className='winner-img' />
                                    <p className='ms-3 align-self-center mb-0'>Chitu</p>
                                </div>
                            </td>
                            <td className='align-middle'>
                                Kafta and the shore
                            </td>
                            <td className='align-middle'>
                                Just Now
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    </div>
  )
}

export default Winners