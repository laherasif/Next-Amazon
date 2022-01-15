import './banner.css'

export default function Banner() {
    return (
        <>
            <div className="Banner_Wrapper">
                <div
                    id="carouselExampleInterval"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={10000}>
                            <img src="images/slider-1.jpg" className="d-block w-100" alt="slider-1" />
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                            <img src="images/slider-2.jpg" className="d-block w-100" alt="slider-2" />
                        </div>
                        <div className="carousel-item">
                            <img src="images/slider-3.jpg" className="d-block w-100" alt="slider-2" />

                        </div>
                        <div className="carousel-item">
                            <img src="images/slider-4.jpg" className="d-block w-100" alt="slider-2" />

                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


        </>
    )
}
