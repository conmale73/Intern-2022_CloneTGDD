import { useState } from 'react';
import OrderTable from './OrderTable';
import Welcome from './Welcome';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

const EmptyOrder = () => {
    return (
        <div className="flex flex-col items-center justify-center my-8">
            <img
                src="https://www.thegioididong.com/lich-su-mua-hang/images/gio-hang-rong-desk.png"
                title="Tiếp tục mua sắm"
            ></img>

            <p>Bạn chưa có đơn hàng nào</p>
            <Link className="" to="/">
                Về trang chủ
            </Link>
            <div>
                Khi cần hỗ trợ vui lòng gọi <a href="tel:18001060">1800.1060</a> (7h30 - 22h)
            </div>
        </div>
    );
};
const PurchaseHistory = () => {
    const loadHistoryOrder = useSelector((state) => state.historyOrders.historyOrder.data);
    const check = loadHistoryOrder.length === 0;
    return <div>{check ? <EmptyOrder /> : <OrderTable data={loadHistoryOrder} />}</div>;
};
export default PurchaseHistory;
