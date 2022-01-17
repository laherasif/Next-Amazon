import styles from  '../styles/signup.module.css'

export default function Register() {
    return (
        <>
            <div className={styles.registerWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 "></div>
                        <div className="col-md-4 mt-3">
                            <div className={styles.logo}></div>
                            <div className={styles.register_form}>
                                <h2>Create account</h2>
                                <form>
                                    <div className="mb-2">
                                        <label className="form-label">Your name  </label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Mobile number or email  </label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Password  </label>
                                        <input type="email" className="form-control" />
                                        <p className="password_info">password must be at least 6 characters</p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Re-enter password </label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <button className="btn_register" >countinue</button>
                                </form>
                                <div className="agree">
                                    <p>By countinuting , you agree to Amazon's conditions of Use and Privacy Notice. </p>
                                </div>

                                <hr/>

                                <div className="agree">
                                    <p>Already have an account? Sign-In </p>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="col-md-4 "></div>

                </div>
            </div>
        </>
    )
}
