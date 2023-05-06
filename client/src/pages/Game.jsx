import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './game.css';

function Game() {
    return (
        <div className='game-container'>
            <div className="py-5 bg-teal">
                <Container className="my-5">
                    <div className="text-center">
                        <h2 className='text-white metorius'>Alan Moore's</h2>
                        <h1 className="display-4 metorius text-white">
                            Batman: The killing joke <small>deluxe Edition</small>
                        </h1>
                        <div>
                            <h4 className='daily-spark-700 text-white mt-5'>Fortune game of the day ends in</h4>
                            <h1 className='daily-spark-700 text-white'>16H : 36M : 55S</h1>
                        </div>
                    </div>

                    <div className="text-center my-5 game-book-box">
                        <div className="game-book-text">
                            <p className='h5 tild breaksong-breaksong text-light'>Dare to challenge your <br />fate and this hardback <br />worth rupee 2499 could <br />be yours.</p>
                        </div>
                        <img src={require('../img/arrow.png')} alt="" className='img-fluid arrow arrow-flip' srcset="" />
                        <img src={require('../img/game1.png')} alt="" className='game-book-img' srcset="" />
                    </div>

                    <div className="text-center my-5 text-light">
                        <h1 className='display-4 metorius'>And the winner is</h1>
                        <h4 className='daily-spark-700'>The person who win Batman: the killing joke will be shown here</h4>
                    </div>

                    <div className="text-center text-white">
                        <Link to="./challenge">
                            <img src={require('../img/challenge.png')} alt="" className='game-challenge-img' />
                        </Link>
                        <h4 className='daily-spark-700 mt-3'>Challenge</h4>
                    </div>
                </Container>
            </div>

            <div className="py-5 bg-pink">
                <Container className="my-5">
                    <div className="text-center">
                        <h2 className='text-light metorius'>Haruki Murakami's</h2>
                        <h1 className="display-4 metorius text-white">
                            kafka on the shore
                        </h1>
                        <div>
                            <h4 className='daily-spark-700 text-white mt-5'>Fortune game of the fortnight ends in</h4>
                            <h1 className='daily-spark-700 text-light'>165H : 36M : 55S</h1>
                        </div>
                    </div>

                    <div className="text-center my-5 game-book-box">
                        <div className="game-book-text">
                            <p className='h5 tild breaksong-breaksong text-light'>Dare to challenge your <br />fate and this paperback <br />worth rupee 599 could <br />be yours.</p>
                        </div>
                        <img src={require('../img/arrow.png')} alt="" className='img-fluid arrow arrow-flip' srcset="" />
                        
                        <img src={require('../img/game1.png')} alt="" className='game-book-img' srcset="" />
                        
                        <div className="game-book-text-right">
                            <p className='h5 tild-right breaksong-breaksong text-light'>The first person to flip the <br /> fortune card will win a <br /> Kafka on the shore, <br />gauranteed.</p>
                        </div>
                        <img src={require('../img/arrow.png')} alt="" className='img-fluid arrow-right arrow-flip-right' srcset="" />
                    </div>

                    <div className="text-center my-5 text-light">
                        <h1 className='display-5 metorius'>23 Novels out of 100 have been snatched</h1>
                        <h4 className='daily-spark-700'>You better rush to snatch what is yours, because the rest aren't waiting.</h4>
                    </div>

                    <div className="text-center text-white d-flex justify-content-between">
                        <div>
                            <Link to="./winners">
                                <img src={require('../img/winner.png')} alt="" className='game-challenge-img' />
                            </Link>
                            <h4 className='daily-spark-700 mt-3'>Winners</h4>
                        </div>
                        <div>
                            <Link to="./challenge">
                                <img src={require('../img/challenge.png')} alt="" className='game-challenge-img' />
                            </Link>
                            <h4 className='daily-spark-700 mt-3'>Challenge</h4>
                        </div>
                    </div>
                </Container>
            </div>


            <div className="py-5 bg-blue">
                <Container className="my-5">
                    <div className="text-center">
                        <h2 className='text-white metorius'>Gillian Flynn's</h2>
                        <h1 className="display-4 metorius text-white">
                            Gone girl
                        </h1>
                        <div>
                            <h4 className='daily-spark-700 text-white mt-5'>Fortune game of the fortnight ends in</h4>
                            <h1 className='daily-spark-700 text-white'>165H : 36M : 55S</h1>
                        </div>
                    </div>

                    <div className="text-center my-5 game-book-box">
                        <div className="game-book-text">
                            <p className='h5 tild breaksong-breaksong text-light'>
                                Dare to challenge your luck &<br />
                                this paperback worth rupee 599 <br />
                                could be yours, or a BoxSet <br />
                                worth rupee 4999 if you are <br />
                                super lucky.
                            </p>
                        </div>
                        <img src={require('../img/game1.png')} alt="" className='game-book-img' srcset="" />
                        <img src={require('../img/arrow.png')} alt="" className='img-fluid arrow arrow-flip' srcset="" />
                    </div>

                    <div className='text-center my-5'>
                        <h1 className='display-1 text-white daily-spark-700'>+</h1>
                    </div>

                    <div className="text-center">
                        <h2 className='text-white metorius'>J.K. Rowling's</h2>
                        <h1 className="display-4 metorius text-white">
                            Harry Potter Boxset
                        </h1>
                    </div>

                    <div className="text-center my-5 game-book-box">
                        <img src={require('../img/game2.png')} alt="" className='game-book-img' srcset="" />
                        <div className="game-book-text-right">
                            <p className='h5 tild-right breaksong-breaksong text-light'>The first person to flip the <br /> fortune card will win a <br /> Harry Potter BoxSet, <br />gauranteed.</p>
                        </div>
                        <img src={require('../img/arrow.png')} alt="" className='img-fluid arrow-right arrow-flip-right' srcset="" />
                    </div>

                    <div className="text-center my-5 text-light">
                        <h1 className='display-4 metorius'>Boxset (3/5)</h1>
                        <h1 className='display-5 metorius'>23 Novels out of 100 have been snatched</h1>
                        <h4 className='daily-spark-700'>You better rush to snatch what is yours, because the rest aren't waiting.</h4>
                    </div>

                    <div className="text-center text-white d-flex justify-content-between">
                        <div>
                            <Link to="./winners">
                                <img src={require('../img/winner.png')} alt="" className='game-challenge-img' />
                            </Link>
                            <h4 className='daily-spark-700 mt-3'>Winners</h4>
                        </div>
                        <div>
                            <Link to="./challenge">
                                <img src={require('../img/challenge.png')} alt="" className='game-challenge-img' />
                            </Link>
                            <h4 className='daily-spark-700 mt-3'>Challenge</h4>
                        </div>
                    </div>
                </Container>
            </div>


            <div className="py-5 bg-maroon">
                <Container className="my-5">
                    <div className="text-center">
                        <h2 className='text-white metorius'>Gabrial garcia marquez's</h2>
                        <h1 className="display-4 metorius text-white">
                            One hundred years of solitude
                        </h1>
                        <div>
                            <h4 className='daily-spark-700 text-white mt-5'>Fortune game of the fortnight ends in</h4>
                            <h1 className='daily-spark-700 text-white'>165H : 36M : 55S</h1>
                        </div>
                    </div>

                    <div className="text-center my-5 game-book-box">
                        <img src={require('../img/arrow.png')} alt="" className='img-fluid arrow-top arrow-flip' srcset="" />
                        <div className="game-book-text-middle">
                            <p className='h5 tild breaksong-breaksong text-light'>
                                Dare to challenge your luck &<br />
                                this hardback worth rupee 1199 <br />
                                could be yours plus a paperback <br />
                                worth rupee 499.
                            </p>
                        </div>
                        <img src={require('../img/game1.png')} alt="" className='game-book-img' srcset="" />
                        <img src={require('../img/arrow.png')} alt="" className='img-fluid arrow-right arrow-flip-right' srcset="" />
                    </div>

                    <div className='text-center my-5'>
                        <h1 className='display-1 text-white daily-spark-700'>+</h1>
                    </div>

                    <div className="text-center">
                        <h2 className='text-white metorius'>Jay Asher's</h2>
                        <h1 className="display-4 metorius text-white">
                            Thirteen reasons why
                        </h1>
                    </div>

                    <div className="text-center my-5 game-book-box">
                        <img src={require('../img/arrow.png')} alt="" className='img-fluid arrow arrow-flip' srcset="" />
                        <img src={require('../img/game2.png')} alt="" className='game-book-img' srcset="" />
                        <div className="game-book-text-right-middle">
                            <p className='h5 tild-right breaksong-breaksong text-light'>The first person to flip the <br /> fortune card will win a <br /> Harry Potter BoxSet, <br />gauranteed.</p>
                        </div>
                        <img src={require('../img/arrow.png')} alt="" className='img-fluid arrow-right arrow-flip-right' srcset="" />
                    </div>

                    <div className="text-center my-5 text-light">
                        <p className='daily-spark-700'>Offer: The person wins one hundred years of solitude
                        will also win thirteen reasons why</p>
                        <h1 className='display-5 metorius'>23 Combo of Novels out of 100 have been snatched</h1>
                        <h4 className='daily-spark-700'>You better rush to snatch what is yours, because the rest aren't waiting.</h4>
                    </div>

                    <div className="text-center text-white d-flex justify-content-between">
                        <div>
                            <Link to="./winners">
                                <img src={require('../img/winner.png')} alt="" className='game-challenge-img' />
                            </Link>
                            <h4 className='daily-spark-700 mt-3'>Winners</h4>
                        </div>
                        <div>
                            <Link to="./challenge">
                                <img src={require('../img/challenge.png')} alt="" className='game-challenge-img' />
                            </Link>
                            <h4 className='daily-spark-700 mt-3'>Challenge</h4>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Game