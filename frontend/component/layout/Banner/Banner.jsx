import styles from '../../../styles/banner.module.css'
import Image from 'next/image'
export default function Banner() {
    return (
        <>
            <div className={styles.Banner_Wrapper}>
                <div
                    id="carouselExampleInterval"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={10000}>
                            <Image src="/images/slider-1.jpg"  width="100%" height="40%" layout="responsive"  alt="slider-1" />
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                            <Image src="/images/slider-2.jpg"  width="100%" height="40%" layout="responsive"  alt="slider-2" />
                        </div>
                        <div className="carousel-item">
                            <Image src="/images/slider-3.jpg"  width="100%" height="40%" layout="responsive"  alt="slider-2" />

                        </div>
                        <div className="carousel-item">
                            <Image src="/images/slider-4.jpg"  width="100%" height="40%" layout="responsive"  alt="slider-2" />

                        </div>
                    </div>
                    <button
                        className={styles.carousel_control_prev}
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className={styles.carousel_control_next}
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
