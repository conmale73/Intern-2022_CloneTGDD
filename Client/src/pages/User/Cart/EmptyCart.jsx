import { Link } from 'react-router-dom';
import { CartXFill } from 'react-bootstrap-icons';
function EmptyCart() {
    return (
        <div className="flex items-center justify-center flex-col h-[45vh] gap-4 bg-white">
            <i>
                <CartXFill className="text-9xl text-red-600" />
            </i>
            <p>Không có sản phẩm nào trong giỏ hàng</p>
            <Link to="/">
                <button className="bg-transparent text-blue-700 font-semibold py-1 px-96 border border-blue-500 rounded-lg uppercase h-20">
                    Về trang chủ
                </button>
            </Link>
            <p>Khi cần trợ giúp vui lòng gọi 1800.1060 hoặc 028.3622.1060 (7h30 - 22h)</p>
        </div>
    );
}

export default EmptyCart;
