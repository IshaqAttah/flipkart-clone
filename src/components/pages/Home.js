import slide1 from '../images/index-images/slide1.png'
import slide2 from '../images/index-images/slide2.png'
import slide3 from '../images/index-images/slide3.png'
import promoImage from '../images/index-images/promo-img.png'
import SingleImageSlider from '../props/SingleImageSlider'
import row1 from '../images/index-images/row1.png'
import row2 from '../images/index-images/row2.png'
import row3 from '../images/index-images/row3.png'

import row4a from '../images/index-images/row4a.jpg'
import row4b from '../images/index-images/row4b.jpg'
import row4c from '../images/index-images/row4c.jpg'
import row5a from '../images/index-images/row5a.jpg'
import row5b from '../images/index-images/row5b.jpg'
import row5c from '../images/index-images/row5c.jpg'
import row6a from '../images/index-images/row6a.jpg'
import row6b from '../images/index-images/row6b.jpg'
import row6c from '../images/index-images/row6c.jpg'




import attach from '../images/index-images/attach.png'
import wings from '../images/index-images/wings.png'
import RowOfThree from '../props/RowOfThree'
import SecondaryNav from '../SecondaryNav'
// import Navigation from '../Navigation'
import Login from './Login'
import Footer from '../Footer'
import { useContext } from 'react'
import { ApiCallsContext } from '../context/ApiCallsContext'
import Navigation from '../Navigation'
export default function Home() {

    const { loginBtn, setLoginBtn, logged_in } = useContext(ApiCallsContext)


    return (
        <>

<Navigation className="navigation" />


            <div className='index-stye'>


                <SingleImageSlider slide1={slide1} slide2={slide2} slide3={slide3} />

                <div className="promo-area mb-3">
                    <img src={promoImage} alt=""  />
                </div>

                <RowOfThree row1={row1} row2={row2} row3={row3} />

                <div className='flex staticSlider'>
                    <div className="sec1">
                        <div className='sec1-sub-sec'>
                            <h4>Top Offers</h4>
                            <div><button>VIEW ALL</button></div>
                            <div className='attach'>
                                <img src={attach} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="sec2">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">

                                <div className="carousel-item active d-fle">
                                    <div className='d-flex'>
                                        <div className='width-33'>
                                            <img src={wings} className="d-bloc " alt="..." />
                                        </div>
                                        <div className='width-33'>
                                            <img src={wings} className="d-bloc " alt="..." />
                                        </div>
                                        <div className='width-33'>
                                            <img src={wings} className="d-bloc " alt="..." />

                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item active d-fle">
                                    <div className='d-flex'>
                                        <div className='width-33'>
                                            <img src={slide1} className="d-bloc " alt="..." />
                                        </div>
                                        <div className='width-33'>
                                            <img src={wings} className="d-bloc " alt="..." />
                                        </div>
                                        <div className='width-33'>
                                            <img src={slide3} className="d-bloc " alt="..." />

                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item active d-fle">
                                    <div className='d-flex'>
                                        <div className='width-33'>
                                            <img src={slide1} className="d-bloc " alt="..." />
                                        </div>
                                        <div className='width-33'>
                                            <img src={wings} className="d-bloc " alt="..." />
                                        </div>
                                        <div className='width-33'>
                                            <img src={slide3} className="d-bloc " alt="..." />

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="sec3">
                        <img src={wings} alt="" />

                    </div>
                </div>

                <RowOfThree row1={row4a} row2={row4b} row3={row4c} />
                <RowOfThree row1={row5a} row2={row5b} row3={row5c} />
                <RowOfThree row1={row6a} row2={row6b} row3={row6c} />




                <Footer />

            </div>
        </>
    )
}