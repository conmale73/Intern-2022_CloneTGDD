import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Order.scss';
import { useDispatch, useSelector } from 'react-redux';
import { numberWithCommas } from '~/utils';
import { Navigate, useNavigate } from 'react-router-dom';
import { customerService, orderService } from '~/services';
import { momo } from '~/services/payment';
const Order = ({ title }) => {
    const navigate = useNavigate();
    const order = useSelector((state) => state.order.order.data);
    const hasOrder = Object.keys(order).length > 0 && order.constructor === Object;
    let customer = { sex: '', username: '', phone: '', address: {} };
    let info = { totalPrice: 0, totalQuantity: 0 };
    if (hasOrder) {
        customer = { ...order.customer };
        info = { ...info, id: order.id, totalPrice: order.totalPrice, totalQuantity: order.totalQuantity };
    }
    const handleConfirm = async () => {
        const payment = getPayment();
        const data = { ...order, payment };

        console.log(data);
        if (payment.name === 'momo') {
            const dataMomo = {
                orderId: info.id,
                orderInfo: `${customer.username} thanh toán đơn hàng ${data.id} với MoMo`,
                redirectUrl: window.location.origin,
                amount: 5000,
                extraData: '',
            };
            const res = await momo.createMomoPayment(dataMomo);
            localStorage.removeItem('order');
            window.location = res.data.payUrl;
        }
    };
    const getPayment = () => {
        const radios = document.querySelectorAll('input[name="payment"]');
        let paymentIndex = -1;
        for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                paymentIndex = i;
                break;
            }
        }
        return paymentIndex != -1 ? { name: radios[paymentIndex].value, paid: false } : { name: 'not', paid: false };
    };
    const handleCancel = () => {
        localStorage.removeItem('order');
        alert('Hủy đơn hàng thành công !');
    };
    useEffect(() => {
        document.title = title;
    }, []);
    return (
        <>
            {hasOrder ? (
                <div className="order">
                    <div className="alertsuccess-new">
                        <i className="new-cartnew-success"></i>
                        <strong>Đặt hàng thành công</strong>
                    </div>
                    <div className="ordercontent">
                        <div>
                            <p>
                                Cảm ơn {customer.sex} <b>{customer.username}</b> đã cho Thế Giới Di Động cơ hội được
                                phục vụ.
                            </p>
                        </div>
                        <div>
                            <div className="info-order">
                                <div className="info-order-header">
                                    <h4>
                                        Đơn hàng: <span className="text-blue-400 font-bold">#{info.id}</span>
                                    </h4>
                                    <div className="header-right">
                                        <Link to="/history">Quản lý đơn hàng</Link>
                                        <div className="cancel-order-new">
                                            <div>
                                                <div className="cancel-order-new">
                                                    <span>.</span>
                                                    <a onClick={handleCancel} href="/">
                                                        Hủy
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor="">
                                    <span>
                                        <i className="info-order__dot-icon"></i>
                                        <span>
                                            <strong>Người nhận hàng:</strong>
                                            <h4 id="userName">{customer.username}</h4>
                                            <br />
                                            <strong>Số điện thoại:</strong>
                                            <h4 id="customerPhone">{customer.phone}</h4>
                                        </span>
                                    </span>
                                </label>
                                <label htmlFor="">
                                    <span>
                                        <i className="info-order__dot-icon"></i>
                                        <span>
                                            <strong>Giao đến: </strong>
                                            {customer.address?.homeAdd}, {customer.address?.ward},
                                            {customer.address?.district}, Thành phố {customer.address?.city} (nhân viên
                                            sẽ gọi xác nhận trước khi giao).
                                        </span>
                                    </span>
                                </label>
                                <label htmlFor="">
                                    <span>
                                        <i className="info-order__dot-icon"></i>
                                        <span>
                                            <strong>Tổng tiền: {numberWithCommas(Number(info.totalPrice))} </strong>
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <h4 className="order-infor-alert">Đơn hàng chưa được thanh toán</h4>
                        </div>

                        <div className="payment-method-new">
                            <div>
                                <h3>Chọn hình thức thanh toán:</h3>
                                <ul className="formality-pay-new">
                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="vnpay" name="payment" value="vnpay" />
                                                <label htmlFor="vnpay">Thanh toán qua VNPay</label>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="cash" name="payment" value="cash" />
                                                <label htmlFor="cash">Thanh toán tiền mặt khi nhận hàng</label>
                                            </span>
                                        </div>
                                    </li>

                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="ck" name="payment" value="banking" />
                                                <label htmlFor="ck">Chuyển khoản ngân hàng</label>
                                            </span>
                                        </div>
                                    </li>

                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="atm" name="payment" value="atm" />
                                                <label htmlFor="atm">Qua thẻ ATM (có Internet Banking)</label>
                                            </span>
                                        </div>
                                    </li>

                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="qr" name="payment" value="qrcode" />
                                                <label htmlFor="qr">Qua QR Code</label>
                                            </span>
                                        </div>
                                    </li>

                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="momo" name="payment" value="momo" />
                                                <label htmlFor="momo">Ví MoMo</label>
                                            </span>
                                        </div>
                                    </li>

                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="visa" name="payment" value="visa" />
                                                <label htmlFor="visa">Qua thẻ quốc tế Visa, Master, JCB</label>
                                            </span>
                                        </div>
                                    </li>

                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="moca" name="payment" value="moca" />
                                                <label htmlFor="moca">Qua Ví điện tử Moca trên Grab</label>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="normal-payment">
                                        <div className="text-payment">
                                            <span>
                                                <input type="radio" id="machine" name="payment" value="marchinecard" />
                                                <label htmlFor="machine">Nhân viên mang máy cà thẻ khi nhận hàng</label>
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <button onClick={handleConfirm} className="confirm-payment-button">
                                    Xác nhận
                                </button>
                            </div>
                            <div className="refund-popup">
                                <a href="">Xem chính sách hoàn tiền online</a>
                            </div>
                            <hr />

                            <div className="buyanotherNew">
                                <Link to="/"> Mua thêm sản phẩm khác </Link>
                            </div>
                            <span className="customer-rating">
                                <div className="customer-rating__top">
                                    <div className="customer-rating__top__desc">
                                        {customer.sex} <strong>{customer.username}</strong> có hài lòng về trải nghiệm
                                        mua hàng?
                                    </div>
                                    <div className="customer-rating__top__rating-buttons">
                                        <button className="customer-rating__top__rating-buttons__good">
                                            <p>Hài lòng</p>
                                            <i className="iconrating-good"></i>
                                        </button>
                                        <button className="customer-rating__top__rating-buttons__bad">
                                            <p>Không hài lòng</p>
                                            <i className="iconrating-bad"></i>
                                        </button>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <Navigate to="/cart" />
            )}
        </>
    );
};

export default Order;
