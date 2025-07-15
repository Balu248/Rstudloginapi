import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const Viewstudent = () => {
    const [stapi, xstapi] = useState(
        { "status": "success", "data": [] }
    )
    const fetchData=()=>{
        axios.get("http://18.144.111.41/view_all_students.php").then(
            (res)=>{
                xstapi(res.data)           
            }
        ).catch()
    }

    useEffect(()=>{fetchData()},[])
  return (
    <div  style={{
        backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1 align="center">STUDENT VIEW</h1>
                            {stapi.data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.name}</h5>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary"><b>Roll No:</b>{value.roll_number}</h6>
                                                    <p class="card-text"><b>Admission No: </b>{value.admission_number}</p>
                                                    <p class="card-text"><b>College: </b>{value.college}</p>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Viewstudent