import styles from '../../../styles/feature.module.css'
import { Link } from 'next/link'
const Feature = () => {
    return (
        <>
            <div className="Feature_Wrapper">
                <div className="container-fluid">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Gamming accessories</h5>
                            <div className="card-text">
                                <div className="product_wrapper">
                                    <div className="product">
                                        <img src="/images/headphone.jpg" alt="product_images" className="product_img" />
                                        <span className="product_name">Headsets</span>
                                    </div>
                                    <div className="product">
                                        <img src="/images/keyboard.jpg" alt="product_images" className="product_img" />
                                        <span className="product_name">Headsets</span>
                                    </div>
                                </div>
                                <div className="product_wrapper mt-3">
                                    <div className="product">
                                        <img src="/images/mouse.jpg" alt="product_images" className="product_img" />
                                        <span className="product_name">Headsets</span>
                                    </div>
                                    <div className="product">
                                        <img src="/images/chair.jpg" alt="product_images" className="product_img" />
                                        <span className="product_name">Headsets</span>
                                    </div>
                                </div>

                            </div>
                            <Link to="/" className="card-link">
                               Shop now
    </Link>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Feature
