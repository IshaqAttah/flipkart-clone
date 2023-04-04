
export default function SingleImageSlider({slide1, slide2, slide3}) {
    return (
        <div className='image'>


            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item data-bs-interval='500' active">
                        <img src={slide1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item data-bs-interval='500'">
                        <img src={slide2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item data-bs-interval='500'">
                        <img src={slide3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}