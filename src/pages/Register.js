import React from 'react';

function Register() {
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
            <p>You have to be logged in to submit.</p>
            <h4>Login</h4>
            <form>
                <div style={{marginBottom: '3px'}}>
                    <label htmlFor='reg-username'>username:</label>
                    <input id='reg-username' type='text' />
                </div>

                <div style={{marginBottom: '3px'}}>
                    <label htmlFor='reg-password'>password:</label>
                    <input id='reg-password' type='password' />
                </div>
                
                <div style={{display: 'flex', alignItems: 'start', marginTop: '15px'}}>
                    <button type='submit'>login</button>
                </div>
            </form>

            <p style={{textDecoration: 'underline', cursor: 'pointer', margin: '20px 0px',}}>Forgot password?</p>

            <h4>Create Account</h4>
            <form>
                <div style={{marginBottom: '3px'}}>
                    <label htmlFor='username'>username:</label>
                    <input id='username' type='text' />
                </div>

                <div style={{marginBottom: '3px'}}>
                    <label htmlFor='password'>password:</label>
                    <input id='password' type='password' />
                </div>
                
                <div style={{display: 'flex', alignItems: 'start', marginTop: '15px'}}>
                    <button type='submit'>create account</button>
                </div>
            </form>
        </div>
    )
}

export default Register