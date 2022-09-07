import './card.scss';

function Card() {
    return (
        <li className="liSim right">
            <div rel="hasbg" className="vina box2019">
                <a href="">
                    <img alt="Bùm 24h_3T" src="https://cdn.tgdd.vn/2022/07/simpackages/desk-vina-124x182.png" />
                    <label>Xem chi tiết</label>
                </a>
            </div>
            <div className="concel">
                <a href="/sim-so-dep/vinaphone?t=181" className="block">
                    <span className="onecol">
                        <i className="iconsimcard-data"> </i>
                        100 GB/Tháng
                    </span>
                    <span className="">
                        <i className="iconsimcard-call"> </i>
                        Miễn phí gọi nội mạng
                    </span>
                    <span className="">
                        <i className="iconsimcard-call"> </i>
                        50 phút/Tháng
                    </span>
                    <p className="check">
                        <i className="iconsimcard-radio"> </i>MIỄN PHÍ 03 THÁNG ĐẦU.
                    </p>
                    <p className="check">
                        <i className="iconsimcard-radio"> </i>Tặng PMH 10.000đ mua Thẻ cào. (Không áp dụng cho đặt Sim
                        Online).
                    </p>{' '}
                </a>
                <div className="inf">
                    <div className="price">
                        Giá từ: <strong>300.000₫</strong>
                    </div>
                    <a href="/sim-so-dep/vinaphone?t=181" className="chnumber">
                        Chọn số
                    </a>
                </div>
            </div>
        </li>
    );
}

export default Card;
