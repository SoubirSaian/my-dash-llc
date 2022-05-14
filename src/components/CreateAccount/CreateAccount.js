import React from 'react';
import './CreateAccount.css';

import img1 from '../../images/unnamed.png';

const CreateAccount = () => {
    return (
        <div className='register-page'>
            <div className='img-container'>
                <img src={img1} alt="sample-img" />
                <h3>Choose a date range</h3>
                <p>Lorium Ipsum dollar sit ammet <br /> edipiscing elit.Mauris imperdiet bibendum</p>
            </div>
            <div className='sign-up'>
                <h2>Create an account</h2>
                <form>
                    <input type="text" placeholder='your email address'/>
                    <br />
                    <input type="text" placeholder='your password' />
                    <br />
                    <input type="text" placeholder='confirm password'/>
                    <br />
                    <input type="text" placeholder='your name' />
                    <br />
                    <input type="text"placeholder='your mobile number'/>
                    <br />
                    <button>Create Account</button>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;