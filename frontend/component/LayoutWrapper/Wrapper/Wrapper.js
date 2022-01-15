import Header from '../../layout/Header/Header';
import SmallHeader from '../../layout/SmalHeader/SmallHeader';
import Footer from '../../layout/Footer/Footer';


export default function Wrapper({ children }) {
    return (
        <div>
            <Header />
            <SmallHeader />

            {children}

            <Footer />

        </div>
    )
}
