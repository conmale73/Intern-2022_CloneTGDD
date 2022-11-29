import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, TicketPerforated } from 'react-bootstrap-icons';
import ProductItem from './ProductItem';
import Input from './Input';
import { numberWithCommas } from '~/utils';
import { LocationForm } from '~/components/LocationForm';
import { clearCart } from '~/redux/shopping-cart/cartItemsSlide';
import { postOrders } from '~/redux/order/ordersApi';
import moment from 'moment';
import './Cart.scss';
import { useCart } from '~/hooks';
import { useDispatch } from 'react-redux';
import { customerService } from '~/services';

function CartInfo() {
    const cartData = useCart();
    const [addressOption, setAddresOption] = useState();
    const { cartItems, totalPrice, totalQuantity } = cartData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(cartItems);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('fullname').value;
        const phone = document.getElementById('phone').value;
        const homeAdd = document.getElementById('homeAddress').value;
        const sex = document.getElementsByName('sex');
        let sexValue;
        for (let i = 0, length = sex.length; i < length; i++) {
            if (sex[i].checked) {
                sexValue = sex[i].value;
            }
        }
        const customer = {
            id: Math.floor(Math.random() * 100000000),
            username: name,
            address: { homeAdd, ...addressOption },
            sex: sexValue,
            phone: phone,
        };
        const dataPostOrder = {
            id: Date.now(),
            totalPrice: totalPrice,
            totalQuantity: totalQuantity,
            status: 'Đặt hàng',
            payment: {
                name: 'not',
                paid: false,
            },
            customer: customer,
            order_items: {
                data: cartItems,
            },
            createdAt: moment().format('MM/DD/YYYY'),
        };
        const res = await customerService.getCustomerByPhone(phone);
        if (res.length === 0) {
            const resCustomer = await customerService.postCustomer(customer);
        }
        postOrders(dispatch, dataPostOrder);
        dispatch(clearCart());
        navigate('/order');
    };
    useEffect(() => {
        const setCustomerInfo = () => {
            let customerInfo = localStorage.getItem('customerInfo');
            if (customerInfo) {
                customerInfo = JSON.parse(customerInfo);

                console.log(customerInfo);
                document.getElementById('fullname').value = customerInfo.username;
                document.getElementById('phone').value = customerInfo.phone;
                document.getElementById('homeAddress').value = customerInfo.address.homeAdd;
            }
        };
        setCustomerInfo();
    }, []);
    return (
        <div className="w-1/2 m-auto">
            <div className="flex justify-between py-4">
                <Link to="/" className="text-blue-500">
                    <i>
                        <ChevronLeft />
                    </i>
                    Mua thêm sản phẩm khác
                </Link>
                <p>Giỏ hàng của bạn</p>
            </div>

            <form className="bg-white rounded-xl px-14 py-8 shadow-sm" onSubmit={handleSubmit}>
                {cartItems.map((product, index) => (
                    <ProductItem key={index} {...product} />
                ))}
                <div className="flex justify-between py-4">
                    <span>Tạm tính ({totalQuantity} sản phẩm):</span>
                    <span> {numberWithCommas(totalPrice)}₫</span>
                </div>
                <div className="my-8 border-t py-4">
                    <h4>THÔNG TIN KHÁCH HÀNG</h4>
                    <div className="my-4">
                        <input id="male" type="radio" name="sex" value="Anh" defaultChecked />
                        &nbsp;
                        <label htmlFor="male">Anh</label>
                        &emsp;
                        <input id="female" type="radio" name="sex" value="Chị" />
                        &nbsp;
                        <label htmlFor="female">Chị</label>
                    </div>

                    <div className="flex gap-4">
                        <Input placeholder="Họ và Tên" id="fullname" required={true} />
                        <Input
                            placeholder="Số điện thoại"
                            id="phone"
                            type="tel"
                            required={true}
                            pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                        />
                    </div>
                </div>
                <div className="my-8">
                    <h4>CHỌN CÁCH THỨC NHẬN HÀNG</h4>
                    <div className="my-4">
                        <input id="site" type="radio" name="destination" />
                        &nbsp;
                        <label htmlFor="site">Giao tận nơi</label>
                        &emsp;
                        <input id="market" type="radio" name="destination" />
                        &nbsp;
                        <label htmlFor="market">Nhận tại siêu thị</label>
                    </div>
                    <div>
                        <div className="border border-blue-400 border p-4 rounded-xl">
                            <p>Chọn địa chỉ để biết thời gian nhận hàng và phí vận chuyển (nếu có)</p>

                            <Input placeholder="Số nhà, tên đường" id="homeAddress" required={true} />
                            <LocationForm
                                onChange={(e) => {
                                    setAddresOption(e);
                                }}
                            />
                            <div>
                                <div className="flex justify-between mb-4">
                                    <span>Giao trước 20h hôm nay ({moment().format('DD/MM/YYYY')})</span>

                                    <span>Chọn ngày giờ khác</span>
                                </div>
                                <div className="flex flex-col my-30 border-b py-4 gap-4 p-10 border-1 border-gray-400 rounded">
                                    {cartItems.map((product, index) => (
                                        <div className="border-b " key={index}>
                                            <div className="h-16">
                                                <img src={product.img} alt="" className="h-full object-vocer" />
                                            </div>
                                            <div>
                                                <Link to="productdetail">{product.title}</Link>
                                                <div>
                                                    <small>Màu: {product.color}</small>&emsp;
                                                    <small>Số lượng: {product.quantity}</small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-green-600 mt-6">Miễn phí giao hàng</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Input placeholder="Yêu cầu khác (không bắt buộc)" id="anotheroption" />
                    <div className="my-4">
                        <div className="my-4">
                            <div className="my-4">
                                <input type="checkbox" />
                                &nbsp;
                                <label htmlFor="">Hướng dẫn sử dụng, giải đáp thắc mắc sản phẩm</label>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="my-4">
                                <input type="checkbox" />
                                &nbsp;
                                <label htmlFor="">Xuất hóa đơn công ty</label>
                            </div>
                            <div className="border border-blue-400 border p-4 rounded-xl">
                                <Input placeholder="Tên công ty" id="company" />
                                <br />
                                <Input placeholder="Địa chỉ công ty" id="Địa chỉ công ty" />
                                <br />
                                <Input placeholder="Mã số thuế" id="Địa chỉ công ty" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="py-8 border-b ">
                        <button className="p-4 border rounded-lg">
                            <i>
                                <TicketPerforated />
                            </i>
                            &nbsp;
                            <span>Sử dụng mã giảm giá</span>&nbsp;
                            <i>
                                <ChevronDown />
                            </i>
                        </button>
                        <div className="flex gap-8 border border-blue-400 border p-4 rounded-xl">
                            <Input placeholder="Nhập mã giảm giá/ Phiếu mua hàng" id="ticketid" />
                            <button className="py-4 px-10 border bg-blue-600 rounded-lg text-white">Áp dụng</button>
                        </div>
                    </div>

                    <div className="flex justify-between my-4">
                        <strong>Tổng tiền:</strong>
                        <strong className="text-red-600">{numberWithCommas(totalPrice)}₫</strong>
                    </div>
                    <button type="submit" className="h-20 my-8 bg-yellow-300 rounded-lg w-full text-white font-bold">
                        ĐẶT HÀNG
                    </button>
                    <small className="block text-center">Bạn có thể chọn hình thức thanh toán sau khi đặt hàng</small>
                </div>
            </form>
            <small className="text-center text-gray-600 w-full h-24 flex justify-center items-center">
                Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng của Thegioididong
            </small>
        </div>
    );
}

export default CartInfo;
