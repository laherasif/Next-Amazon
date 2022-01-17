import styles from '../styles/login.module.css'
import Link from 'next/link'
export default function Login() {
    return (
        <>
            <div className={styles.loginWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 "></div>
                        <div className="col-md-4 mt-3">
                            <div className={styles.logo}></div>
                            <div className={styles.singIn_form}>
                                <h2 className={styles.signIn_head}>Sign-In</h2>
                                <div className="mb-3">
                                    <label className="form-label">Email or mobile phone number </label>
                                    <input type="email" className="form-control" />
                                </div>
                                <button className={styles.btn_singIn} >countinue</button>

                                <div className={styles.agree}>
                                    <p className={styles.agree_desc}>By countinuting , you agree to Amazon's conditions of Use and Privacy Notice. </p>
                                </div>
                            </div>
                            <div className={styles.new_account}>
                                <div className={styles.new_account_desc}>
                                    <h5>New to Amazon</h5>
                                </div>
                                 <Link href="/register" passHref >
                                <button className={styles.btn_create}>Create your Amazon account </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 "></div>

                </div>
            </div>
        </>
    )
}
