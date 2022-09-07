import { Link } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import SearchInput from './SearchInput';
import CartButton from './CartButton';
import FilterButton from './FilterButton';
import styles from './header.module.scss';
import './header.module.scss';
import { getHistoryOrders } from '~/redux/history/historyOrdersApi';
import { useDispatch, useSelector } from 'react-redux';
function Header() {

    const dispatch = useDispatch();
    const handleOrderClick = () => {
        const phoneNumber = JSON.parse(localStorage.getItem('user')).phoneNumber.toString();
        const userPhoneNumber = phoneNumber.replace('+84', '0');
        getHistoryOrders(dispatch, userPhoneNumber);
    }
    return (
        <header className={styles.heading}>
            <div className={styles.top}>
                <div className={styles.wrap}>
                    <Link to="/">
                        <div className={styles.logo}></div>
                    </Link>
                    <FilterButton></FilterButton>
                    <SearchInput />
                    <Link to="/history" className="w-32 text-center" onClick={handleOrderClick}>
                        Lịch sử đơn hàng
                    </Link>
                    <Link to="/cart">
                        <CartButton />
                    </Link>
                    <Link to="/news">24h Công nghệ</Link>
                    <Link to="/about">Hỏi đáp</Link>
                    <Link to="/gameapp">Game app</Link>
                </div>
            </div>
            <div className={styles.bottom}>
                <HeaderNav />
            </div>
        </header>
    );
}

export default Header;
