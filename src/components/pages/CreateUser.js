import { FaPhoneAlt, FaEnvelope, FaLock } from 'react-icons/fa'
import { CgNametag } from 'react-icons/cg'
import { useState } from 'react'
import { useContext } from 'react'
import { ApiCallsContext } from '../context/ApiCallsContext'



export default function CreateUser() {
    const [checkEmpty, setCheckEmpty] = useState(false)

    const { name, setName, phone, setPhone, email, setEmail, password, setPassword, edit, handleUpdate, success_msg, setUsers } = useContext(ApiCallsContext)

    const handleValidate = () => {
        if (name === '' || phone === '' || email === '' || password === '') {
            setCheckEmpty(true)
        } else {
            handleCreateUser()
        }

    }
    const handleCreateUser = () => {
        const userData = {
            name: name,
            phone: phone,
            email: email,
            password: password
        }
        fetch('http://159.65.21.42:9000/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        })
            .then((resp) => resp.json())
            .then((data) => {
                fetch('http://159.65.21.42:9000/users')
                    .then((resp) => resp.json())
                    .then((data) => {
                        setUsers(data)
                    })
                success_msg(data.name + ' has been successfully registered')
                setName('')
                setEmail('')
                setPassword('')
                setPhone('')
                setCheckEmpty(false)
            }
            )


    }
    
    return (
        <div>
            <form action="" >


                <h1>{!edit ? (<>Register new user</>) : (<>Update User Information</>)}</h1>

                <div>
                    <label htmlFor=""><CgNametag className='text-primary fs-4' /> Name</label>
                    <div>
                        <input type="text" placeholder='Enter full name' value={name} onChange={(e) => setName(e.target.value)} />

                        {
                            checkEmpty && name === '' ? (
                                <span className='error'>Name field is required</span>
                            ) : (null)
                        }

                    </div>
                </div>
                <div>
                    <label htmlFor=""> <FaPhoneAlt className='text-primary' /> Phone</label>
                    <div>
                        <input type="number" placeholder='Enter phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />

                        {
                            checkEmpty && phone === '' ? (
                                <span className='error'>Phone number field is required</span>
                            ) : (null)
                        }

                    </div>
                </div>
                <div>
                    <label htmlFor="">  <FaEnvelope className='text-primary' /> Email</label>
                    <div>
                        <input type="email" placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} />

                        {
                            checkEmpty && email === '' ? (
                                <span className='error'>Email field is required</span>
                            ) : (null)
                        }

                    </div>
                </div>
                <div>
                    <label htmlFor=""> <FaLock className='text-primary' /> Password</label>
                    <div>
                        <input type="password" placeholder='Create password' value={password} onChange={(e) => setPassword(e.target.value)} />

                        {
                            checkEmpty && password === '' ? (
                                <span className='error'>Password field is required</span>
                            ) : (null)
                        }

                    </div>
                </div>
                <button  onClick={(e) => {
                    e.preventDefault()
                    !edit ? (handleValidate()) : (handleUpdate())

                }}>{!edit ? (<>Create user</>) : (<>Update</>)}</button>

            </form>
        </div>
    )
}