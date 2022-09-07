import './boxdichvu.scss';
import Comment from './Comment';

const BoxDichvu = (props) => {
    return (
        <div className="container__boxdichvu">
            <div className="boxdichvu">
                <aside className="leftbox">
                    <div className="boxdichvu__title">
                        <h2>ĐÓNG TIỀN TRẢ GÓP</h2>
                    </div>
                    <ul className="service">
                        <li id="company" className="long">
                            <div className="number">1</div>
                            <span>chọn đối tác trả góp</span>

                            <a href="#" className="actsteps">
                                <i className="tienich-ho"></i>
                            </a>
                            <a href="#">
                                <i className="tienich-fe"></i>
                            </a>
                            <a href="#">
                                <i className="tienich-hd"></i>
                            </a>
                            <a href="#">
                                <i className="tienich-acs"></i>
                            </a>
                            <a href="#">
                                <i className="tienich-jac"></i>
                            </a>
                            <a href="#">
                                <i className="tienich-mc"></i>
                            </a>
                            <a href="#">
                                <i className="tienich-mira"></i>
                            </a>
                            <a href="#">
                                <i className="tienich-doctor"></i>
                            </a>
                            <a href="#">
                                <i className="tienich-easycredit"></i>
                            </a>
                            <a href="#">
                                <i className="tienich-atmonline"></i>
                            </a>
                            <a href="#">
                                <i className="tienich-cash24h"></i>
                            </a>
                        </li>

                        <li>
                            <div className="number">2</div>
                            <span>NHẬP THÔNG TIN THANH TOÁN</span>

                            <input
                                id="strCodeNumber"
                                name="strCodeNumber"
                                class="inp"
                                type="text"
                                placeholder="Số hợp đồng"
                            ></input>
                            <input
                                id="strPhoneNumber"
                                maxlength="11"
                                name="strPhoneNumber"
                                class="inp"
                                type="tel"
                                placeholder="Số điện thoại liên hệ"
                            ></input>

                            <a href="javascript:void(0);" class="checkpay billpay">
                                Kiểm tra và thanh toán
                            </a>
                        </li>
                    </ul>
                </aside>
                <aside className="rightbox">
                    <div className="wraphelp pricecard">
                        <div class="helvus">Hướng dẫn xem mã khách hàng</div>
                        <img
                            width="400"
                            height="131"
                            src="https://www.thegioididong.com/tien-ich/Content/desktop/images/V2/tra-gop-2.png"
                        ></img>
                        <div className="boldtext">THÔNG TIN HỖ TRỢ</div>

                        <ul className="infolist">
                            <li>
                                <img
                                    src="https://www.thegioididong.com/tien-ich/Content/desktop/images/imghelp-1.png"
                                    alt=""
                                    width="50"
                                    height="50"
                                ></img>
                                <strong>Số hợp đồng</strong>
                                <p>
                                    Gồm số, không có chữ cái. Khách hàng có thể xem số hợp đồng trên thẻ thanh toán/ hợp
                                    đồng trả góp hoặc liên hệ tổng đài Home Credit 1900633633 &nbsp;để được hỗ trợ kiểm
                                    tra số hợp đồng.
                                </p>
                            </li>
                            <li>
                                <img
                                    src="https://www.thegioididong.com/tien-ich/Content/desktop/images/imghelp-3.png"
                                    alt=""
                                    width="50"
                                    height="50"
                                ></img>
                                <strong>Thông tin thanh toán</strong>
                                <p>
                                    <u>Số tiền thanh toán</u>: Có thể thanh toán nhiều hơn hoặc ít hơn số tiền cần thanh
                                    toán hàng tháng (tối thiểu 20.000đ, tối đa 50.000.000đ) và được thanh toán nhiều
                                    lần/ tháng.<br></br>
                                </p>
                            </li>
                            <li>
                                <span>
                                    <strong>
                                        <span>
                                            Lưu ý: GIAO DỊCH THANH TOÁN TRỰC TUYẾN KHÔNG HỖ TRỢ HỦY GIAO DỊCH/CHUYỂN HỢP
                                            ĐỒNG. KHÁCH HÀNG VUI LÒNG KIỂM TRA KỸ THÔNG TIN TRƯỚC KHI THANH TOÁN.
                                        </span>
                                    </strong>
                                </span>
                            </li>
                        </ul>
                    </div>
                </aside>
                <Comment />
            </div>
        </div>
    );
};
export default BoxDichvu;
