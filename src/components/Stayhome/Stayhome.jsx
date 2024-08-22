import React from 'react'
import "./Stayhome.scss"
import boy from '../../assets/boy.png'
import { BsSend } from "react-icons/bs";


const Stayhome = () => {
    return (
        <div className='Stay_home container'>
            <div className="stayhome_body">
                <div className='tex'>
                    <div className='header'>
                        <h2>Stay home & get your daily needs from our shop</h2>
                        <p>Start Your Daily Shopping with <span>Nest Mart</span></p>
                    </div>
                    <div className='email'>
                        <label htmlFor="email" className="sr-only">Email Address</label>
                        <BsSend />
                        <input type="text" id="email" placeholder='Your email address' />
                        <button type="button">Subscribe</button>
                    </div>
                </div>
                <div className='imagess'>
                    <img src={boy} alt="Boy Illustration" />
                </div>
            </div>
        </div>
    )
}

export default Stayhome
