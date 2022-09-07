import './Tab.scss';
function Tab({}) {
    return (
        <div className="tabMayCu">
            <div className="textchoose">
                <div className="box_scroll">
                    <ul className="naviused">
                        <li className="actused">
                            <a href="/maycu">
                                <span className="icon-hot"></span>
                                Giá sốc
                            </a>
                        </li>
                        <li className="">
                            <a href="/maycu/dien-thoai" title="Điện thoại cũ">
                                Điện thoại cũ
                            </a>
                        </li>
                        <li className="">
                            <a href="/maycu/may-tinh-bang" title="Máy tính bảng cũ">
                                Tablet cũ
                            </a>
                        </li>
                        <li className="">
                            <a href="/maycu/laptop" title="Laptop cũ">
                                Laptop cũ
                            </a>
                        </li>
                        <li className="">
                            <a href="/maycu/dong-ho-thong-minh" title="Đồng hồ thông minh cũ">
                                Đồng hồ cũ
                            </a>
                        </li>
                        <li className="">
                            <a href="/maycu/dong-ho-thanh-ly" title="Đồng hồ thanh lý">
                                Đồng hồ thanh lý
                            </a>
                        </li>
                        <li className="">
                            <a href="/maycu/phu-kien" title="Phụ kiện cũ">
                                Phụ kiện cũ
                            </a>
                        </li>
                        <li className="">
                            <a href="/maycu/lcd-pc" title="LCD, PC cũ">
                                LCD, PC cũ
                            </a>
                        </li>
                    </ul>
                </div>

                <a
                    target="_blank"
                    href="https://www.thegioididong.com/chinh-sach-bao-hanh-san-pham#hmenuid4"
                    title="Xem chính sách đổi trả"
                    className="linkused"
                >
                    Chính sách đổi trả
                </a>
            </div>
        </div>
    );
}

export default Tab;
