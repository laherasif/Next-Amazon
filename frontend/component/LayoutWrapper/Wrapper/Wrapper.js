import Header from '../../layout/Header';
import SmallHeader from '../../layout/SmallHeader';
import Footer from '../../layout/Footer';


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
