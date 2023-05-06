import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className="home-buttons my-5">
            <div className='d-flex justify-content-center'>
                <Link to="./game">
                    <button className='btn btn-home px-4 btn-fortune'>Fortune Game</button>
                </Link>
                <Link to="./contest">
                    <button className='btn btn-home px-4 btn-contest'>Contest</button>
                </Link>
                <Link to="./giveaway">
                    <button className='btn btn-home px-4 btn-giveaway'>Giveaway</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer