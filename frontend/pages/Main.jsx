import styles from '../styles/home.module.css'
import Banner from '../component/layout/Banner/Banner'
import Catagory from '../component/layout/Catagory/Catagory';
import Feature from '../component/layout/Feature/Feature';
export default function Main() {
    return (
        <>
            <div className="Home_Wrapper" >

                <div className="banner">
                    <Banner />

                </div>
                <div className={styles.feature}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <Feature/>
                            </div>
                            <div className="col-md-3">
                                {/* <Feature /> */}
                            </div>
                            <div className="col-md-3">
                                {/* <Feature /> */}
                            </div>
                            <div className="col-md-3">
                                {/* <Feature /> */}
                            </div>
                        </div>
                        <div style={{ margin: '25px' }}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <Catagory />
                                </div>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-3">
                                {/* <Feature /> */}
                            </div>
                            <div className="col-md-3">
                                {/* <Feature /> */}
                            </div>
                            <div className="col-md-3">
                                {/* <Feature /> */}
                            </div>
                            <div className="col-md-3">
                                {/* <Feature /> */}
                            </div>
                        </div>

                        <div style={{ margin: '25px' }}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <Catagory />
                                </div>
                            </div>

                        </div>
                        <div style={{ margin: '25px' }}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <Catagory />
                                </div>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-3">
                                {/* <Feature /> */}
                            </div>
                            <div className="col-md-3">
                                {/* <Feature /> */}
                            </div>
                            <div className="col-md-3">
                                {/* <Feature /> */}
                            </div>
                            <div className="col-md-3">
                                {/* <Feature /> */}
                            </div>
                        </div>
                        
                        <div style={{ margin: '25px' }}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <Catagory />
                                </div>
                            </div>

                        </div>
                        <div style={{ margin: '25px' }}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <Catagory />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                
            </div>


        </>
    )
}
