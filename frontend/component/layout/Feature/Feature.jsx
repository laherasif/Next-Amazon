import styles from '../../../styles/feature.module.css'
import { Link } from 'next/link'
import Image from 'next/image'
const Feature = () => {
    return (
        <>
            <div className="Feature_Wrapper">
                <div className="container-fluid">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Gamming accessories</h5>
                            <div className="card-text">
                                <div className={styles.product_wrapper}>
                                    <div className={styles.product}>
                                        <Image src="/images/headphone.jpg" width={200} height={150} alt="product_images" className="product_img" />
                                        <span className="product_name">Headsets</span>
                                    </div>
                                    <div className={styles.product}>
                                        <Image src="/images/keyboard.jpg" width={200} height={150} alt="product_images" className="product_img" />
                                        <span className="product_name">Headsets</span>
                                    </div>
                                </div>
                                <div className={`${styles.product_wrapper} mt-3`}>
                                    <div className={styles.product}>
                                        <Image src="/images/mouse.jpg" width={200} height={200} alt="product_images" className="product_img" />
                                        <span className="product_name">Headsets</span>
                                    </div>
                                    <div className={styles.product}>
                                        <Image src="/images/chair.jpg"  width={200} height={200}alt="product_images" className="product_img" />
                                        <span className="product_name">Headsets</span>
                                    </div>
                                </div>

                            </div>
                            <Link href="/">
          <a>Shop now</a>
        </Link>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Feature
