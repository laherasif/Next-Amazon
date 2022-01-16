import styles from '../../../styles/smallHead.module.css'
import { BsList } from "react-icons/bs";
export default function SmallHeader() {
    return (
        <>
            <div className={styles.Wrapper}>
                <div className="container-fluid">
                    <div className={styles.smallHeader_Wrapper}>
                        <div>
                            <ul className={styles.list}>
                                <li className={styles.listItems}>
                                    <BsList className={styles.bsList} />
                                    All
                            </li>
                                <li className={styles.listItems}>Today's Deals</li>
                                <li className={styles.listItems}>Customer Service</li>
                                <li className={styles.listItems}>Registry</li>
                                <li className={styles.listItems}>Gift Cards</li>
                                <li className={styles.listItems}>Sell</li>
                            </ul>
                        </div>
                        <div >
                            <ul className={styles.deals_list}>
                                <li >New Year , new deal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
