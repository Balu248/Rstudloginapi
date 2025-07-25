import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Addstud = () => {
     const [input, xinput] = useState(
        {
            name: "",
            roll_number: "",
            admission_number: "",
            college: ""
        }
    )
    const inputhandler=(event)=>{
        xinput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://18.144.111.41/student_api.php",input).then(
            (res)=>{
                alert("Successfully Added")
            }
        ).catch()
    }
  return (
     <div style={{
            backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
        }}>
           <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Roll No</label>
                                <input type="number" name="roll_number" id="" className="form-control" value={input.roll_number} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Admission Number</label>
                                <input type="text" className="form-control" name='admission_number' value={input.admission_number} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name='college' value={input.college} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readvalues}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Addstud