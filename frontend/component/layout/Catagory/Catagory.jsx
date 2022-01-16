import styles from '../../../styles/Catagory.module.css'
import Image from 'next/image'

const images = [

    '/images/baby-1.jpg',
    '/images/baby-2.jpg',
    '/images/baby-3.jpg',
    '/images/baby-4.jpg',
    '/images/baby-5.jpg',


]



export default function Catagory() {
    return (
        <>
                {/* <div className="container-fluid"> */}
            <div className="catagory-wrapper">
                    <div className="catagorys">
                        <p>Popular products in Apparel international</p>
                        <div className={styles.catagory_imgs}>
                            <Image src="/images/baby-1.jpg" width="200px" height="100%"  objectFit="contain"  alt="babay" />
                            <Image src="/images/baby-1.jpg" width="200px" height="100%"  objectFit="contain"  alt="babay" />
                            <Image src="/images/baby-1.jpg" width="200px" height="100%"  objectFit="contain"  alt="babay" />
                            <Image src="/images/baby-1.jpg" width="200px" height="100%"  objectFit="contain"  alt="babay" />
                            <Image src="/images/baby-1.jpg" width="200px" height="100%"  objectFit="contain"  alt="babay" />
                            <Image src="/images/baby-1.jpg" width="200px" height="100%"  objectFit="contain"  alt="babay" />
                            <Image src="/images/baby-1.jpg" width="200px" height="100%"  objectFit="contain"  alt="babay" />
                            <Image src="/images/baby-1.jpg" width="200px" height="100%"  objectFit="contain"  alt="babay" />
                            <Image src="/images/baby-1.jpg" width="200px" height="100%"  objectFit="contain"  alt="babay" />
                        </div>
                    </div>
                {/* </div> */}
            </div>

        </>
    )
}
