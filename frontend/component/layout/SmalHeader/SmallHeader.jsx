import './smallHead.css'
import { BsList } from "react-icons/bs";
export default function SmallHeader() {
    return (
        <>
            <div className="Wrapper">
                <div className="container-fluid">
                    <div className="smallHeader_Wrapper">
                        <div className="header_list">
                            <ul className="list">
                                <li className="listItems">
                                    <BsList className="bsList" />
                                    All
                            </li>
                                <li className="listItems">Today's Deals</li>
                                <li className="listItems">Customer Service</li>
                                <li className="listItems">Registry</li>
                                <li className="listItems">Gift Cards</li>
                                <li className="listItems">Sell</li>
                            </ul>
                        </div>
                        <div className="deals_data">
                            <ul className="deals_list">
                                <li className="deals_listItem">New Year , new deal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
