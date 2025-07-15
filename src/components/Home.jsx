import React from 'react'
import Nav from './Nav'

const Home = () => {
    return (
        <div style={{
            backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
        }}>
            <Nav />
            <div className="container">
                <div className="row">
                     <h1 align="center">Welcome To Student App</h1>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg" class="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} alt="..."></img>

                                </div>
                                <div class="carousel-item">
                                    <img src="https://img.freepik.com/free-photo/group-happy-friends-student-talking-about-knowledge-cafe_1150-3958.jpg?semt=ais_hybrid&w=740" class="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} alt="..."></img>

                                </div>
                                <div class="carousel-item">
                                    <img src="https://c0.wallpaperflare.com/preview/416/179/610/kings-college-cambridge-uk-university.jpg" class="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} alt="..."></img>

                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home