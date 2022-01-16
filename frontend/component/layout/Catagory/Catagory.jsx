import styles from '../../../styles/Catagory.css'


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
                        <div className="catagory-imgs">
                            <img src="/images/baby-1.jpg" alt="babay" />
                            <img src="/images/baby-1.jpg" alt="babay" />
                            <img src="/images/baby-1.jpg" alt="babay" />
                            <img src="/images/baby-1.jpg" alt="babay" />
                            <img src="/images/baby-1.jpg" alt="babay" />
                            <img src="/images/baby-1.jpg" alt="babay" />
                            <img src="/images/baby-1.jpg" alt="babay" />
                            <img src="/images/baby-1.jpg" alt="babay" />
                            <img src="/images/baby-1.jpg" alt="babay" />
                        </div>
                    </div>
                {/* </div> */}
            </div>

        </>
    )
}
