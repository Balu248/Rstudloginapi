import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [input, xinput]=useState(
        {id:"", password:""}
    )
    const inputhandler=(event)=>{
        xinput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
    }
    return (
        <div style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-jplenio-1103970.jpg&fm=jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
        }}>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', }}>
                            <div className="card shadow" style={{ width: '100%', maxWidth: '400px', padding: '20px' }}>
                                <h3 className="text-center mb-4">Login</h3>
                                <form >
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Student ID</label>
                                        <input type="text" className="form-control" id="email" placeholder="Enter Student ID" required  name='id' value={input.id} onChange={inputhandler}/>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="text" className="form-control" id="password" placeholder="Password" required name='password' value={input.password} onChange={inputhandler}/>
                                    </div>

                                    <Link to="/h" className="btn btn-primary w-100 text-center">Login</Link>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login