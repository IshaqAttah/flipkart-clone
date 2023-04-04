
import { useContext, useEffect, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { ToastContainer } from 'react-toastify'
import { ApiCallsContext } from '../context/ApiCallsContext'
import loginImg from '../images/login-images/login.png'



export default function Login() {

    const {
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUsername,
        login,
        setLogin,
        otp,
        setOtp,
        register,
        setRegister,
        handleValidate,
        handleValidateLogin,
        setLoginBtn,
        checkEmpty,
        setCheckEmpty,
    } = useContext(ApiCallsContext)

    const validateEmail = () => {
        if (email === '') {
            setCheckEmpty(true)
        } else {
            setOtp(true);
            setLogin(false)
            setCheckEmpty(false)
        }
    }



    return (
        <div className="login-register-container d-flex">

            <ToastContainer
                position='top-center'
            />

            <div className='login-register d-flex justify-content-evenly'>


                <div className="section-1 ">


                    {
                        register ? (<div className="text">
                            <h2>Looks like you're new here!</h2>
                            <p>Sign up with your mobile number to get started</p>
                        </div>) : (
                            <div className="text">
                                <h2>Login</h2>
                                <p>Get access to your Orders, Wishlist and Recommendations</p>
                            </div>
                        )
                    }



                    <div className="image">
                        <img src={loginImg} alt="" style={{ width: '100%' }} />
                    </div>
                </div>


                <div className="section-2">
                    <div>

                        {
                            register && !otp ? (
                                <div className="email">
                                    <input type="text" placeholder='Enter email address'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    {
                                        checkEmpty && email === '' ? (
                                            <p className='text-danger'>Email is required</p>
                                        ) : (null)
                                    }
                                </div>

                            ) : register && otp ? (
                                <div>
                                    <div className="email">
                                        <input type="text" placeholder='Enter Email/Mobile number' value={email} disabled />
                                    </div>
                                    <div className="email">
                                        <input type="text"
                                            placeholder='Enter Full Name'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}

                                        />
                                        {
                                            checkEmpty && username === '' ? (<p className='text-danger'>Name is required</p>) : (null)
                                        }
                                    </div>


                                    <div className="password">
                                        <input type="password"
                                            placeholder='Create Password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />

                                    </div>
                                    {
                                        checkEmpty && password === '' ? (<p className='text-danger'>Password is required</p>) : (null)
                                    }

                                    <div className="buttons">
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            handleValidate()
                                        }}>Signup</button>
                                    </div>
                                </div>

                            ) : (null)



                        }


                        {
                            !register && (
                                <>
                                    <div className="email">
                                        <input type="text" placeholder='Enter registered email address'
                                            onChange={(e) => setEmail(e.target.value)} />
                                        {
                                            checkEmpty && email === '' ? (<p className='text-danger'>Email is required</p>) : (null)
                                        }
                                    </div>
                                    <div className="password">
                                        <input type="password" placeholder='Enter Password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />

                                        <span className='text-primary password-span'>Forgot?</span> <br />

                                    </div>
                                    {
                                        checkEmpty && password === '' ? (<p className='text-danger'>Password is required</p>) : (null)
                                    }
                                </>



                            )
                        }


                        <p className='mt-3 f13'>By continuing, you agree to Flipkart's <span className='text-primary'> Terms of Use </span> and <span className='text-primary'> Privacy Policy</span></p>


                        {
                            !register ? (
                                <div className="buttons">
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        handleValidateLogin();

                                    }}>Login</button>
                                    <p>OR</p>
                                    <button>Request OTP</button>
                                </div>
                            ) : (
                                null
                            )
                        }

                        {
                            register && !otp ? (
                                <div className="buttons">
                                    <button onClick={() => {
                                        validateEmail()
                                    }}>Continue</button>
                                </div>
                            ) : (null)
                        }



                        {
                            !register ? (
                                <p className='text-primary create-account pointer'
                                    onClick={() => setRegister((prev) => prev = true)}>
                                    New to Flipkart? Create an account</p>
                            ) : (
                                <button className='text-primary create-account pointer login-btn' onClick={() => {
                                    setRegister(false);
                                    setOtp(false)
                                    setLogin(true)
                                }}>Existing User? Log in</button>
                            )
                        }

                    </div>

                </div>


            </div>


            <div className='cancel'>
                <IoCloseOutline className='pointer' onClick={() => {
                    setLoginBtn(false)
                    setLogin(false)
                    setRegister(false)
                    setOtp(false)
                    setEmail('')
                    setPassword('')
                    setUsername('')


                }
                } />
            </div>
        </div>
    )
}