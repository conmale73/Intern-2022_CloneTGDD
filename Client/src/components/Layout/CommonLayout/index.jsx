import Header from '../../Header';
import TopSlider from '../../TopSlider';
import Footer from '../../Footer';
import { Outlet } from 'react-router-dom';
function CommonLayout({ children }) {
    return (
        <>
            <TopSlider />
            <Header />
            <main role="main" className="wrapper">
                <div className="content">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default CommonLayout;
